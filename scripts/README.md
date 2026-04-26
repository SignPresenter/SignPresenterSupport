# SignPresenter Documentation Pipeline

Claude-powered tooling that reads SignPresenterAdmin source code, identifies undocumented features, and generates task-oriented help articles into `../docs/`.

## Setup

```bash
cd scripts
npm install
```

The pipeline expects the SignPresenter monorepo layout — `SignPresenterAdmin/` and `SignPresenterSupport/` as siblings — and reads the `.claude/instructions/` reference docs (templates.md, feeds.md, architecture.md) from the workspace root.

## Commands

### Analyze the admin source

```bash
npm run analyze
```

Walks `SignPresenterAdmin/src/{messages,playlists,screens,settings}/*Router.tsx`, extracts every `<Route>` declaration, infers the required permission (`public` / `owner` / `creator` / `admin`), and writes `output/feature-map.json`.

### Identify documentation gaps

```bash
npm run gap-report
```

Compares the feature map against the existing `../docs/` tree and reports:

- **Missing** — route has no doc file
- **Placeholder** — doc exists but is under 80 words
- **Documented** — doc exists and has real content

Saves `output/gap-report.json`.

### Generate articles

```bash
ANTHROPIC_API_KEY=sk-... npm run generate           # all articles
ANTHROPIC_API_KEY=sk-... npm run generate -- --slug admin/templates/index   # one article
npm run generate -- --dry-run                       # preview without calling the API
npm run generate -- --model claude-opus-4-7         # override the model
```

Each article is written to its mapped slug under `../docs/`. Articles whose slug starts with `admin/` get `displayed_sidebar: adminSidebar` in the front matter so they're hidden from the public sidebar.

The generator passes the matching `.claude/instructions/*.md` doc to Claude as additional product context (templates.md for template articles, feeds.md for feed articles, etc.) so generation isn't relying on the React component alone.

## Permission detection

The analyzer infers the required permission from two signals:

1. **Route prefix** — `/settings/templates`, `/settings/admin` are admin-only; `/settings/feedAdmin` and `/settings/affiliate` are creator-level; `/settings/billing` and `/settings/feeds` are owner-only.
2. **Source code** — fallback grep for `UserHelper.checkAccess("admin"|"creator"|"owner")` in the component.

Routes resolved to `admin` or `creator` are routed to `docs/admin/*` slugs, hidden from the public sidebar. `owner` routes stay in the public docs but get a callout admonition. `public` routes go to the user-guide tree.

## Customizing the route → slug map

Edit `ROUTE_TO_DOC` in `src/generator.ts`. Each entry takes:

```ts
"/settings/billing": {
  slug: "billing/index",      // path under docs/
  title: "Billing & Payment",  // article title
  section: "Billing",          // sidebar section label
  contextDocs: ["feeds.md"]    // optional: extra .claude/instructions/ files to include in prompt
},
```

## What the generator writes

Every generated article follows the SignPresenterSupport house style:

- YAML front matter with `title` (and `displayed_sidebar: adminSidebar` for admin docs)
- `<div className="article-intro">` opening paragraph
- For admin pages, an `<span className="admin-badge">Administrators only</span>` chip
- Numbered step-by-step instructions
- Docusaurus admonitions (`:::tip`, `:::info`, `:::note`, `:::warning`) where helpful
- A `## Related` section linking to 2–3 sibling articles

Generated content always needs a human review pass — verify nothing is invented, drop in screenshots from `static/img/`, and tighten the voice.

## Sidebar updates

The `sidebars.ts` file in the parent directory is hand-maintained. After generating new articles, add references to them under the appropriate section. For admin articles, add them under the `adminSidebar` key.
