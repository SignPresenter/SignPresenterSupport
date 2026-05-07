---
title: "Template Cookbook"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Template Cookbook

<div className="article-intro">

Worked examples you can copy, adapt, or learn from. Each recipe is a complete, working template — paste it into the [template editor](./editing-a-template), set up the matching questions, and it will run.

</div>

## Recipe: Branded message with logo and tagline

A reusable promo template — pick an image, set a headline, stamp on the brand. Good first custom template for most accounts.

**Questions to define:**

| Key Name | Field Type | Choices |
|----------|-----------|---------|
| `image` | image | `1920,1080` |
| `headline` | text | — |
| `subhead` | text | — |
| `accent` | color | — |

**HTML:**

```html
<div id="bg" style="background-image: url('{image}');"></div>
<div id="text">
  <h1>{headline}</h1>
  <h2>{subhead}</h2>
</div>
<img id="logo" src="https://yourdomain.com/logo.png" />

<style>
  body { margin: 0; background: #000; height: 100vh; overflow: hidden; }
  #bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    filter: brightness(0.55);
  }
  #text {
    position: absolute; top: 50%; left: 80px;
    transform: translateY(-50%);
    color: white; font-family: Roboto, sans-serif;
    opacity: 0;
  }
  #text h1 { font-size: 84px; margin: 0 0 16px; color: {accent}; letter-spacing: -1px; }
  #text h2 { font-size: 32px; margin: 0; font-weight: 300; opacity: 0.85; }
  #logo { position: absolute; bottom: 40px; right: 60px; max-height: 80px; }
</style>

<script>
  function startAd() {
    document.getElementById('text').animate(
      [{opacity: 0, transform: 'translate(-20px, -50%)'},
       {opacity: 1, transform: 'translate(0, -50%)'}],
      {duration: 900, fill: 'forwards', easing: 'ease-out'}
    );
  }
</script>
```

## Recipe: Looping background video with text

When you want a moving background but the message creator picks the video.

**Questions:**

| Key Name | Field Type |
|----------|-----------|
| `video` | video |
| `title` | text |

**HTML:**

```html
<video id="bg" muted playsinline></video>
<h1>{title}</h1>

<style>
  body { margin: 0; background: #000; height: 100vh; overflow: hidden; }
  #bg {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
  h1 {
    position: absolute; bottom: 80px; left: 80px;
    color: white; font-family: Roboto;
    font-size: 96px; margin: 0;
    text-shadow: 0 2px 24px rgba(0,0,0,0.6);
  }
</style>

<script>
  function startAd() {
    const v = document.getElementById('bg');
    v.src = '{video}';
    v.loop = true;
    v.play();
  }
</script>
```

## Recipe: Live counter pulled from your API

Fetch a number from your own API and display it big.

**Questions:**

| Key Name | Field Type |
|----------|-----------|
| `apiUrl` | text |
| `label` | text |

**HTML:**

```html
<div id="counter">
  <div id="num">—</div>
  <div id="label">{label}</div>
</div>

<style>
  body { margin: 0; background: #0F1620; color: white; height: 100vh;
         display: flex; align-items: center; justify-content: center;
         font-family: Roboto; }
  #num { font-size: 220px; font-weight: 800; letter-spacing: -4px; }
  #label { font-size: 36px; opacity: 0.7; text-align: center; }
</style>

<script>
  async function startAd() {
    try {
      const res = await fetch('{apiUrl}');
      const data = await res.json();
      document.getElementById('num').textContent = data.count.toLocaleString();
    } catch (e) {
      document.getElementById('num').textContent = '—';
    }
  }
</script>
```

:::warning
The destination API must allow CORS from any origin. If it doesn't, route the data through a feed with `externalSourceUrl` instead — see [External data sources](../feeds/external-data-sources).
:::

## Recipe: Multi-shape support

