---
title: "Template Anatomy"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Template Anatomy

<div className="article-intro">

A SignPresenter template is an HTML fragment that gets wrapped into a full page and rendered inside a WebView on the TV. Understanding what's inside that wrapper — and what happens during rendering — is the foundation for building any custom template.

</div>

## What you write

In the [template editor](./editing-a-template), the **HTML** field accepts the contents of `<body>` only. SignPresenter wraps this fragment automatically. So a minimal template might be just:

```html
<div id="card">
  <img src="{image}" />
  <h1>{title}</h1>
</div>
<style>
  body { margin: 0; background: #000; }
  #card { display: flex; flex-direction: column; align-items: center; }
  #card h1 { color: white; font-family: Roboto, sans-serif; }
</style>
<script>
  function startAd() {
    // optional — called when the message starts displaying
  }
</script>
```

That's a complete, valid template.

## What SignPresenter wraps around it

At render time, SignPresenter assembles a full HTML page. Roughly:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
  <script src="jquery.min.js"></script>
  <script src="designer.js"></script>
  <script>const adSeconds = 15;</script>
</head>
<body>
  <!-- Your template HTML, with {variables} already substituted -->
</body>
</html>
```

So your template can rely on:

- **jQuery** is preloaded
- **Roboto font** is available via `font-family: Roboto`
- **designer.js** helper for animations
- **`adSeconds`** is a global JS variable with the message's display duration

## The rendering pipeline

The trip from "user saves a message" to "pixels on a screen" goes through several stops:

1. **API builds Instructions.** When a Fire Stick polls `/instructions/:screenId`, the API resolves the screen's schedule → playlists → messages → templates → questions → answers. It bundles everything into one JSON payload.

2. **Screen caches.** The Fire Stick stores templates in a Zustand-backed store with LRU eviction (max 50 templates) and stores message media in the OS file cache.

3. **Message routing.** When a message starts playing, `Message.tsx` on the device looks at the `templateId` and routes to a specialized renderer:
   - `1, 13, 24` → `ImageMessage`
   - `3, 11, 14, 15` → `VideoMessage`
   - `4` → `HtmlMessage`
   - `7` → `DesignerMessage`
   - `25, 26, 29` → `ZonedMessage` (multi-zone layouts)
   - `30` → `YoutubeMessage`
   - **default** → `WebMessage` (the generic HTML renderer — what custom templates use)

4. **HTML assembly (WebMessage).** For custom templates, the device wraps your HTML in the page above, substitutes every `{variable}` from the message's answers, and hands the result to a WebView.

5. **Lifecycle.** After load, the device calls `startAd()` (with up to 30 retries to handle slow init). When the duration expires, the next message starts and this WebView is unmounted.

## Variable substitution

Every `{keyName}` in your HTML is replaced with the message's answer for that question — see [Variables and questions](./variables-and-questions) for the full syntax.

Substitution happens **before** the HTML reaches the WebView, so `{title}` becomes literal text in the markup. That's important: variables aren't reactive. If you change a message's answer, the template re-renders from scratch.

## Multi-shape templates

A single template can support multiple aspect ratios — 16:9, 9:16, 4:1, 1:4 — by listing them all in the **Shapes** field. The same HTML runs for every shape; CSS is your responsibility for handling the different dimensions. See [Multi-shape support](./template-cookbook#recipe-multi-shape-support) for the recommended pattern.

## What's NOT available

- **No build step.** Your HTML, CSS, and JS are saved as-is. No Webpack, no TypeScript, no ES module imports. Inline `<script>` tags only.
- **No SignPresenter API access from inside a template.** Templates are sandboxed — they only see their own HTML, the substituted variables, and the global `adSeconds`. To pull external data, fetch it directly via `fetch()` or jQuery AJAX.
- **No persistence between renders.** Every time a message plays, the WebView is fresh. If you want state across plays, store it in `localStorage`.

## Related

- [Editing a custom template](./editing-a-template)
- [Variables and questions](./variables-and-questions)
- [Lifecycle hooks](./lifecycle-hooks)
- [Template cookbook](./template-cookbook)
