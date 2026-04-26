---
title: "Admin Dashboard"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Admin Dashboard

<div className="article-intro">

The Admin dashboard is the system-wide control center for SignPresenter staff. It shows revenue, account and user search, support tickets, and affiliate summaries. This is the page you'll use most often when running operations.

</div>

:::warning
This page is only available to users with the **admin** role on a SignPresenter staff account. Regular accounts don't see it.
:::

Open it from **Settings → Admin** in the sidebar.

## Layout

The dashboard is a two-column layout:

- **Left (wider)** — A tabbed view of **Accounts** and **Users** for finding and managing customer records.
- **Right** — Revenue summary, affiliate summary, and the support-ticket queue.

## Accounts tab

The Accounts tab is a searchable list of every SignPresenter account. Use it to:

- Look up an account by name, email, or ID
- See subscription status, screen count, and billing history at a glance
- Open the affiliate settings panel for any account (the **Affiliate** action opens a side panel where you can grant or update the account's affiliate code and commission rate)

## Users tab

The Users tab is a global user search — useful for support when a customer can't find their own account. Search by name or email to locate a user, see which accounts they belong to, and impersonate them if needed for troubleshooting.

## Estimated Monthly Revenue

The right column's top panel summarizes the current month's billing:

- **Revenue** — Total monthly recurring revenue across all active subscriptions.
- **Commissions** — Affiliate payouts being deducted.
- **Net Revenue** — Revenue minus commissions.

Numbers update live as new accounts sign up or unsubscribe.

## Affiliate Summary

Below revenue, a smaller panel summarizes affiliate program performance — total active affiliates, this month's commission accrual, pending checks, and recent commission events. Click any line to drill into the [Affiliate page](./affiliate).

## Admin Tickets

The bottom-right panel is the support queue — every open ticket from every account, sorted newest first. Click a ticket to open it, reply, and resolve. New tickets show a notification badge.

## Related

- [Affiliate & Commissions](./affiliate)
- [Custom templates (admin)](./templates/)
- [Public feeds (admin)](./feeds/)
