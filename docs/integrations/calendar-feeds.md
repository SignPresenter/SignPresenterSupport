---
title: Calendar Feeds for Room Directories
description: Use Google calendars to power building directories, current-event displays, and digital signage outside specific rooms.
---

# Calendar Feeds for Room Directories

<div className="article-intro">

Use Google calendars to drive a building directory or "what's happening right now" display. Set the location of every event to the room name in SignPresenter, and the calendar feed automatically routes events to the right screen.

</div>

<div className="video-embed">
<iframe src="https://www.youtube.com/embed/fDyZ9nRuojU" title="Calendar feeds for digital signage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## SignPresenter calendar templates

Three calendar message templates work together:

- **Calendar — Daily Overview** — A day-at-a-glance schedule with times, events, and rooms. Perfect for lobbies and main directories.
- **Calendar — Current Event** — Shows what's happening *right now* in a specific room. Great for the screen mounted outside a meeting room.
- **Calendar — Upcoming** — A month-view of upcoming events.

## Setting up the templates

1. Go to **Step 1: Message** and pick the calendar template you want (Daily Overview, Current Event, or Upcoming).
2. Open the message and configure:
   - **ICS URL** — the public iCal URL from your Google calendar
   - **Appearance** — background image, text color, room name displayed
3. To customize the background image:
   - Click the background image icon in the **Appearance** box.
   - Click **Upload** in the **Crop** box's top-right.
   - Pick an image, crop, and click **Update**.
4. To change text color, paste an HTML color code in the **Text Color** box. (Search "HTML color picker" if you need help finding a code.)
5. Click **Save**.

## Connect a Google calendar

1. Open Google Calendar and create or open the calendar you want.
2. Add events. **Important:** set the **location** to the exact room name as it appears in SignPresenter — the calendar feed routes events to the right screen using that match.
3. Under **My Calendars**, hover the calendar name and click the three-dot menu → **Settings and sharing**.
4. Under **Access permissions for events**, check **Make available to public** and click **OK**.
5. Scroll down to **Public address in iCal format** and copy the URL.
6. Back in SignPresenter, paste it into the **ICS URL** field on each calendar message.
7. Save.

## Using one calendar across multiple displays

Paste the same iCal URL into each of your calendar messages — Daily Overview, Current Event, Upcoming. They'll all stay in sync with Google.

Any change you make in Google Calendar pushes through automatically.

## Related

- [Add a Google calendar to a single playlist](./google-calendar) — the simpler version
- [Show Website](./show-website) — embed Google Calendar's web view directly
- [Building a playlist](../playlists/)
