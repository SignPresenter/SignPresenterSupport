---
title: "Cache & Sync Behavior"
---

# Cache & Sync Behavior

<div className="article-intro">

When you save a message in your dashboard, it doesn't appear on the TV instantly — the device has to download the new content first. This article explains how that works, how long it takes, what happens when the network drops, and how the app recovers from crashes.

</div>

## The cache model

Every TV running SignPresenter keeps a local **cache** of:

- The current schedule (which playlists run when)
- Every message and its assets — images, videos, fonts, designer JSON
- The HTML for every template the playlists use

This is what lets a screen keep playing during a brief network outage. The cache stores up to **50 templates** (least-recently-used eviction) and as much message media as the device's storage allows.

## How long until updates appear?

A new or edited message typically appears on the TV within **1–2 minutes** of saving — sometimes faster, depending on:

- **Network speed.** Big videos take longer to download; an image is nearly instant.
- **Cache state.** If a template the message uses isn't in cache yet, the device has to fetch it first.
- **What's currently playing.** The device finishes the current message before swapping in new content.

If something doesn't show up after a few minutes, it usually means the upload or processing is still in progress. See [Uploading Videos](../messages/uploading-videos) for video processing times specifically.

## Cache size on the device

You can check how much content is cached on a device from the dashboard:

1. Go to **Step 3: Screens** and select the screen.
2. Look at the **Devices** panel.
3. Each device row shows the **Cache Size** — the number of items downloaded vs. expected.

A healthy device shows something like "255 of 255". If the numbers don't match, the device is still downloading or has run out of storage.

## Offline behavior

If the network drops, the device keeps playing whatever's already cached. New content stops appearing until the network comes back. Two things to know:

- **Time-of-day / weekly schedules still work** because the device keeps a local clock.
- **Date-range schedules can drift** if the device is unplugged for a long time and comes back with the wrong clock — Fire Sticks lose accurate time when they're powered off.

For deliberately-offline setups (no WiFi at the venue), see [Running Offline](./running-offline).

## Impressions

Every time a message plays, the device records an **impression**. Impressions are queued locally and uploaded to the server when the network is available. They power feed analytics for content publishers.

If a TV is offline for a while, impressions queue up and flush together when the network returns — you don't lose data.

## Watchdog & auto-recovery

The app runs a **watchdog timer** in the background. If the app freezes or crashes, the watchdog detects it and restarts the app automatically — usually within a minute or two. You don't need to touch the device.

The Fire TV Stick HD also auto-reboots after a power loss, which compounds nicely with the watchdog. Together they make 24/7 unattended operation reliable.

## When you actually do need to clear the cache

Almost never. But if a piece of content seems permanently stuck (downloaded incompletely, won't update), see [Clear Cache](../troubleshooting/clear-cache) for the manual reset.

:::warning
Don't clear the cache on a TV that's running offline — there's no network to re-download from, and you'll lose everything.
:::

## Related

- [Running offline](./running-offline)
- [Clear cache](../troubleshooting/clear-cache)
- [Stuck on "Loading Instructions…"](../troubleshooting/loading-instructions)
- [Compatible devices](./compatible-devices)
