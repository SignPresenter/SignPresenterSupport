---
title: Show Website
description: Use the Show Website message to embed any public web page on your SignPresenter screens.
---

# Show Website

<div className="article-intro">

The **Show Website** message embeds any public web page on your screen. It works with most sites — but a few major sites (news sites, social platforms) block embedding for security. Here's how to tell, and what to do about it.

</div>

## What works

Most public sites embed cleanly — your own site, a public Google calendar, a school's lunch menu, a building's TV-friendly dashboard. Sites that don't actively block embedding will show up.

[https://abcnews.go.com/](https://abcnews.go.com/) is an example of a site that doesn't block embedding.

## What doesn't work

Some larger sites block embedding for security. They send headers like `x-frame-options: DENY` or `content-security-policy: frame-ancestors 'none'`, and SignPresenter (along with every other display tool) can't override these.

If a site looks blank or shows an error in your Show Website message, that's usually why.

![Blocked website example](https://user-images.githubusercontent.com/65249159/146094518-a634d298-8bd5-483d-916a-b53f8f6f17ca.png)

## Workarounds

If the site you want is blocked:

- **Use the site's public RSS feed** if it has one — see the **News Feed (RSS)** message template.
- **Take screenshots** and rotate them as a Slideshow playlist.
- **Use Show Website on a different page** — many sites have a separate "TV display" or "lobby" page that intentionally allows embedding.
- **Contact the site owner** and ask them to allow your domain in their X-Frame-Options or Content-Security-Policy.

## Related

- [Slideshows (PowerPoint / Keynote)](./slideshows) — alternative for static content
- [Google Calendar](./google-calendar) — special-cased calendar embedding
- [Other message templates](../messages/)