A single template that adapts to 16:9, 9:16, and 4:1. Set **Shapes** to `16:9,9:16,4:1` in the editor, then use CSS media queries (or aspect-ratio queries) to handle each layout.

```html
<div id="card">
  <h1>{headline}</h1>
  <p>{subtext}</p>
</div>

<style>
  body { margin: 0; background: #1976D2; color: white; height: 100vh;
         display: flex; align-items: center; justify-content: center;
         font-family: Roboto; padding: 40px; box-sizing: border-box; }
  #card { text-align: center; }

  /* Horizontal (16:9): big headline left-aligned */
  @media (min-aspect-ratio: 16/9) {
    body { justify-content: flex-start; }
    #card { text-align: left; max-width: 60%; }
    h1 { font-size: 96px; }
    p { font-size: 32px; }
  }

  /* Vertical (9:16): tall stack */
  @media (max-aspect-ratio: 1/1) {
    h1 { font-size: 72px; }
    p { font-size: 28px; }
  }

  /* Marquee (4:1): one-line ticker */
  @media (min-aspect-ratio: 3/1) {
    body { justify-content: flex-start; padding: 0 40px; }
    h1 { font-size: 56px; display: inline; margin-right: 24px; }
    p { font-size: 32px; display: inline; }
  }
</style>
```

## Recipe: Animated countdown to an event

Useful for "X days until launch" displays.

**Questions:**

| Key Name | Field Type |
|----------|-----------|
| `eventDate` | text |
| `eventName` | text |

**HTML:**

```html
<div id="container">
  <div id="num">—</div>
  <div id="unit">days until</div>
  <div id="event">{eventName}</div>
</div>

<style>
  body { margin: 0; background: #0F1620; color: white; height: 100vh;
         display: flex; align-items: center; justify-content: center;
         font-family: Roboto; flex-direction: column; }
  #num { font-size: 320px; font-weight: 900; line-height: 1; }
  #unit { font-size: 36px; opacity: 0.7; margin-bottom: 12px; }
  #event { font-size: 48px; }
</style>

<script>
  function startAd() {
    const target = new Date('{eventDate}');
    const today = new Date();
    const days = Math.max(0, Math.ceil((target - today) / 86400000));
    document.getElementById('num').textContent = days;
    document.getElementById('unit').textContent = days === 1 ? 'day until' : 'days until';
  }
</script>
```

## Recipe: A simple overlay (logo + clock combo)

For [overlay templates](./overlay-templates), set **Type** to `Overlay` and **Positions** to `corner`.

```html
<div id="ov">
  <img src="{logo}" />
  <div id="clock">—</div>
</div>

<style>
  body { margin: 0; background: transparent; color: white; font-family: Roboto; }
  #ov { padding: 16px; backdrop-filter: blur(20px); background: rgba(0,0,0,0.4); border-radius: 12px; }
  #ov img { display: block; max-width: 120px; margin-bottom: 8px; }
  #clock { font-size: 24px; font-variant-numeric: tabular-nums; text-align: center; }
</style>

<script>
  function startAd() {
    function tick() {
      const now = new Date();
      document.getElementById('clock').textContent =
        now.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});
    }
    tick();
    setInterval(tick, 30000);
  }
</script>
```

## Tips for production templates

:::tip
Test on a real Fire Stick, not just the browser preview. The TV's WebView is older and slower — a layout that's smooth on Chrome may stutter on a 5-year-old Fire Stick HD.
:::

:::tip
Use `transform` and `opacity` for animations, not `top`/`left`/`width`. The Fire Stick's GPU handles those much better.
:::

:::warning
Keep template HTML under ~100KB. Every TV that uses your template caches the HTML, and the cache caps at 50 templates. Bloated templates push useful templates out of the cache.
:::

## Related

- [Template anatomy](./anatomy)
- [Variables and questions](./variables-and-questions)
- [Lifecycle hooks](./lifecycle-hooks)
- [Overlay templates](./overlay-templates)
