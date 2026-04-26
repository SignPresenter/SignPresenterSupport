---
title: "Recurring Weekly Schedules"
---

# Recurring Weekly Schedules

<div className="article-intro">

A **recurring weekly schedule** runs a playlist on specific days of the week, during specific times of day. It's the most common kind of schedule — "weekday mornings", "Saturday evenings", "Sunday service", etc.

</div>

## Creating one

1. Go to **Step 3: Screens** and select your screen.
2. In the **Schedules** panel on the right, click **Add Schedule**.
3. Give the schedule a **Name** (something descriptive — "Weekday Mornings", "Sunday Service").
4. Pick the days of the week the schedule should run.
5. Set the **Start Time** and **End Time** for those days.
6. Pick the **Playlist** to run during this window.
7. Click **Save**.

The schedule starts evaluating immediately — the next time the current day and time fall inside the window, this schedule's playlist takes over.

## How overlapping schedules behave

If two schedules overlap (both match the current day and time), the TV plays them as a **weighted mix**. By default each playlist gets equal weight, but you can adjust — see [Date Ranges & Weights](./date-range-and-weights).

This is how you get "Christmas songs play 30% of the time during December weekdays" — one schedule for the regular content, one schedule overlapping it for the holiday content, with weights that sum to 100%.

## Multiple time windows

A single schedule has one time window per day. If you need the same playlist to run during multiple non-contiguous windows on the same day (e.g., 6am–10am AND 5pm–9pm), create **two separate schedules** that both reference the same playlist.

## Tips

:::tip
Name schedules descriptively. As you stack more of them, names like "Schedule 1" and "Schedule 2" become impossible to navigate. "Weekday lunch", "Sunday morning", "Weekend evening" are easier to maintain.
:::

:::note
Times are evaluated in the **screen's timezone** (set on the screen's settings page). If you have screens in multiple timezones, you can run different schedules per screen with the same playlist — or set different timezones per screen and use one shared schedule on each.
:::

## Common patterns

| Use case | Schedule(s) |
|----------|-------------|
| Restaurant menus | Breakfast (Mon–Fri 6am–10am), Lunch (Mon–Fri 10am–4pm), Dinner (Mon–Fri 4pm–close), Weekend (Sat–Sun all day) |
| Church Sunday service | Pre-service (Sun 8:30am–9:30am), During service (Sun 9:30am–11am), Lobby idle (every other day) |
| Gym | Morning (Mon–Sat 5am–10am), Daytime (Mon–Sat 10am–4pm), Evening (Mon–Sat 4pm–10pm), Sunday (different content all day) |
| Office lobby | Weekday business hours (Mon–Fri 8am–6pm), After-hours (a quieter playlist for nights and weekends) |

## Related

- [Schedules overview](./)
- [Date ranges & weights](./date-range-and-weights)
- [Screen settings](../screens/screen-settings)
- [Building a playlist](../playlists/)
