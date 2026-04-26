---
title: "Commission Check Detail"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Commission Check Detail

<div className="article-intro">

The commission-check detail page shows the line-items inside a single payout — every invoice that contributed to the check's total. Use it to verify a payout, audit which referrals are included, and (as a SignPresenter admin) move commissions in and out of the check before it's finalized.

</div>

Open it by clicking a check in the [Affiliate page](./affiliate)'s **Commission Checks** panel.

## Layout

The page has two columns:

- **Left** — Check metadata and the list of **Included Commissions** (everything currently bundled into this check).
- **Right (admin only)** — The **Addable Commissions** panel — accrued commissions not yet assigned to any check, which you can move into this one.

## Included Commissions

This is the full list of invoices that make up the check's total. Each row shows the referred account, the invoice amount, the commission percentage, and the commission earned. The total at the bottom is what the check pays out.

If you're an admin, each row has a **Remove** action — clicking it moves the commission back to the unassigned pool, and it disappears from the check (the totals recalculate automatically).

## Addable Commissions (admin only)

The right column is visible only to SignPresenter admins. It lists every accrued commission that hasn't been assigned to a check yet — money the affiliate has earned but isn't being paid yet.

Each row has an **Add** action. Click it to pull that commission into this check. The check's total recalculates immediately.

This workflow lets admins fine-tune which commissions are paid in which cycle — useful when an invoice is contested, when a refund is in flight, or when batching commissions for a particular campaign.

## How it ties together

Behind the scenes:

- A commission is created when a referred account is invoiced.
- Commissions sit in an "unassigned" pool until an admin batches them into a check.
- Once the check is finalized and paid, the commissions become read-only history.

Affiliates see the result on their [Affiliate page](./affiliate) — the check appears under **Commission Checks** with its line-items frozen.

## Related

- [Affiliate & Commissions](./affiliate)
- [Admin dashboard](./admin-dashboard)
