---
title: "Overlay Templates"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Overlay Templates

<div className="article-intro">

Overlay templates are persistent elements drawn on top of every message — a corner logo, a marquee strip across the bottom, a digital clock. Unlike message templates (which fill the screen for a fixed duration), overlays stay visible the whole time the screen is running.

</div>

## When to use an overlay

Reach for an overlay when something needs to stay on screen across many messages — most often:

- **Brand logo** in a corner
- **Marquee** scrolling promotions or alerts at the top or bottom
- **Live clock** showing the current time
- **Subscriber count / live counter** that updates over time

Anything else — full-screen content, slideshows, weather, timed promos — is a [message template](./).

## Built-in overlays

SignPresenter ships three overlays you can use without authoring your own:

| ID | Name | Variable | Position |
|----|------|----------|----------|
| 5 | Marquee | `{message}` (the scrolling text) | top or bottom |
| 6 | Logo | `{logo}` (image URL) | corner |
| 44 | Digital Clock | (no variables — auto-formats) | corner |

Add an overlay to a screen by editing the screen and choosing it from the **Overlay** dropdown. Most screens use one or zero overlays at a time; layering multiple is technically allowed but rarely useful.

## Authoring a custom overlay

In the [template editor](./editing-a-template), set **Template Type** to **Overlay** instead of Message. The form gains one extra field:

- **Positions** — `corner` (4 corners) or `top/bottom` (full-width strips)

Behind the scenes, overlays are rendered in a transparent fixed-position container layered over the message WebView. Your HTML/CSS controls everything inside that container.

### Position: corner

When **Positions** is `corner`, the overlay container is a small box anchored to one of four corners — top-left, top-right, bottom-left, bottom-right. The user picks which corner when assigning the overlay to a screen.

Style your CSS to fill the container without overflowing — typically a logo image with `max-width: 100%` and some padding.

```html
<img src="{logo}" id="logo" />
<style>
  body { margin: 0; padding: 12px; background: transparent; }
  #logo { max-width: 100%; max-height: 80px; }
</style>
```

### Position: top/bottom

When **Positions** is `top/bottom`, the overlay container is a full-width strip running across the top or bottom of the screen. Used for marquees, breaking-news bars, ticker tapes.

```html
<div id="marquee">
  <span id="text">{message}</span>
</div>
<style>
  body { margin: 0; background: rgba(0,0,0,0.7); color: white; overflow: hidden; }
  #marquee { white-space: nowrap; height: 60px; line-height: 60px; }
  #text {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 30s linear infinite;
    font-size: 28px;
  }
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
</style>
```

The marquee built-in template uses essentially this code.

## Variables in overlays

Overlays support the same `{keyName}` substitution and Questions system as message templates — see [Variables and questions](./variables-and-questions). The difference is scope: overlay answers are tied to the **screen**, not to individual messages. So one screen has one set of overlay answers, used the whole time the overlay is visible.

## Lifecycle hooks for overlays

Overlays support `startAd()` like message templates do, but it fires only once when the overlay first loads (not once per message that plays beneath it). Useful for kicking off:

- A clock-tick interval
- A periodic fetch (e.g., poll for breaking news every 60s)
- An animation that runs continuously

`togglePause()`, `fastForward()`, and `rewind()` don't fire for overlays — they're only sent to the message currently playing.

## Tips

:::tip
Keep overlay HTML lightweight — they render on top of every message, so any heavy CSS or JS is a tax on the device for the entire time the screen is on.
:::

:::warning
Don't use opaque backgrounds that cover most of the screen. The overlay is rendered transparent by default; if you make it solid, it'll obscure your message content. Constrain it to the smallest area you actually need.
:::

## Common overlay patterns

| Pattern | Position | Notes |
|---------|----------|-------|
| Brand logo | corner | Static image, just CSS sizing |
| Live clock | corner | `setInterval` updating innerText every second |
| Promo marquee | top/bottom | Pure CSS scroll animation |
| Alert banner | top/bottom | Conditionally render based on a `{showAlert}` boolean |
| Subscriber counter | corner | `fetch` to your API every minute, update DOM |

## Related

- [Template anatomy](./anatomy) — how rendering works under the hood
- [Variables and questions](./variables-and-questions)
- [Lifecycle hooks](./lifecycle-hooks)
- [Template cookbook](./template-cookbook)
