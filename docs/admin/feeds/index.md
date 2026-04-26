---
title: "Public Feeds (Feed Admin)"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Public Feeds (Feed Admin)

<div className="article-intro">

A **feed** is a content channel you publish for other SignPresenter accounts to subscribe to. As a publisher, you curate the playlists or message library, set the pricing and trial period, and earn revenue when accounts subscribe. The Feed Admin page is where you manage your feeds and see who's subscribing.

</div>

:::info
Feed publishing requires the **creator** role (or **admin**, which includes creator).
:::

Open it from **Settings → Feed Admin** in the sidebar.

## What you see

The page has two columns:

- **Feeds** — every feed you've published, with a link to its editor and a **Stats** link for analytics.
- **Subscribers** — every account currently subscribed to one of your feeds, with monthly charges and (if you're enrolled) the expected affiliate commission.

Click a feed name to [edit it](./editing-a-feed). Click **+ New** to create one.

## How feeds work

Feeds support two distribution modes:

- **Playlist mode** — You curate one or more playlists; subscribers receive the playlists as-is and add them to their screens. Updates you make flow downstream automatically.
- **Library mode** — You publish a library of individual messages; subscribers pick which ones to add to their own playlists.
- **Both** — Subscribers can choose either approach.

Feed creators define **Questions** that act as configurable variables — `{zipCode}` for a weather feed, `{businessName}` for a branded slide template, etc. Each subscriber provides answers, and the feed's templates fill in their values per subscriber.

See [Subscribing to Feeds](../../feeds/) for the consumer side of the experience.

## Pricing

When you create a feed, you set:

- **Monthly Account Fee** — A flat fee billed to each subscriber per month.
- **Per-Screen Fee** — An extra charge that scales with the number of screens the subscriber uses the feed on.
- **Trial Days** — A free trial period before billing begins. Most feeds use 30 days.

Subscribers see all three values on the feed detail page before they subscribe. Billing and trial enforcement is handled by SignPresenter — you just publish.

## Stats

The **Stats** link next to each feed opens an analytics panel:

- Number of active subscribers
- Monthly recurring revenue
- Subscription growth over time
- Per-message impressions on subscriber screens

Use stats to refine your feed — drop messages that aren't being used, double down on what's working.

## Subscribers panel

The bottom-left panel lists every active subscriber by name, with their monthly charge and your expected commission. If you're enrolled in the [affiliate program](../affiliate), the **Expected Commission** column reflects the percentage configured in your affiliate settings.

## Related

- [Editing a public feed](./editing-a-feed)
- [Affiliate & Commissions](../affiliate)
- [Custom templates](../templates/) — build the templates that power your feed
- [Subscribing to feeds (consumer side)](../../feeds/)
