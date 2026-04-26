import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import type { ComponentAnalysis, FeatureMap, Permission, RouteInfo } from "./analyzer.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// scripts/src/generator.ts → ../../docs
export const DOCS_DIR = resolve(__dirname, "..", "..", "docs");
export const INSTRUCTIONS_DIR = resolve(__dirname, "..", "..", "..", ".claude", "instructions");

interface DocArticle {
  slug: string;
  title: string;
  section: string;
  permission: Permission;
  routePath: string;
  componentFile: string;
  analysis: ComponentAnalysis | null;
  contextDocs: string[]; // file names in .claude/instructions/ to include as additional context
}

/**
 * Map a SignPresenterAdmin route to a documentation slug + title.
 * Slugs starting with "admin/" are gated behind the adminSidebar.
 */
export const ROUTE_TO_DOC: Record<string, { slug: string; title: string; section: string; contextDocs?: string[] }> = {
  // User-facing
  "/messages": { slug: "messages/index", title: "Messages", section: "Messages", contextDocs: ["templates.md"] },
  "/messages/:id": { slug: "messages/editing-a-message", title: "Editing a Message", section: "Messages", contextDocs: ["templates.md"] },
  "/playlists": { slug: "playlists/index", title: "Playlists", section: "Playlists" },
  "/playlists/:id": { slug: "playlists/editing-a-playlist", title: "Editing a Playlist", section: "Playlists" },
  "/screens": { slug: "screens/index", title: "Screens & Devices", section: "Screens" },
  "/screens/:id": { slug: "screens/screen-settings", title: "Screen Settings", section: "Screens" },
  "/settings": { slug: "account/settings-overview", title: "Account Settings", section: "Account" },
  "/settings/support": { slug: "troubleshooting/index", title: "Troubleshooting & Support", section: "Troubleshooting" },
  "/settings/billing": { slug: "billing/index", title: "Billing & Payment", section: "Billing" },
  "/settings/feeds": { slug: "feeds/index", title: "Subscribing to Feeds", section: "Feeds" },
  "/settings/feeds/:id": { slug: "feeds/feed-detail", title: "Feed Subscription Details", section: "Feeds" },

  // Admin-gated → docs/admin/*
  "/settings/templates": { slug: "admin/templates/index", title: "Custom Templates", section: "Admin", contextDocs: ["templates.md"] },
  "/settings/templates/:id": { slug: "admin/templates/editing-a-template", title: "Editing a Custom Template", section: "Admin", contextDocs: ["templates.md"] },
  "/settings/feedAdmin": { slug: "admin/feeds/index", title: "Public Feeds", section: "Admin", contextDocs: ["feeds.md"] },
  "/settings/feedAdmin/:id": { slug: "admin/feeds/editing-a-feed", title: "Editing a Public Feed", section: "Admin", contextDocs: ["feeds.md"] },
  "/settings/admin": { slug: "admin/admin-dashboard", title: "Admin Dashboard", section: "Admin" },
  "/settings/affiliate": { slug: "admin/affiliate", title: "Affiliate & Commissions", section: "Admin" },
  "/settings/affiliate/check/:id": { slug: "admin/commission-check", title: "Commission Check Detail", section: "Admin" },
};

function buildArticleList(featureMap: FeatureMap): DocArticle[] {
  const articles: DocArticle[] = [];
  for (const route of featureMap.routes) {
    if (!route.isDocumentable) continue;
    const mapping = ROUTE_TO_DOC[route.path];
    if (!mapping) continue;
    const analysis = featureMap.components[route.componentFile] || null;
    articles.push({
      slug: mapping.slug,
      title: mapping.title,
      section: mapping.section,
      permission: route.permission,
      routePath: route.path,
      componentFile: route.componentFile,
      analysis,
      contextDocs: mapping.contextDocs ?? [],
    });
  }
  return articles;
}

function loadContextDocs(names: string[]): string {
  if (names.length === 0) return "";
  const blocks: string[] = [];
  for (const name of names) {
    const path = resolve(INSTRUCTIONS_DIR, name);
    if (!existsSync(path)) continue;
    const content = readFileSync(path, "utf-8");
    blocks.push(`### Additional context from ${name}\n\n${content}\n`);
  }
  return blocks.length === 0
    ? ""
    : `## Product context (read carefully — this is canonical)\n\n${blocks.join("\n\n")}`;
}

