---
title: "Editing a Playlist"
---

# Editing a Playlist

<div className="article-intro">

The playlist editor is where you decide what plays on your screens, in what order, and under what conditions. It's a two-pane layout — the playlist on the left, available content on the right.

</div>

Open a playlist by clicking it in the sidebar list, or create a new one from the [Playlists](./) page.

## Adding messages

The right pane (**Available Content**) shows everything you can drop into the playlist:

- **Categories** — your folders of messages. Click a category to expand it.
- **Messages** — click any message to add it to the playlist.
- **Other playlists** — click a playlist to embed it inside this one.

Items appear in the playlist on the left in the order you added them. Drag to reorder, click the trash icon to remove.

## Editing an embedded playlist

When a playlist contains another playlist, click the gear icon on that entry to open the **Subset** editor. This lets you play only certain messages from the embedded playlist — for example, slides 1–2 of an external feed, then your own content, then slides 5–8 of the same feed. See [Connect Lessons.church](../integrations/lessons-church) for the canonical use case.

## Conditions

Every playlist entry can have **Conditions** — rules that decide whether to play it on a given pass. Click the conditions icon on a row to open the editor. You can constrain by:

- Date range (also see [Expiring Playlists](./expiring-playlists))
- Time of day
- Weighted weights (run X% of the time)

Conditions are evaluated on every loop, so you can build sophisticated rotations without separate playlists.

## Playlist modes

The mode is set when the playlist is first created and shows in the URL:

- **Custom playlist** — your own messages and ordering. The default.
- **Slideshow** — uploaded as a batch of images, advanced manually with the Fire Stick remote. See [PowerPoint and Keynote Slideshows](../integrations/slideshows).
- **External Feed** — pulls content from an external URL (see [Connect Lessons.church](../integrations/lessons-church)).
- **Subscription playlist** — generated from a feed you subscribed to. See [Subscribing to Feeds](../feeds/).

## Saving

Click **Save** to commit. The new playlist is immediately available to attach to a screen via [Step 3: Screens](../screens/).

## Related

- [Playlists overview](./)
- [Three-zone displays](./three-zone-messages)
- [Expiring playlists](./expiring-playlists)
