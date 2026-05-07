---
title: "Provider Integrations"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Provider Integrations

<div className="article-intro">

A handful of SignPresenter feeds aren't generic — they're tightly integrated with a specific third-party system. These **provider integrations** let subscribers authenticate with the partner, pull personalized content, and have it delivered through a normal SignPresenter feed. This article covers how the integrations work conceptually and what each existing one does.

</div>

## Why provider integrations exist

A normal feed is one-to-many — you publish, many people subscribe. Provider integrations let you tailor what each subscriber sees based on data the partner system already has about them. Examples:

- A church curriculum partner already knows which classroom each church is teaching this week — the integration delivers the matching slides automatically.
- A security/attendance partner already tracks who's in the building — the integration shows real-time data.

The mechanics: when a subscriber subscribes, their subscription record carries a `data` JSON blob. SignPresenter passes this blob to the partner's API on every instructions fetch; the partner returns subscriber-specific content; SignPresenter renders it.

## Existing integrations

### Orange

Orange (`feeds 98, 99`) provides children's ministry curriculum.

- Subscribers register through the Orange organization first.
- Orange returns a registration ID that gets stored in the subscription's `data` field.
- On each render, SignPresenter calls Orange's API with the registration ID.
- Orange returns the appropriate weekly slides (Pre-K, Kids, Preteen — different feeds per age group).

Subscribers see weekly Orange content auto-rotate without manually swapping playlists each Sunday. The setup uses the OrangeFLPreview, OrangeKidsPreview, and OrangePTPreview routes in the admin app for the subscribe flow.

### Spyence

Spyence is a church security and attendance system. The Spyence integration syncs attendance data into SignPresenter for live displays — current head counts, class capacity, real-time room occupancy.

- Subscribers connect their Spyence credentials during subscribe.
- SignPresenter periodically polls Spyence for fresh attendance data.
- Custom Spyence templates render the data as a feed message.

### ITeachChurch

A Christian education curriculum partner. The integration delivers ITeachChurch-authored lesson content directly into SignPresenter feeds for use during classroom signage. Mechanically similar to Orange — partner authentication, partner-side personalization, SignPresenter renders.

## How they work technically

If you're considering a provider integration as a partner:

1. **Authentication.** Subscribe flow gathers partner credentials and stores them in the subscription's `data` field (encrypted).
2. **Server-side fetch.** When a subscriber's screen requests instructions, SignPresenter's API contacts the partner's API server-to-server with the credentials. Timeout: 8 seconds.
3. **Data shape.** Partner returns either a list of messages (URL + duration) or pre-rendered HTML.
4. **Rendering.** SignPresenter creates `PlayableMessage` records on the fly and the screen displays them as if they were normal messages.

The subscribe flow, the partner-API helper class (e.g., `SpyenceHelper`), and any custom templates are co-developed between SignPresenter and the partner.

## Building a new provider integration

Provider integrations require code — they aren't configurable from the admin UI alone. To pursue one:

1. Email [support@signpresenter.com](mailto:support@signpresenter.com) with your use case.
2. Provide your API documentation, authentication model, and content shape.
3. SignPresenter engineering scopes the integration and provides a quote.
4. After implementation, your integration ships as a system feed available to all SignPresenter accounts.

## What subscribers see

For users on the subscriber side, a provider-integrated feed looks just like any other feed:

- Shows up in the public feed browser at **Settings → Feeds**.
- Has a thumbnail, description, and price.
- Subscribe flow may include extra steps (partner login).
- Once subscribed, the feed's content appears in **Available Content** like any other feed.

The "magic" is invisible — they just get personalized content automatically.

## When to use a regular feed instead

If your only need is "publish content from my own API," use [external JSON playlists](./external-data-sources) instead — they're fully self-serve, configurable from the admin UI, and don't require SignPresenter engineering work.

Reserve provider integrations for cases where:

- Authentication needs to happen with the partner system (not a simple URL-based fetch).
- Content is genuinely per-subscriber (not just per-feed).
- The partner needs SignPresenter to handle data shaping or licensing.

## Related

- [External data sources](./external-data-sources) — the self-serve alternative
- [Distribution modes](./concepts)
- [Editing a public feed](./editing-a-feed)
