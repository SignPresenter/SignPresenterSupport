import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { glob } from "glob";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import type { FeatureMap } from "./analyzer.js";
import { ROUTE_TO_DOC, DOCS_DIR } from "./generator.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface ExistingDoc {
  filePath: string;
  slug: string;
  title: string;
  wordCount: number;
  isPlaceholder: boolean;
}

interface GapEntry {
  route: string;
  section: string;
  docSlug: string;
  title: string;
  status: "missing" | "placeholder" | "documented";
  wordCount: number;
}

async function scanExistingDocs(): Promise<ExistingDoc[]> {
  if (!existsSync(DOCS_DIR)) return [];
  const files = await glob("**/*.md", { cwd: DOCS_DIR });
  const docs: ExistingDoc[] = [];

  for (const file of files) {
    const fullPath = resolve(DOCS_DIR, file);
    const content = readFileSync(fullPath, "utf-8");
    const { data, content: body } = matter(content);
    const slug = file.replace(/\.md$/, "").replace(/\\/g, "/");
    const words = body.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    docs.push({
      filePath: fullPath,
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      wordCount,
      isPlaceholder: wordCount < 80,
    });
  }
  return docs;
}

export async function generateGapReport(featureMap: FeatureMap): Promise<GapEntry[]> {
  const existing = await scanExistingDocs();
  const bySlug = new Map(existing.map((d) => [d.slug, d]));
  const gaps: GapEntry[] = [];

  for (const route of featureMap.routes) {
    if (!route.isDocumentable) continue;
    const mapping = ROUTE_TO_DOC[route.path];
    if (!mapping) continue;

    const doc = bySlug.get(mapping.slug);
    if (!doc) {
      gaps.push({ route: route.path, section: mapping.section, docSlug: mapping.slug, title: mapping.title, status: "missing", wordCount: 0 });
    } else if (doc.isPlaceholder) {
      gaps.push({ route: route.path, section: mapping.section, docSlug: mapping.slug, title: mapping.title, status: "placeholder", wordCount: doc.wordCount });
    } else {
      gaps.push({ route: route.path, section: mapping.section, docSlug: mapping.slug, title: mapping.title, status: "documented", wordCount: doc.wordCount });
    }
  }
  return gaps;
}

export function printGapReport(gaps: GapEntry[]): void {
  const missing = gaps.filter((g) => g.status === "missing");
  const placeholder = gaps.filter((g) => g.status === "placeholder");
  const documented = gaps.filter((g) => g.status === "documented");

  console.log("\n=== Documentation Gap Report ===\n");
  console.log(`Total routes mapped: ${gaps.length}`);
  console.log(`  Documented:  ${documented.length}`);
  console.log(`  Placeholder: ${placeholder.length}`);
  console.log(`  Missing:     ${missing.length}\n`);

  if (placeholder.length > 0) {
    console.log("--- Placeholder (need more content) ---");
    for (const g of placeholder) {
      console.log(`  [${g.section.padEnd(14)}] ${g.docSlug.padEnd(42)} "${g.title}" (${g.wordCount} words)`);
    }
    console.log("");
  }

  if (missing.length > 0) {
    console.log("--- Missing (no doc file) ---");
    for (const g of missing) {
      console.log(`  [${g.section.padEnd(14)}] ${g.docSlug.padEnd(42)} "${g.title}"`);
    }
    console.log("");
  }

  if (documented.length > 0) {
    console.log("--- Documented ---");
    for (const g of documented) {
      console.log(`  [${g.section.padEnd(14)}] ${g.docSlug.padEnd(42)} "${g.title}" (${g.wordCount} words)`);
    }
    console.log("");
  }
}
