---
title: "Variables and Questions"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Variables and Questions

<div className="article-intro">

Variables are how a template stays generic while letting each message customize itself. Inside your HTML you write `{keyName}` placeholders; for each placeholder you define a **Question** that tells the message creator what to fill in. At render time, the placeholder is replaced with the message's **Answer**.

</div>

## The flow

```
Template HTML  →  {keyName} placeholder
       │
       ▼
Question       →  defines keyName, title, fieldType, default
       │
       ▼
Message Answer →  the actual value (image URL, text, zip code, etc.)
       │
       ▼
Rendered HTML  →  placeholder replaced with answer value
```

When a message plays:

1. SignPresenter loads the template's questions.
2. It loads the message's answers (one per question).
3. For each question, it picks **answer value > question placeholder**.
4. Every `{keyName}` in the HTML is replaced with the chosen value.
5. The result is sent to the WebView.

## Defining a question

In the [template editor](./editing-a-template), the right column has a **Questions** panel. For each variable in your HTML, click **+ New** and fill in:

| Field | What it does |
|-------|--------------|
| **Key Name** | The exact text inside `{braces}` in your HTML. Lowercase, no spaces. |
| **Title** | The label shown to the message creator in the message editor. |
| **Field Type** | Controls the input widget — see the table below. |
| **Placeholder** | The default value used if the message creator doesn't provide one. |
| **Choices** | For `select`, the dropdown options. For `image`, the aspect ratio. |

Questions save automatically when you save the template.

## Field types

| Type | Renders as | Use for |
|------|-----------|---------|
| `text` | Single-line text input | Names, short labels |
| `textarea` | Multi-line text input | Long descriptions, HTML snippets |
| `image` | Image picker with cropper | Photos, logos, backgrounds |
| `video` | Video picker with upload | Video sources |
| `audio` | Audio picker | Sound files |
| `select` | Dropdown | Picking from a fixed list |
| `color` | Color picker | Background colors, accents |
| `boolean` | True/false toggle | Loop video, autoplay, etc. |
| `message` | Picker for another message | Pointer templates that redirect to another message |
| `playlist` | Picker for a playlist | Multi-zone layouts |

For `image`, the **Choices** field takes `width,height` like `1920,1080` to lock the cropper to the right aspect ratio.

For `select`, the **Choices** field takes comma-separated options like `red,blue,green`.

## Placeholder syntax

The simplest form is just `{keyName}` — replaced with the answer's value as plain text.

### Escaped form: `{keyName!}`

Adds an exclamation mark inside the braces to escape single quotes in the value. Use this when the answer is going to live inside a JS string literal:

```html
<script>
  const title = '{title!}';   // safe even if the answer contains '
</script>
```

Without the `!`, an answer like `Joe's` would break your JavaScript.

### Array form

If an answer value contains backticks (`\``), it's converted to a JS array literal at substitution time. Useful when one variable should hold many values:

```js
// Answer: "How are you?`Hello`World"
const items = [{questions}];
// Becomes: const items = ["How are you?", "Hello", "World"];
```

This is how the **Trivia** built-in template stores question lists in a single answer.

## Auto-injected variables

These don't need a question — SignPresenter provides them automatically:

| Variable | Value |
|----------|-------|
| `{id}` | The current message's ID |
| `adSeconds` | The display duration, exposed as a JS global (not a `{}` placeholder) |

`adSeconds` is the canonical way to time animations — see [Lifecycle hooks](./lifecycle-hooks).

## Defaults vs answers

Every question has a **Placeholder** (default) value. If a message doesn't provide an answer for a question, the placeholder is used.

This is how built-in templates ship with sensible defaults — the Weather template's `{zipCode}` placeholder is a generic zip, but every message overrides it with the user's actual zip.

## Reusing questions across templates

There's no shared question pool — each template owns its own questions. If you have several templates that all need a `{logo}` variable, you'll define `logo` separately on each. Tedious, but explicit.

(For [public feeds](../feeds/), questions work the same way but are scoped to the feed instead of a template — so a feed can ask its subscribers for one set of answers that all the feed's templates inherit.)

## Tips

:::tip
Name your key names consistently across templates — `image`, `title`, `subtitle`, `bgColor`. It makes it easier for users to remember which fields a message will ask for.
:::

:::warning
Don't put `{` or `}` characters in HTML literals (e.g., inside CSS `calc()` or template literals) — SignPresenter's substitution will try to match them as variables. Use `&#123;` and `&#125;` for HTML entities, or move dynamic CSS into JS.
:::

## Related

- [Template anatomy](./anatomy)
- [Lifecycle hooks](./lifecycle-hooks)
- [Template cookbook](./template-cookbook)
- [Subscriber questions for feeds](../feeds/subscriber-questions) — same idea, different scope
