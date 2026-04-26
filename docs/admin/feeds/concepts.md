---
title: "Distribution Modes — Playlist vs Library"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Distribution Modes — Playlist vs Library

<div className="article-intro">

A feed publishes content to its subscribers in one of two modes — **Playlist** or **Library** — or both at once. The mode shapes how subscribers consume your content, what they can customize, and how much control they have. Pick deliberately: it's hard to change later without disrupting subscribers.

</div>

## Playlist mode

You curate one or more playlists. Subscribers receive the playlists as-is and add them to a screen. Updates you make flow downstream automatically.

**How it shows up for the subscriber:**

- The feed's playlist appears in the **Available Content → Playlists** panel when they're building their own playlists.
- They can add it directly to a screen, or embed it inside a wrapper playlist.
- They can use the **Subset** editor to play only certain ranges of slides — e.g., slides 1–3 of your feed playlist, then their own announcement, then slides 4–10 of yours.
- They cannot reorder, edit, or delete individual messages inside your playlist.

**When to choose Playlist mode:**

- You want a "set it and forget it" experience for subscribers — they don't have to think.
- The content has a natural sequence (a sermon series, a curriculum, a campaign).
- You want every subscriber's screens to look very similar.

## Library mode

You publish a library of individual messages. Subscribers pick which ones to use and arrange them in their own playlists.

**How it shows up for the subscriber:**

- The feed's messages appear in the **Available Content → Categories** panel, grouped by your category names.
- They cherry-pick which messages to add to their playlists.
- They can mix feed messages with their own custom content freely.
- They cannot edit the messages — only choose to use them.

**When to choose Library mode:**

- You publish lots of content and subscribers should pick what fits.
- The content is modular — individual posters, individual seasonal slides, individual trivia questions — not a sequence.
- Subscribers want fine-grained control over what shows.

## Both

The feed offers both modes at once. Behind the scenes there are two playlists — your curated playlist (`playlistId`) and your message library (`libraryPlaylistId`). Subscribers can use either or both.

This is how most large feeds work — Lessons.church, ChiroThinTV, Orange. They publish a structured weekly playlist for "set it and forget it" users **and** a library of extras for users who want to customize.

## Switching modes after launch

Be cautious. The two modes use different database links to subscribers' screens:

- Switching from **Playlist** to **Library** doesn't auto-import your messages into the library playlist — you have to populate it.
- Switching from **Library** to **Playlist** breaks every subscriber that was cherry-picking messages — they lose those references.
- Going from either to **Both** is safe: you keep the original behavior and gain the second mode.

If you need to change a feed's distribution model significantly, the safest path is usually to leave the existing feed alone and publish a new feed alongside it — let subscribers migrate over time.

## How content reaches the screen

When a screen polls for its instructions, the API:

1. Resolves the screen's schedules.
2. For each scheduled playlist, expands it — including any embedded subscription playlists.
3. For each subscription, loads the feed's questions and the subscriber's answers.
4. Substitutes the answers into the feed's templates.
5. Marks each message with `isFeed: true` so the device tracks impressions for analytics.

Subscribers see your content as a normal piece of their playlist — but you (the publisher) get the impression data via [Stats](./).

## Common architectures

| Architecture | When it fits |
|--------------|--------------|
| Pure Playlist | Sermon series, daily devotionals, trivia rotations — sequential content with a "right" order. |
| Pure Library | Stock photo collections, generic promotional slides, modular trivia banks. |
| Both | Most commercial feeds — provide a default experience, let power users customize. |
| Playlist + library messages duplicated | Avoid — keep the canonical messages in only one place. |

## Related

- [Editing a public feed](./editing-a-feed)
- [Subscriber questions](./subscriber-questions) — per-subscriber customization
- [Pricing, trials, and billing](./pricing-and-trials)
