---
title: "Date Ranges & Weighted Mixes"
---

# Date Ranges & Weighted Mixes

<div className="article-intro">

Date ranges bound a schedule to a specific calendar window — useful for seasonal campaigns, conferences, and one-off events. Weights decide what percentage of run time each playlist takes when multiple schedules overlap. Together they let you build sophisticated rotations.

</div>

## Date ranges

A **date range** turns a schedule on for a specific calendar window and off again afterward. The schedule still respects its day-of-week and time-of-day rules during the window.

To add a date range:

1. Go to **Step 3: Screens** and select your screen.
2. Open an existing schedule, or click **Add Schedule** to create one.
3. Set the **Start Date** and **End Date**.
4. Click **Save**.

Outside the date range, this schedule is dormant — it plays nothing.

### Common date-range patterns

| Use case | Window |
|----------|--------|
| Black Friday → Christmas promotions | Nov 24 → Dec 25 |
| Conference signage | The three days of the event |
| Easter season | Two weeks before through Easter Monday |
| Summer hours | Memorial Day → Labor Day |

:::tip
Use date ranges for content that should automatically retire on a known date. You set it up once and forget about it — the schedule disappears at the right moment with no manual cleanup.
:::

## Weights

When more than one schedule matches the current day and time, the TV plays them as a weighted mix. Weights are percentages — they should sum to **100%** across the matching schedules.

A simple example: during December weekdays from 9am–5pm, you want:

- **Holiday specials playlist** — 30% of the time
- **Regular menu playlist** — 70% of the time

Create two schedules, both Mon–Fri 9am–5pm, one with the holiday playlist (weight 30) and one with the regular menu (weight 70). The TV alternates between them in roughly 30/70 proportion across the day.

### Weights inside a single schedule

A single schedule can also contain multiple playlists with their own weights. Useful when you don't want to manage multiple schedules but you do want a weighted mix during the same window.

1. Open the schedule.
2. Click **Add Playlist** to add a second playlist.
3. Set the weight for each.
4. Save.

Weights inside one schedule must also sum to 100%.

## Date ranges + weights together

This is where the system shines. Examples:

**Soft launch a new menu:**

- Week 1: New menu 25%, old menu 75%
- Week 2: New menu 50%, old menu 50%
- Week 3: New menu 75%, old menu 25%
- Week 4 onward: New menu 100%

Build this as four schedules with progressive date ranges, each with the appropriate weights.

**Promote a one-off event without disrupting normal content:**

- Regular content 80%, event teaser 20% during the two weeks before the event
- Then the regular content takes over again automatically when the date range ends.

## Related

- [Schedules overview](./)
- [Recurring weekly schedules](./recurring-weekly)
- [Expiring playlists](../playlists/expiring-playlists) — a similar mechanism applied at the playlist level instead
- [Screen settings](../screens/screen-settings)
