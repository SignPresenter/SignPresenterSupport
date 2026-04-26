---
title: "Pricing, Trials, and Billing"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Pricing, Trials, and Billing

<div className="article-intro">

Feed monetization is built into SignPresenter — you set the prices and trial period, and the platform handles billing, trial enforcement, and revenue distribution. This article explains how the pricing model works, what subscribers see, and how the money flows.

</div>

## The three knobs

When you create or edit a [feed](./editing-a-feed), three fields control pricing:

| Field | Charged how |
|-------|-------------|
| **Monthly Account Fee** | A flat monthly charge per subscribing account, regardless of screen count. |
| **Per-Screen Fee** | An additional monthly charge for each screen the subscription is active on. |
| **Trial Days** | The free trial period before billing begins. |

A subscriber sees both fees on the feed detail page before they subscribe — no surprises.

## How it adds up for the subscriber

A subscriber with two screens, on a feed priced at $20/month + $5/screen with a 30-day trial:

- **Days 1–30**: Free.
- **Day 31 onward**: $20 (monthly account fee) + $5 × 2 (per-screen fee) = **$30/month**.

If they add a third screen mid-month, the per-screen fee proration kicks in for that screen's portion of the month. SignPresenter handles the math.

## Trials

The trial is enforced per-subscription, not per-account. If a subscriber unsubscribes and resubscribes, they generally don't get a fresh trial — but SignPresenter staff can override this for special cases (talk to support).

When a billable item is created on subscribe, its `startDate` is delayed by your `trialDays` value. Billing literally doesn't begin until that date passes.

**What ends a trial early:** nothing on the subscriber's side. The trial runs to completion even if they unsubscribe and the subscription is removed — they just don't get billed at the end.

## Pricing strategy

Most feeds settle into one of these patterns:

| Strategy | Monthly fee | Per-screen fee | Trial | Use case |
|----------|-------------|----------------|-------|----------|
| Free | $0 | $0 | n/a | Friend-of-the-platform feeds, internal-org feeds |
| Flat low | $5–10 | $0 | 30 days | Hobby / community curated feeds |
| Flat with multi-screen tax | $10–20 | $2–5 | 30 days | Commercial feeds for SMBs |
| Tiered by screen | $20+ | $10+ | 14–30 days | Premium content, large clients |
| Per-screen only | $0 | $20 | 14 days | Pay-as-you-go pricing |

The most successful commercial feeds on SignPresenter (Lessons.church, ChiroThinTV) use **flat with multi-screen tax** — a base monthly fee that doesn't scare off small accounts, plus a per-screen surcharge that captures more revenue from large multi-location operations.

## What appears on the bill

For the subscriber:

- The feed's name and pricing line up on their **Settings → Billing** invoice each month.
- They can see when the trial ends in their feed details page before billing starts.
- Failed payments cause the subscription to lapse — the feed content stops appearing on screens until billing is fixed.

For you (the publisher):

- A monthly **payout** representing the subscription revenue minus SignPresenter's platform fee and any [affiliate commissions](../affiliate). Payout cadence and platform fee depend on your publishing agreement — talk to support for specifics.
- Itemized payouts visible in the [Affiliate page's](../affiliate) **Commission Checks** panel, plus the **Subscribers** panel on [Feed Admin](./).

## Changing prices on a live feed

You can edit pricing fields any time. **Existing subscribers stay on the price they signed up at** — increases and decreases don't apply retroactively. Only new subscribers get the new price.

If you want to migrate existing subscribers to a new price, the cleanest path is to email them, give them notice, and (if needed) ask SignPresenter staff to update their billable items individually.

## Failed payments

When a subscriber's card declines:

1. SignPresenter retries the charge automatically a few times.
2. The subscriber gets dunning emails.
3. After several failed attempts, the subscription lapses and the feed content stops on their screens.
4. They can fix billing and re-subscribe; their answers are usually preserved during a brief lapse window.

You don't need to do anything for failed payments. SignPresenter handles dunning and recovery.

## Refunds

SignPresenter staff handle refund requests on a case-by-case basis. As a publisher, you can recommend refunds to support; the platform fee portion is typically refunded along with the publisher portion when a full refund is granted.

## Related

- [Editing a public feed](./editing-a-feed)
- [Subscription stats and analytics](./)
- [Affiliate program](../affiliate) — how feed revenue interacts with referrals
