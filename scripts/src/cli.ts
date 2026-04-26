import { Command } from "commander";
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildFeatureMap } from "./analyzer.js";
import { generateAllArticles, ROUTE_TO_DOC } from "./generator.js";
import { generateGapReport, printGapReport } from "./gap-analyzer.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, "..", "output");

const program = new Command();

program
  .name("signpresenter-docs")
  .description("Documentation pipeline for SignPresenterSupport — analyzes SignPresenterAdmin and generates help articles with Claude.")
  .version("1.0.0");

program
  .command("analyze")
  .description("Parse SignPresenterAdmin source and produce output/feature-map.json")
  .action(async () => {
    console.log("Analyzing SignPresenterAdmin…");
    const featureMap = await buildFeatureMap();

    mkdirSync(OUTPUT_DIR, { recursive: true });
    const outputPath = resolve(OUTPUT_DIR, "feature-map.json");
    writeFileSync(outputPath, JSON.stringify(featureMap, null, 2));

    const documentable = featureMap.routes.filter((r) => r.isDocumentable);
    console.log(`\nFeature map summary:`);
    console.log(`  Routes:           ${featureMap.routes.length}  (${documentable.length} documentable)`);
    console.log(`  Components seen:  ${Object.keys(featureMap.components).length}`);
    const byPerm = documentable.reduce<Record<string, number>>((acc, r) => {
      acc[r.permission] = (acc[r.permission] || 0) + 1;
      return acc;
    }, {});
    console.log(`  Permission breakdown:`);
    for (const [perm, n] of Object.entries(byPerm)) console.log(`    ${perm.padEnd(10)} ${n}`);
    const mapped = documentable.filter((r) => ROUTE_TO_DOC[r.path]).length;
    console.log(`  Routes mapped to a slug: ${mapped} / ${documentable.length}`);
    console.log(`\nWrote ${outputPath}`);
  });

program
  .command("gap-report")
  .description("Show documentation coverage — which routes are documented, placeholder, or missing")
  .action(async () => {
    console.log("Building feature map…");
    const featureMap = await buildFeatureMap();
    console.log("Scanning existing docs…");
    const gaps = await generateGapReport(featureMap);
    printGapReport(gaps);
    mkdirSync(OUTPUT_DIR, { recursive: true });
    const outputPath = resolve(OUTPUT_DIR, "gap-report.json");
    writeFileSync(outputPath, JSON.stringify(gaps, null, 2));
    console.log(`Report saved to ${outputPath}`);
  });

program
  .command("generate")
  .description("Generate documentation articles using Claude")
  .option("--slug <slug>", "Generate a single article by slug (e.g. messages/editing-a-message)")
  .option("--model <model>", "Anthropic model id", "claude-sonnet-4-5-20251022")
  .option("--api-key <key>", "Anthropic API key (or set ANTHROPIC_API_KEY env var)")
  .option("--dry-run", "Print what would be generated without calling the API")
  .action(async (options) => {
    if (!options.dryRun) {
      const apiKey = options.apiKey || process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        console.error("Error: provide --api-key or set ANTHROPIC_API_KEY.");
        process.exit(1);
      }
      const featureMap = await buildFeatureMap();
      await generateAllArticles(featureMap, apiKey, { slug: options.slug, model: options.model });
    } else {
      const featureMap = await buildFeatureMap();
      await generateAllArticles(featureMap, "", { slug: options.slug, dryRun: true });
    }
  });

program.parse();
