---
title: "Support Ticket Queue"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Support Ticket Queue

<div className="article-intro">

The support queue on the admin dashboard is where SignPresenter staff triage every open ticket from every customer account. It's the workflow center for support — sorted, filterable, with one-click access to the customer's full account context.

</div>

## Where to find it

**Settings → Admin** — the **Admin Tickets** panel sits in the right column of the admin dashboard, alongside revenue and affiliate summaries.

## The queue

Every open ticket from every account, sorted newest first by default. Each row shows:

- The ticket subject (or first comment if no subject)
- The submitting user's email
- The account name
- Time since last activity
- A status badge (New, Open, Awaiting customer, Resolved)

Click any row to open the ticket.

## Inside a ticket

The ticket detail view has:

- **Comment thread** — back-and-forth between the customer and SignPresenter staff, oldest first.
- **Attachments** — files the customer uploaded (screenshots, video clips, log files).
- **Account context** — a sidebar with the customer's account info, current screens, billing status. Click into [Managing accounts](./managing-accounts) for full detail.
- **Reply box** — where you compose a response.

## Replying

1. Read the comment thread to understand context.
2. Check the account sidebar for relevant state — are they on a trial? what's their screen count? are there active billing issues?
3. Compose a reply in the reply box.
4. Optionally attach a file (link to a help article, screenshot of what you're showing them).
5. Click **Post**.

The customer is notified by email with your reply. They can respond from inside SignPresenter or by replying to the email — both flow back into the same ticket.

## Status workflow

| Status | When |
|--------|------|
| **New** | Customer just opened it, no SignPresenter reply yet. |
| **Open** | Active back-and-forth in progress. |
| **Awaiting customer** | You replied; waiting on the customer to respond. |
| **Resolved** | Issue is fixed; customer or SignPresenter staff marks it complete. |

Resolve a ticket when the underlying issue is fixed and the customer has confirmed (or hasn't responded after a reasonable time). Resolved tickets disappear from the default queue but stay searchable in history.

## Triage guidelines

When the queue is busy, prioritize in roughly this order:

1. **Production-down issues** — screens not displaying, billing errors charging customers wrongly, login lockouts. Reply within minutes.
2. **Trial expiring soon** — customers who can't get setup before their trial ends. Reply within a day.
3. **Onboarding questions** — new users figuring things out. Often resolved by linking the right help article.
4. **Feature requests / general questions** — important but not time-sensitive.

## Common reply patterns

### Resolved by a help article

> Thanks for reaching out! This is covered in our [Pair TV walkthrough](../getting-started/initial-setup#step-3-connect-your-screen) — let us know if you hit any specific step that doesn't work for you.

### Resolved with account intervention

> I went into your account and re-enabled the lapsed subscription. Your screens should start showing content again within a minute or two. Sorry for the disruption!

### Need more info

> Could you send a screenshot of the error you're seeing? You can reply to this ticket and drop the image in.

### Escalation

> This looks like an issue with our video processing — I'm escalating to engineering and will follow up as soon as we have a fix. Expect an update within a business day.

## Tips

:::tip
Always link to a help article when you can. It saves you typing, gives the customer something to bookmark, and produces feedback you can use to improve the docs.
:::

:::warning
Don't share another customer's information in a reply. If a question requires comparing accounts (e.g., "is this the right behavior?"), describe the comparison generically rather than naming the other account.
:::

## Related

- [Admin dashboard overview](./admin-dashboard)
- [Managing accounts](./managing-accounts)
- [Managing users](./managing-users)
