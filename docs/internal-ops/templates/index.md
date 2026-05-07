---
title: "Custom Templates"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Custom Templates

<div className="article-intro">

A **template** is the HTML blueprint behind every message in SignPresenter. Templates define what gets rendered on a screen — the markup, the styles, the placeholders for variables. The Templates page is where admins manage the catalog of templates available to your account.

</div>

:::warning
Templates are an advanced feature that requires HTML knowledge. Most users build messages from existing templates and never need to touch this page. Reach for custom templates only when you have specific layouts that aren't covered by SignPresenter's 30+ built-ins.
:::

## What you see

The page is split into two columns:

- **Message Templates** — full-screen templates that fill an entire message slot
- **Overlay Templates** — small persistent elements (marquees, logos, clocks) rendered on top of messages

Each column is a list of templates, sorted by name. Click any name to open the [template editor](./editing-a-template). Click **+ New** at the top of either column to create a new template of that type.

## Template types

| Type | What it does |
|------|--------------|
| **Message** | Full-screen content, displayed for a set duration. Each message in a playlist references a message template. |
| **Overlay** | Small element rendered on top of every message — typically a logo in the corner, a marquee at the bottom, or a clock. Position is controlled by the `positions` field. |

## Built-in templates

SignPresenter ships with a catalog of system templates that every account can use — Simple Image, Video with Audio, Designer, Weather, Calendar variants, Three Zone, and many more. These are owned by the system account and appear alongside your custom templates in the Available Templates list when building a message.

You don't need to recreate built-in templates — start from one when you can.

## When to build a custom template

The most common reasons to create a custom template:

- **Branded layouts** — A consistent header/footer, logo placement, or color scheme across many messages.
- **Industry-specific data** — A template that pulls a JSON feed only your business uses.
- **Multi-message reuse** — A single layout that should drive dozens of messages with different content.

For one-off layouts, prefer the [**Designer**](../../messages/digital-menus) — it's faster and doesn't require HTML.

## Related

- [Editing a custom template](./editing-a-template)
- [Public Feeds](../feeds/) — how to publish your custom templates as part of a feed
- [Admin Dashboard](../admin-dashboard)
