---
title: "Editing a Message"
---

# Editing a Message

<div className="article-intro">

The message editor is where you set up an individual message — duration, category, name, and the answers that fill in the template's variables. It's a two-pane view: the form on the left, a live preview on the right.

</div>

Open a message by clicking it in the sidebar list, or create a new one with **+ New** on the [Messages](./) page.

## The form pane

The left side of the editor has fields that depend on the template, but every message has these basics:

- **Name** — How the message appears in your library and playlists.
- **Category** — A folder name for organizing messages. Type a new category name to create one on the fly.
- **Duration (seconds)** — How long the message displays. Default comes from the template.

Below the basics are template-specific fields — image upload, video upload, weather zip code, calendar URL, etc. Each field corresponds to a `{variable}` in the template.

## The preview pane

The right side renders a live preview using the same engine your TVs use. Updates apply as you save, so save often to verify what you're building.

For image-based templates, clicking the image thumbnail launches the **image editor** with a built-in cropper. The aspect ratio is locked to whatever the template requires (16:9, 9:16, 4:1, etc.).

## Uploading videos

For video templates, the editor shows a **Video Status** banner while the upload and conversion run:

| Status | Meaning |
|--------|---------|
| **Submitted** | Upload received, waiting in the queue. Safe to leave the page. |
| **Progressing** | Conversion in progress (typically 3 minutes per minute of video). Safe to leave. |
| **Complete** | Ready to play. The banner disappears. |
| **Canceled / Error** | Something went wrong — usually a codec issue. See [Uploading Videos](./uploading-videos) for the HandBrake fix. |

:::tip
The page polls for status every 5 seconds while a video is processing. You can leave and come back later — the status sticks.
:::

## Saving and previewing

Click **Save** to commit your changes. The preview reloads with the new values, and your message becomes available in any playlist that uses the same screen shape.

:::note
Creating a message just adds it to your library. To put it on a screen, add it to a [playlist](../playlists/).
:::

## Related

- [Messages overview](./)
- [Categories](./categories)
- [Build a playlist](../playlists/)
