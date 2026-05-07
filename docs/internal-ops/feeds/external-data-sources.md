---
title: "External Data Sources"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# External Data Sources

<div className="article-intro">

Feeds can pull content from outside SignPresenter — RSS feeds, your own JSON API, or partner integrations. External data sources let your feed display content that's updated continuously without you having to log into SignPresenter and edit messages by hand.

</div>

## Three flavors

| Source | What it does | When to use |
|--------|--------------|-------------|
| **RSS** | Built-in template (#12) renders a news ticker from any RSS feed. | News, blogs, podcast feeds. |
| **External JSON playlist** | Playlist with `externalSourceUrl` — fetches `{messages: [{name, files: [...]}]}`. | Your own API serving image/video URLs. |
| **Provider integration** | Special-cased feeds that talk to specific partners (Orange, Spyence, ITeachChurch). | Partner-specific data. See [Provider integrations](./provider-integrations). |

## RSS feeds (template 12)

The built-in **News Feed** template wraps the RSS proxy:

1. SignPresenter's API exposes `GET /fetch/rss?url=<encoded_url>` — a 10-second proxy with normalization.
2. The proxy returns `{title, stories: [{title, image, description}]}`.
3. The News Feed template polls this endpoint and renders the stories as a rotating ticker.

To use RSS in your feed, just add a message that uses template 12 with the RSS URL as the `{rss}` answer. No special setup on your side.

If you're authoring a [custom template](../templates/) that needs RSS, fetch from the same proxy directly:

```js
async function startAd() {
  const url = '/fetch/rss?url=' + encodeURIComponent('{rss}');
  const data = await fetch(url).then(r => r.json());
  // data.stories is an array of {title, image, description}
  // ...render
}
```

This avoids CORS issues — the SignPresenter API serves the RSS proxy with permissive headers.

## External JSON playlists

This is the heavy-duty option. Build a playlist with **mode = `external`** and set its `externalSourceUrl` to your own API endpoint. SignPresenter fetches the URL whenever the playlist is requested and dynamically generates messages from the response.

### Expected response format

```json
{
  "messages": [
    {
      "name": "Today's Special",
      "files": [
        { "url": "https://your-cdn.com/specials/2026-04-26.jpg", "seconds": 10 }
      ]
    },
    {
      "name": "Promo Video",
      "files": [
        { "url": "https://your-cdn.com/promo.mp4", "loopVideo": false, "seconds": 30 }
      ]
    }
  ]
}
```

Each message becomes one entry in the playlist. SignPresenter automatically routes:

- `.jpg`, `.png`, `.gif` → image messages
- `.mp4`, `.mov`, `.webm` → video messages

Pass `loopVideo: true` for videos that should loop within their `seconds` window.

### Setup steps

1. Build the API endpoint at your end. It must respond with the JSON shape above.
2. In SignPresenter, create a new playlist and set its mode to **External Feed** (URL: `/playlists/0?mode=externalFeed`).
3. Paste your API URL into the **External Source URL** field.
4. Save.

Subscribers add this playlist to their screens. Every time the screen polls for instructions, SignPresenter re-fetches your URL and the playlist's content updates dynamically.

### Cache behavior

External playlists are fetched on each instructions request, but with an 8-second timeout. If your API is slow, subscribers see stale content until your API responds. Make sure your endpoint is fast (under 2 seconds is comfortable) and ideally edge-cached.

### Use cases

- **Daily menus** — your kitchen system publishes today's menu as JSON, your feed shows it on lobby screens.
- **Inventory-driven displays** — products in stock appear; sold-out products disappear automatically.
- **Calendar-driven content** — event posters auto-rotate based on a master schedule managed elsewhere.
- **Partner content licensing** — you license content from a vendor whose API you're authorized to consume.

## Provider integrations

A few feeds have special handling because they talk to a specific third-party system. See [Provider integrations](./provider-integrations).

These aren't generally available — they're built per-partner and require coordination with SignPresenter staff. If you're a third-party content vendor wanting to integrate, email [support@signpresenter.com](mailto:support@signpresenter.com).

## Tips

:::tip
For external JSON playlists, version your API response — if you ever change the shape, point new feeds at v2 while old feeds keep using v1. Avoids breaking subscribers mid-flight.
:::

:::warning
External fetches are server-to-server from SignPresenter's API. CORS doesn't apply here, but firewalls might — make sure SignPresenter's API can reach your endpoint from production.
:::

:::note
External playlists count toward the subscriber's normal SignPresenter billing (per-screen). The data your API serves is free to subscribers; SignPresenter only charges for the screen-time the messages occupy.
:::

## Related

- [Distribution modes](./concepts) — Playlist vs Library
- [Provider integrations](./provider-integrations)
- [Editing a public feed](./editing-a-feed)
- [Custom templates](../templates/) — for fully bespoke renderings of external data
