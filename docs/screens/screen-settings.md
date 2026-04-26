---
title: "Screen Settings"
---

# Screen Settings

<div className="article-intro">

The screen settings page is where you name a screen, set its rotation and timezone, attach playlists, schedule them, and pair the actual TV. It's a two-column layout — settings and devices on the left, schedules and pairing on the right.

</div>

Open a screen by clicking its name in the sidebar list, or create a new one with **+ New** on the [Screens](./) page.

## Basic settings

The left column has the core screen settings:

- **Name** — How the screen appears in your account. Use something descriptive ("Lobby TV", "Drive-thru menu").
- **Screen Mode** — **Digital Signage** (auto-rotates), **Slideshow** (manually advanced with the remote), or **Both**. See [Screen Modes](./screen-modes).
- **Rotation** — `0`, `90`, `180`, or `270` degrees. See [Vertical Setup](./vertical-setup).
- **Timezone** — Used to schedule when playlists run. Defaults to your account timezone.
- **Playlist** — The default playlist for the screen.

Click **Save** to commit changes. Your TV picks up the new settings on the next cache refresh (usually within a minute or two).

## Pairing a TV

Click **Pair TV** at the top of the screen settings to enter the 4-digit code shown on the device. Once paired, the device is bound to this screen — it'll show whatever this screen is configured to play.

For the full pairing walkthrough, see [Initial Setup → Step 3](../getting-started/initial-setup#step-3-connect-your-screen).

## Devices

The **Devices** panel below the settings lists every physical Fire Stick or Android device paired to this screen. You can:

- See which devices are online
- Unpair a device (frees up the device to be re-paired to a different screen)
- Trigger a cache refresh remotely

## Schedules

When the screen is in **Digital Signage** or **Both** mode, the right column shows the **Schedules** panel. Schedules are time-based rules for which playlist runs when.

- **24/7** — A single playlist runs around the clock.
- **Custom schedule** — Add multiple schedules with day-of-week, time-of-day, and start/end-date constraints. Each schedule can run a different playlist or weighted mix of playlists.

Click **Add Schedule** to create one. Set the days, times, and playlist, then **Save**.

:::tip
Use **weights** when a schedule has more than one playlist — a 70/30 weighting means the first plays 70% of the time, the second 30%. Weights must sum to 100%.
:::

## Related

- [Screens & Devices overview](./)
- [Vertical setup](./vertical-setup)
- [Screen modes](./screen-modes)
- [Departments](../account/departments) for sharing screens across multiple campuses
