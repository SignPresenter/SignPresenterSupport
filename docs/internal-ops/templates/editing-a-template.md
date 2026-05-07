---
title: "Editing a Custom Template"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Editing a Custom Template

<div className="article-intro">

The template editor is where you write the HTML that gets rendered on screens, define the variables (questions) that messages fill in, and upload any assets the template needs. Save the template once, then create as many messages from it as you like.

</div>

:::warning
This page assumes familiarity with HTML and CSS. If you've never edited markup before, the [Designer](../../messages/digital-menus) is a better starting point.
:::

## The form

The left column has the template definition:

- **Display Seconds** — Default duration for any message that uses this template. Each message can override this when it's added to a playlist.
- **Shapes** — Which screen orientations this template supports. Multi-select between **16:9** (horizontal), **9:16** (vertical), **4:1** (marquee strip), and **1:4** (vertical strip). A message can only use the template if its shape matches.
- **Is Public** — `Yes` makes the template available to every SignPresenter account; `No` keeps it inside your account only.
- **Name** — The display name in the templates list and the new-message picker.
- **HTML** — The body of the template. SignPresenter wraps this in a full HTML page (with jQuery, Roboto font, and the designer.js helper preloaded), so you only need the contents of `<body>`.

## Variables

Inside the HTML, use `{keyName}` placeholders for any value you want messages to fill in:

```html
<div class="card">
  <img src="{image}" />
  <h1>{title}</h1>
  <p>{subtitle}</p>
</div>
```

At render time, `{image}`, `{title}`, and `{subtitle}` are replaced with the answers each message provides.

Special syntax:

- `{keyName!}` — escapes single quotes in the value (useful inside JS string literals)
- Backtick-containing values are converted to a JS array literal (useful for trivia questions, gallery image lists, etc.)
- `{id}` is auto-injected with the message ID
- `adSeconds` is exposed as a JS global with the display duration

## Questions

The right column is the **Questions** editor. Each question defines one variable:

- **Key Name** — The name inside the `{braces}` in your HTML.
- **Title** — The label shown to the message creator.
- **Field Type** — `text`, `image`, `video`, `select`, `message` (a pointer to another message), and a few others.
- **Placeholder** — Default value if no answer is provided.
- **Choices** — For select fields, the dropdown options. For images, a `width,height` aspect ratio.

Questions are saved automatically when you save the template.

## Lifecycle hooks

If your template needs animations, video playback, or data fetching, define a `startAd()` function in a `<script>` tag inside your HTML. SignPresenter calls it after the page loads (with up to 30 retries). Other optional hooks:

- `togglePause()` — called when the screen is paused
- `fastForward()` / `rewind()` — for slideshow-mode navigation

## Attachments

The Attachments panel lets you upload images, fonts, or any other files the template references. Use a relative URL like `attachments/logo.png` in your HTML — SignPresenter rewrites the path when assembling the full page.

## Saving and deleting

Click **Save** to commit the template and its questions. Click **Delete template** to permanently remove it (this only works if no messages currently reference it).

## Related

- [Custom templates overview](./)
- [Public Feeds](../feeds/) — bundle templates into a published feed
- [Templates reference (built-in catalog)](../../messages/) on the user side
