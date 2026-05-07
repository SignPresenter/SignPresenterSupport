---
title: "Subscriber Questions"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Subscriber Questions

<div className="article-intro">

Feed questions are how each subscriber customizes your feed without you having to publish a separate version per customer. Define the variables your templates need (zip code, business name, social handles, brand color), and each subscriber answers them once — their values flow into every feed message they display.

</div>

## How they differ from template questions

[Template questions](../templates/variables-and-questions) are scoped to a single template. Each message that uses the template provides its own answers.

**Feed questions** are scoped to a single feed. Each *subscription* provides its own answers. The same answer is used across every message the subscriber displays from your feed.

```
Template question  →  defined per template  →  answered per message
Feed question      →  defined per feed      →  answered per subscription
```

A feed message can use both:

- The template's questions, with answers provided by you (the feed publisher) — these are constants across subscribers.
- The feed's questions, with answers provided by each subscriber — these vary per subscriber.

## Defining feed questions

In the [feed editor](./editing-a-feed), the right column has a **Questions** panel. For each variable you want subscribers to fill in:

1. Click **+ New** in the Questions panel.
2. Set the **Key Name** to match the `{keyName}` in your feed's templates.
3. Set a **Title** (the label subscribers see when they configure the feed).
4. Choose a **Field Type** — same options as template questions: text, image, color, select, etc.
5. Provide a **Placeholder** (default) — if a subscriber doesn't answer, this value is used.

Save the feed. New subscribers see the questions during the subscribe flow; existing subscribers can update answers any time from their feed details page.

## Answer resolution

When a feed message renders for a subscriber, SignPresenter walks this priority chain to fill each `{keyName}`:

1. **Subscriber's answer** to the feed question, if they provided one.
2. **Feed question's placeholder**, if no subscriber answer exists.
3. **Template's answer**, if the template defines the same key.
4. **Template question's placeholder**, as a final fallback.

This means feed-level customization always wins over template-level defaults. So if your weather template's question has placeholder `90210`, but your feed's question has placeholder `30309`, and the subscriber answered `02101` — the subscriber's `02101` is used.

## Common feed-question patterns

| Pattern | Field type | Why |
|---------|-----------|-----|
| `{zipCode}` | text | Localize weather forecasts per subscriber |
| `{businessName}` | text | Stamp the subscriber's name onto generic templates |
| `{logo}` | image | Subscriber-uploaded logo for branded slides |
| `{accentColor}` | color | Coordinate brand colors |
| `{facebook}`, `{twitter}`, `{instagram}` | text | Social media handles for "follow us" templates |
| `{phone}`, `{email}`, `{address}` | text | Contact info on lobby signage |

A typical commercial feed has 5–10 subscriber questions. Too many and the subscribe flow feels like a form; too few and your feed feels generic.

## Field types worth highlighting

### `select` for plan-based content

Use a select-with-choices field to gate certain content per subscription tier. The template's HTML can branch on the answer:

```html
<script>
  function startAd() {
    if ('{plan}' === 'premium') showPremiumOverlay();
  }
</script>
```

Combined with feed pricing (see [Pricing, trials, and billing](./pricing-and-trials)), this is how to ship "good / better / best" tiers without separate feeds.

### `image` for logos and brand assets

Subscriber uploads a PNG or JPG; you reference it as `{logo}` in your templates. SignPresenter handles the upload and CDN URL automatically.

### `text` with structured input

Plain text fields can hold backtick-delimited arrays — see [Variables and questions](../templates/variables-and-questions#array-form). Use this when one subscriber answer needs to populate a list (e.g., a feed of trivia questions where each subscriber adds their own).

## Editing answers (subscribers)

Subscribers update their answers from the [feed detail page](../../feeds/feed-detail) — the same page where they originally subscribed. Their answers take effect on the next cache refresh (1–2 minutes typically).

You don't get notified when a subscriber changes an answer; if you need to know (e.g., to validate against business rules), you'll have to bake validation into your templates' rendering logic, or check programmatically via the API.

## Tips

:::tip
Place the most important questions first — the subscribe flow shows them in the order you defined them. If you don't have an explicit order field, reorder by deleting and recreating questions in the right sequence.
:::

:::warning
Renaming a question's **Key Name** breaks every subscriber currently using the old name. Their answers don't auto-migrate. If you must rename, do it during a quiet period and notify subscribers.
:::

## Related

- [Distribution modes](./concepts) — Playlist vs Library
- [Pricing, trials, and billing](./pricing-and-trials)
- [Template variables and questions](../templates/variables-and-questions) — the template-scoped equivalent
