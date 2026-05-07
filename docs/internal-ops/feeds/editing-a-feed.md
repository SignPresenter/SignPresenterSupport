---
title: "Editing a Public Feed"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Editing a Public Feed

<div className="article-intro">

The feed editor is where you set up everything about a feed you're publishing — name, description, pricing, distribution mode, supported shapes, subscriber questions, and the playlists that drive content. Save it once, then refine over time as you see how subscribers use it.

</div>

:::info
This page requires the **creator** or **admin** role.
:::

Open it by clicking a feed in the [Feed Admin](./) list, or **+ New** to create one.

## The form

The left column has the feed's settings:

| Field | Notes |
|-------|-------|
| **Name** | What subscribers see in the public feed browser. |
| **Is Public** | `Yes` lists it in the browser; `No` keeps it hidden (subscribers join via direct link only). |
| **Mode** | **Playlist** (you curate playlists), **Library** (subscribers pick messages), or **Both**. |
| **Shapes** | Which orientations the feed supports — Horizontal (16:9), Vertical (9:16), or Both. |
| **Description** | HTML allowed. This is what subscribers see on the feed detail page. |
| **Monthly Fee** | Per-subscriber monthly charge. |
| **Per Screen Fee** | Extra monthly charge per screen the feed runs on. |
| **Trial Days** | Free trial period before billing begins. 30 is typical. |
| **Thumbnail** | Click the image to open the cropper and upload a new one. |

Click **Save** to commit.

## Questions

The right column is the **Questions** editor — where you define configurable variables for the feed's templates. Common examples:

- `{zipCode}` for a weather feed
- `{businessName}` for branded slides
- `{facebook}`, `{twitter}`, `{instagram}` for social media slides

Each question has a Key Name (what's used inside `{braces}`), a Title (shown to subscribers), a Field Type, and an optional placeholder default. Subscriber answers override the defaults at render time.

## Editing the feed's playlists

When the feed mode is **Playlist** or **Both**, the form header shows an **Edit Playlist** button. Clicking it opens that playlist's editor — drop in messages, set the order, save.

When the mode is **Library** or **Both**, an **Edit Library** button appears for the message library. Add the messages you want subscribers to pick from.

You can edit either playlist any time; changes propagate to every active subscription on the next cache refresh.

## Trial and billing

Once a feed is published and an account subscribes, SignPresenter handles the rest:

- A **billable item** is created with the start date pushed out by your trial-days value.
- After the trial, monthly billing begins automatically.
- If the subscriber unsubscribes, the billable item is deactivated and billing stops.

You don't manage individual subscriber bills — SignPresenter aggregates everything into your payout, with affiliate commissions deducted (if applicable). See [Affiliate & Commissions](../affiliate).

## Deleting a feed

The **Delete feed** button at the bottom permanently removes the feed. Use this with care — active subscribers will lose access to the feed's content. There's no undo.

## Related

- [Public feeds overview](./)
- [Custom templates](../templates/) — what powers feed messages
- [Affiliate & Commissions](../affiliate)
- [Subscribing to feeds (consumer side)](../../feeds/)