function buildPrompt(article: DocArticle, componentSource: string): string {
  const a = article.analysis;
  const analysisSection = a
    ? [
        a.heading ? `- Heading: ${a.heading}` : "",
        a.formFields.length ? `- Form fields: ${a.formFields.slice(0, 20).join(", ")}` : "",
        a.buttons.length ? `- Buttons: ${a.buttons.slice(0, 20).join(", ")}` : "",
        a.tableColumns.length ? `- Table columns: ${a.tableColumns.slice(0, 15).join(", ")}` : "",
        a.tabs.length ? `- Tabs: ${a.tabs.slice(0, 10).join(", ")}` : "",
        a.permissionsChecked.length ? `- Permission checks in source: ${a.permissionsChecked.join(", ")}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const permissionNote =
    article.permission === "admin"
      ? "This page is **admin-only** — start the article with an admonition that says so."
      : article.permission === "creator"
        ? "This page is for users with the **creator** role. Start the article with an admonition that says so."
        : article.permission === "owner"
          ? "This page is **owner-only** — start the article with an admonition that says so."
          : "";

  const adminSidebarFront = article.slug.startsWith("admin/")
    ? "\n\nIMPORTANT: This article lives under /docs/admin/. The first line of the body (after the front matter) MUST be:\n```\n<span className=\"admin-badge\">Administrators only</span>\n```"
    : "";

  return `You are writing end-user documentation for SignPresenter (https://signpresenter.com), a digital signage platform that runs on Amazon Fire TV Sticks and Android devices.

Write a help article for: "${article.title}"

This page is at admin route: ${article.routePath}
It belongs to the ${article.section} section.
Required permission: ${article.permission}

${permissionNote}

${analysisSection ? `Source-code analysis of this page found:\n${analysisSection}` : ""}

${loadContextDocs(article.contextDocs)}

Here is the React component source code for this page (truncated if long):

\`\`\`tsx
${componentSource}
\`\`\`

Write ONLY the markdown body content (the front matter is added separately). Follow this format:

1. Open with a brief 1–2 sentence description of what this feature does and why someone uses it. Wrap it in:
   \`\`\`
   <div className="article-intro">

   ...your intro paragraph...

   </div>
   \`\`\`
2. If this is admin-/owner-/creator-gated, include an admonition right after the intro:
   - \`:::info\` for owner-gated billing or subscription features
   - For admin-only pages, the \`<span className="admin-badge">Administrators only</span>\` line replaces the admonition (it is added at the very top, BEFORE the intro)
3. Step-by-step instructions for the primary workflow using numbered lists.
4. Add ## headings for any secondary workflows the page supports.
5. Use Docusaurus admonitions where helpful: \`:::tip\`, \`:::info\`, \`:::note\`, \`:::warning\`.
6. End with a "## Related" section linking to 2–3 relevant articles.

Voice rules:
- Friendly, conversational, "you" voice. ("Click the **Save** button" — not "The user clicks the Save button")
- Reference UI elements in **bold**.
- Don't invent features that aren't in the source code or the product context above.
- Don't include screenshot placeholders unless the source code uses an obvious visual that benefits from one.
- Keep articles focused: target 200–500 words.
- The product is called **SignPresenter** (not "Sign Presenter" — one word).
- Use industry-neutral language by default ("your business", "your account") — only mention churches, restaurants, fitness, or chiropractic when the source code makes it specific.
${adminSidebarFront}`;
}

export async function generateArticle(
  article: DocArticle,
  client: Anthropic,
  model: string,
): Promise<string> {
  let componentSource = "";
  if (article.componentFile && existsSync(article.componentFile)) {
    componentSource = readFileSync(article.componentFile, "utf-8");
    if (componentSource.length > 8000) {
      componentSource = componentSource.substring(0, 8000) + "\n// … (truncated)";
    }
  }

  const prompt = buildPrompt(article, componentSource);
  const response = await client.messages.create({
    model,
    max_tokens: 2200,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock && "text" in textBlock ? textBlock.text : "";
}

export async function writeArticle(article: DocArticle, body: string): Promise<string> {
  const filePath = resolve(DOCS_DIR, article.slug + ".md");
  await mkdir(dirname(filePath), { recursive: true });

  const titleEscaped = article.title.replace(/"/g, '\\"');
  const frontMatter = article.slug.startsWith("admin/")
    ? `---\ntitle: "${titleEscaped}"\ndisplayed_sidebar: adminSidebar\n---\n\n`
    : `---\ntitle: "${titleEscaped}"\n---\n\n`;
  writeFileSync(filePath, frontMatter + body.trim() + "\n");
  return filePath;
}

export async function generateAllArticles(
  featureMap: FeatureMap,
  apiKey: string,
  options: { slug?: string; model?: string; dryRun?: boolean } = {},
): Promise<void> {
  const model = options.model ?? "claude-sonnet-4-5-20251022";
  const articles = buildArticleList(featureMap);
  const targets = options.slug ? articles.filter((a) => a.slug === options.slug) : articles;

  if (targets.length === 0) {
    console.log(options.slug ? `No article matches slug "${options.slug}"` : "No articles to generate.");
    return;
  }

  if (options.dryRun) {
    console.log(`Would generate ${targets.length} article(s):`);
    for (const a of targets) {
      console.log(`  ${a.permission.padEnd(8)}  ${a.slug.padEnd(45)} ← ${a.routePath}`);
    }
    return;
  }

  const client = new Anthropic({ apiKey });
  console.log(`Generating ${targets.length} article(s) with ${model}…\n`);

  for (const article of targets) {
    process.stdout.write(`  ${article.slug.padEnd(45)} `);
    try {
      const body = await generateArticle(article, client, model);
      const filePath = await writeArticle(article, body);
      console.log(`✓  → ${filePath.replace(DOCS_DIR, "docs")}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`✗  ${msg}`);
    }
  }
}
