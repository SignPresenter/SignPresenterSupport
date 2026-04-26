---
title: Can't Preview Videos in the Browser
description: Fix Chrome autoplay errors when previewing SignPresenter videos in the editor.
---

# Can't Preview Videos in the Browser

<div className="article-intro">

If videos won't preview in SignPresenter's editor, it's almost always a Chrome autoplay restriction — not a problem with your video. The fix takes one click.

</div>

## The error

You'll see something like:

> NotAllowedError: play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD

This is Chrome blocking autoplay on a freshly loaded page. The video itself is fine — it'll play correctly on your Fire Stick.

## The fix

Click anywhere inside the preview popup while it's loading. Once you've interacted with the page, Chrome allows the video to play.

As you keep using SignPresenter, Chrome learns it's a trusted site and stops blocking autoplay altogether.

:::tip
We recommend Chrome for editing in general — it handles SignPresenter's video and design tools most reliably.
:::

## Still not working?

If clicking the popup doesn't help:

1. Try a different browser (Firefox or Edge).
2. Clear your browser cache — see [Clear cache](./clear-cache).
3. Try previewing on the Fire Stick directly via **Run Schedule** — that's where it really matters.

If the video still won't play on the Fire Stick, see [Uploading Videos → What if the video fails to process?](../messages/uploading-videos#what-if-the-video-fails-to-process-or-shows-up-black).
