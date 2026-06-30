---
title: "Overlays (Marquee, Logo, Clock)"
description: "Add a scrolling marquee, corner logo, or live clock on top of everything a screen is playing."
---

# Overlays

<div className="article-intro">

An **overlay** is a small element that stays on screen on top of whatever is playing — most often a scrolling **marquee** message across the top or bottom, but also a corner **logo** or a live **clock**. Overlays are set up per schedule, right under the playlists for that schedule.

</div>

## Where to find it

Overlays live inside the schedule editor, not on a separate page:

1. Go to **Step 3: Screens** and select a screen.
2. In the **Schedules** panel on the right, click an existing schedule to edit it (or **Add Schedule** to create one).
3. Scroll down past **Playlists** to the **Overlays** section.

:::note
The Overlays section only appears while you're editing a schedule. If you don't see schedules at all, make sure the screen's **Mode** is set to Digital Signage or Both — see [Screen Modes](./screen-modes).
:::

## Setting up a marquee

The marquee is the most common overlay — a single line of text that scrolls across the screen.

1. In the **Overlays** section, set **Type** to **Marquee**.
2. Set **Position** to **Top** or **Bottom**.
3. In the **Message** box, type the text you want to display (e.g. "Thank you for shopping with us!").
4. Click **Update Overlay**.
5. Click **Save** to save the schedule.

The marquee scrolls continuously across that edge of the screen the entire time the schedule is running, on top of every message in the playlist.

## Overlay types

| Type | What it shows | Position options | What you fill in |
|------|---------------|------------------|------------------|
| **Marquee** | A line of scrolling text | Top or Bottom | The **Message** text |
| **Logo** | An image in a corner | A screen corner | A logo image |
| **Digital Clock** | The current time, auto-updating | A screen corner | Nothing — it formats itself |

Set **Type** to **None** (or leave it blank) if you don't want an overlay on that schedule.

## Tips

:::tip
Overlays are per schedule. If you want a marquee to show all day, put it on your 24/7 schedule. If you want it only during a specific window (say, a weekend promo), add it to just that schedule and leave your other schedules without one.
:::

:::tip
Keep marquee text short and punchy — it scrolls, so long paragraphs take a while to read through. For anything longer, a full message in the playlist is usually a better fit.
:::

After you save, your TV picks up the new overlay on its next cache refresh, usually within a minute or two. See [Cache & Sync](./cache-and-sync) if it doesn't update.

## Need something custom?

The built-in Marquee, Logo, and Clock cover most needs. If you need a custom-designed overlay (custom fonts, colors, animations, a live data ticker), that's built with an overlay template — an administrator-level feature. See [Overlay Templates](../internal-ops/templates/overlay-templates) (staff only).

## Related

- [Screen Settings](./screen-settings) — where schedules and overlays are configured
- [Schedules](../schedules/) — time-based rules for which playlist runs when
- [Screen Modes](./screen-modes) — overlays require Digital Signage or Both mode
