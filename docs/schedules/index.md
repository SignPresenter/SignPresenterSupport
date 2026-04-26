---
title: "Schedules"
---

# Schedules

<div className="article-intro">

A **schedule** decides when a playlist runs on a screen. You can keep things simple with a single 24/7 playlist, or stack schedules to play different content on weekday mornings vs. weekend evenings vs. holiday weeks. Schedules attach to a screen, not a playlist — so different screens can run different schedules even when they share content.

</div>

## How schedules work

Every screen has a list of schedules. The TV evaluates them on every loop and plays the playlist (or weighted mix of playlists) whose schedule matches the current day, time, and date.

Three concepts power the system:

- **Recurring rules** — day-of-week + time-of-day windows. "Every weekday from 6am to 6pm." See [Recurring Weekly Schedules](./recurring-weekly).
- **Date ranges** — start and end dates that bound when a schedule is active at all. "Active from Black Friday through Christmas." See [Date Ranges & Weights](./date-range-and-weights).
- **Weights** — when one schedule contains multiple playlists, weights decide what percentage of run time each gets. See [Date Ranges & Weights](./date-range-and-weights).

Combine the three and you can build sophisticated rotations without writing a line of code.

## Where to set up schedules

1. Go to **Step 3: Screens** and select a screen.
2. The **Schedules** panel appears on the right. (If you don't see it, switch the screen's **Mode** to Digital Signage or Both.)
3. Click **Add Schedule** to create a new one, or click an existing schedule to edit it.

## In this section

- **[Recurring Weekly Schedules](./recurring-weekly)** — Daily / weekly time windows
- **[Date Ranges & Weights](./date-range-and-weights)** — Start/end dates, plus weighted playlist mixes

## A simple example

A new account starts with a single 24/7 schedule running the default Custom Playlist. That's the simplest possible setup — one playlist, all the time.

A more typical setup for a restaurant might be:

- **Weekday breakfast** (Mon–Fri, 6am–10:30am) → breakfast menu playlist
- **Weekday lunch + dinner** (Mon–Fri, 10:30am–close) → main menu playlist
- **Weekend** (Sat–Sun, all day) → weekend brunch playlist
- **Holiday week** (Dec 20–26, date-range) → holiday specials playlist, weight 60%, regular menu 40%

That's four schedules on one screen.

## Related

- [Screen Settings](../screens/screen-settings) — where schedules attach
- [Building a playlist](../playlists/) — what schedules play
- [Expiring playlists](../playlists/expiring-playlists) — an alternative approach using start/end dates on the playlist itself
