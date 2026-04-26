---
title: "Lifecycle Hooks"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Lifecycle Hooks

<div className="article-intro">

Lifecycle hooks are JavaScript functions you can define inside your template that SignPresenter calls at specific moments — when a message starts, when it's paused, when the user fast-forwards. Use them for animations, video playback, data fetching, or anything that needs to react to playback state.

</div>

## When hooks fire

The TV's WebView loads your wrapped HTML, runs all `<script>` tags, then enters the SignPresenter playback lifecycle:

```
Page loads
   │
   ▼
WebMessage retries calling startAd() (up to 30 attempts, every 100ms)
   │
   ▼
startAd() — message is now playing
   │
   ├── (optional) togglePause() if user pauses on a Slideshow screen
   ├── (optional) fastForward() / rewind() if user skips
   ▼
Duration expires (adSeconds)
   │
   ▼
WebView is unmounted, next message takes over
```

## `startAd()` — the most important one

Define `startAd()` in your template if you have **any** animation, video, or kickoff logic. The platform calls it automatically once the page is ready.

```html
<script>
  function startAd() {
    // Trigger any animations
    $('#title').fadeIn(500);

    // Start a video
    document.getElementById('video').play();

    // Kick off a data fetch
    fetch('/some-api').then(...);
  }
</script>
```

### Why the retry loop

The platform retries `startAd()` up to 30 times (3 seconds total). This handles two cases:

1. **Slow `<script>` execution.** If your template loads heavy libraries, the function may not exist yet when the platform first tries.
2. **Async resource loading.** Define `startAd` only after your image/video has loaded if it depends on those.

If the platform retries 30 times without success, it gives up and just lets the message run for `adSeconds` with no startup logic. Better to have something work eventually than nothing at all.

## `togglePause()`

Called when a user on a **Slideshow** or **Both**-mode screen pauses with the remote. SignPresenter doesn't pause the WebView itself — your hook decides what "paused" means.

Typical implementation:

```js
let isPaused = false;
const video = document.getElementById('video');

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) video.pause();
  else video.play();
}
```

If you don't define `togglePause()`, the message keeps playing through pause requests — fine for most templates.

## `fastForward()` and `rewind()`

Called when the user skips with the left/right buttons on a Slideshow screen. Useful if your template has internal stages — say, a presentation with multiple slides inside one message.

```js
let stage = 0;
const stages = ['intro', 'middle', 'end'];

function fastForward() {
  stage = Math.min(stage + 1, stages.length - 1);
  showStage(stages[stage]);
}

function rewind() {
  stage = Math.max(stage - 1, 0);
  showStage(stages[stage]);
}
```

If you don't define them, fast-forward and rewind move to the previous/next message instead of staying within yours.

## Using `adSeconds`

The platform exposes the display duration as a JS global named `adSeconds` (without braces — it's set in the wrapper, not substituted from a question).

```js
function startAd() {
  // 80% of the time on the headline, 20% on the call to action
  setTimeout(showCallToAction, adSeconds * 1000 * 0.8);
}
```

This way your template adapts automatically when a message creator changes the duration.

## Common patterns

### Looping video to fill the duration

```html
<video id="bg" muted playsinline></video>
<script>
  function startAd() {
    const v = document.getElementById('bg');
    v.src = '{video}';
    v.loop = true;
    v.play();
  }
</script>
```

### Animated headline + subhead

```html
<h1 class="hidden">{title}</h1>
<h2 class="hidden">{subtitle}</h2>
<script>
  function startAd() {
    $('h1').delay(200).animate({opacity: 1}, 600);
    $('h2').delay(800).animate({opacity: 1}, 600);
  }
</script>
```

### Fetching live data

```html
<div id="result"></div>
<script>
  async function startAd() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    document.getElementById('result').textContent = data.message;
  }
</script>
```

:::warning
External fetch from inside a template is allowed but the destination needs CORS headers permitting the origin. If your data endpoint doesn't, route it through SignPresenter's RSS proxy at `/fetch/rss?url=...` (only works for RSS though) or set up a feed with `externalSourceUrl` instead.
:::

## Tips

:::tip
Always wrap heavy work in `startAd()` — never run it during the script's top-level. The page might be parsed before it's actually visible, and you'll waste cycles.
:::

:::note
The platform doesn't enforce that hooks are idempotent. They each get called at most once per playback. If you need cleanup, do it via the WebView unmount — just don't rely on a hook firing twice.
:::

## Related

- [Template anatomy](./anatomy)
- [Variables and questions](./variables-and-questions)
- [Template cookbook](./template-cookbook) — full worked examples
