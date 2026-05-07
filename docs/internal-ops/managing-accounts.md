---
title: "Managing Accounts"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Managing Accounts

<div className="article-intro">

The **Accounts** tab on the admin dashboard is where SignPresenter staff search, inspect, and manage every customer account on the platform. Use it for support escalations, billing investigations, affiliate code assignments, and anything else that requires touching another account's records.

</div>

## Where to find it

**Settings → Admin** (admins only) → the **Accounts** tab is the default.

## What you see

A searchable, paginated table of every account on the platform. Default columns:

| Column | What it shows |
|--------|--------------|
| Account name | The organization's display name |
| Owner email | Primary contact for billing |
| Sign-up date | When the trial started |
| Active screens | Number of paired and billing screens |
| Subscription status | Active, trial, lapsed, cancelled |
| Monthly revenue | Their current MRR contribution |

Click any column header to sort. Click an account name to drill into the full account detail.

## Searching

Search by:

- **Account name** (partial match, case-insensitive)
- **Email address** (the owner email or any user email — both match)
- **Account ID** (numeric, exact match)

A combo search works too — typing "smith jane@example.com" returns accounts where either field matches.

## Account detail

Clicking an account opens the side panel with everything tied to it:

- **Department list** — every campus / location under the account
- **User list** — everyone with access, with their permissions
- **Screen list** — paired devices, mode, current schedule, last cache refresh time
- **Billing summary** — current month's invoice, last payment, payment method status (without showing full card numbers)
- **Active feed subscriptions** — what they're subscribed to, trial status per feed
- **Support ticket history** — every ticket they've opened

From here you can:

- **Reset a user's password** without a self-serve email — useful when a customer can't access the email account.
- **Adjust a billing item** — credit, refund, or skip a charge for the current cycle. Use sparingly; SignPresenter aggregates audit trails.
- **Cancel a subscription** on the customer's behalf.
- **Open the affiliate panel** — see the next section.

## Setting an account's affiliate code

The **Affiliate** action on the account row opens a side panel where you can:

- Grant the account an affiliate code (so they earn commissions on referrals)
- Update the commission percentage on referrals (`commission`) and on owned-feed subscriptions (`ownedFeedCommission`)
- Disable an existing affiliate code

These match the [Affiliate page](./affiliate) the customer sees on their side. Changes take effect immediately.

## Common workflows

### Customer reports they were charged after cancelling

1. Search by their email.
2. Open the account.
3. Check the **Subscription status** and the **Billing summary**.
4. If a charge ran after the cancellation date, refund it from the billing item.
5. Reply to the support ticket with the refund confirmation.

### Customer can't sign in

1. Search by email.
2. Open the user list, find their record.
3. Click **Reset Password** → SignPresenter generates a one-time link you can paste into the support reply.
4. (Or, if email-based reset is fine, point them at [Resetting your password](../getting-started/resetting-password).)

### Affiliate signup

1. Customer asks to join the affiliate program.
2. Verify they're a real publisher (not a single-screen user looking to game the system).
3. Open their account → **Affiliate** action.
4. Generate an affiliate code, set commission rates per agreement.
5. Reply with their affiliate links so they can start sharing.

## Tips

:::warning
Be careful when refunding or crediting — every adjustment shows up on the customer's invoice and our internal financial reports. Always note the reason in the support ticket so future staff have context.
:::

:::tip
Use the account-detail panel as a single source of truth during a support call. Trying to piece together state from multiple tabs slows you down and introduces mistakes.
:::

## Related

- [Admin dashboard overview](./admin-dashboard)
- [Managing users](./managing-users)
- [Support ticket queue](./support-tickets)
- [Affiliate](./affiliate)
