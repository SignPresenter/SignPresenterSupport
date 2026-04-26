---
title: Administrator Guide
description: SignPresenter administrator documentation — custom templates, public feeds, affiliate program, and account-wide settings.
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Administrator Guide

<div className="article-intro">

This section is the deep documentation for SignPresenter administrators — building custom templates, publishing public feeds, running the affiliate program, and using the system-wide admin dashboard. Everything here requires the **admin** or **creator** role.

</div>

## How to know if this section applies to you

Open **Settings** in SignPresenter and look at the left sidebar. The presence of these items tells you what role you have:

| Sidebar item visible | Role you have |
|----------------------|---------------|
| **Templates** | admin |
| **Admin** | admin |
| **Feed Admin** | creator (or admin) |
| **Affiliate** | enrolled in the affiliate program |
| **Billing** + **Feeds** | owner |

If you don't see Templates, Feed Admin, Admin, or Affiliate, this section doesn't apply to your account. The [regular user documentation](../) covers everything you can do.

If you need a role you don't have, the account owner or an existing admin can grant it from the user permissions screen — see [Inviting Users](../account/inviting-users) for the role grid.

## What's in here

### Custom Templates

The HTML blueprint behind every message. SignPresenter ships ~30 built-in templates (Simple Image, Video with Audio, Designer, Weather, Calendar variants, Three Zone, etc.), and admins can author their own for branded layouts, custom data sources, or template-driven message families.

- [Custom Templates overview](./templates/) — the catalog page
- [Editing a custom template](./templates/editing-a-template) — the editor walkthrough
- [Template anatomy](./templates/anatomy) — what gets rendered on a screen and how
- [Variables and questions](./templates/variables-and-questions) — the `{keyName}` system that connects messages to templates
- [Lifecycle hooks](./templates/lifecycle-hooks) — `startAd()`, `togglePause()`, `fastForward()`, `rewind()`
- [Overlay templates](./templates/overlay-templates) — marquees, logos, clocks rendered on top of messages
- [Template cookbook](./templates/template-cookbook) — worked examples you can copy and adapt

### Public Feeds

Curated content channels you publish for other accounts to subscribe to. Feeds support billing, trials, subscriber questions, and external data sources.

- [Feed Admin overview](./feeds/) — the feeds you've published
- [Editing a feed](./feeds/editing-a-feed) — the feed editor
- [Distribution modes — Playlist vs Library](./feeds/concepts) — how subscribers consume feed content
- [Subscriber questions](./feeds/subscriber-questions) — per-subscriber customization
- [Pricing, trials, and billing](./feeds/pricing-and-trials) — monthly fees, per-screen fees, trial periods
- [External data sources](./feeds/external-data-sources) — RSS feeds and external JSON playlists
- [Provider integrations](./feeds/provider-integrations) — Orange, Spyence, ITeachChurch

### Admin Dashboard

System-wide tools for SignPresenter staff — revenue, account management, user search, and support tickets.

- [Admin Dashboard overview](./admin-dashboard)
- [Managing accounts](./managing-accounts)
- [Managing users](./managing-users)
- [Support ticket queue](./support-tickets)

### Affiliate Program

Earn revenue by referring new accounts or by publishing feeds.

- [Affiliate overview](./affiliate)
- [Affiliate setup](./affiliate-setup) — getting your account enrolled
- [Commission check detail](./commission-check) — anatomy of a payout

## Where to start

If you're new to SignPresenter administration, read in this order:

1. [Custom Templates → Anatomy](./templates/anatomy) — to understand what a template *is*
2. [Variables and questions](./templates/variables-and-questions) — the data flow
3. [Public feeds → Distribution modes](./feeds/concepts) — how publishing works
4. [Pricing, trials, and billing](./feeds/pricing-and-trials) — the commercial side

After that, dip into specific articles as you need them.

## Need help?

Admin features are advanced — if you hit something that doesn't fit the docs, email [support@signpresenter.com](mailto:support@signpresenter.com) or open a support ticket from inside the app. We watch admin tickets closely.
