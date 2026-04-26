---
title: "Affiliate Setup"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Affiliate Setup

<div className="article-intro">

The affiliate program lets accounts earn revenue by referring new SignPresenter customers, by publishing public feeds, or both. This article covers how to enroll, how to share your affiliate links, and how the commission structure works in practice.

</div>

:::info
The affiliate program is opt-in. Most accounts aren't enrolled by default — talk to SignPresenter staff to apply.
:::

## How to enroll

There's no self-serve enrollment. To start earning affiliate commissions:

1. Email [support@signpresenter.com](mailto:support@signpresenter.com) explaining your use case (you publish a feed, you have a referral audience, you're a partner organization).
2. SignPresenter reviews and (if appropriate) creates an **AffiliateSetting** record on your account with:
   - A unique **affiliate code** (e.g., `MYBUSINESS2026`)
   - A **referral commission rate** (the % you earn on subscriptions referred via your code)
   - An **owned-feed commission rate** (the % you earn on subscriptions to feeds you publish — see [Public feeds](./feeds/))
3. Once enrolled, you'll see an **Affiliate** item in your sidebar at **Settings → Affiliate**.

## Your affiliate links

The [Affiliate page](./affiliate) shows two links:

- `https://signpresenter.com/?code=YOURCODE` — general SignPresenter
- `https://church.signpresenter.com/?code=YOURCODE` — church-specific landing page

Anyone who signs up via either link is tagged with your code. Their subscription revenue contributes to your commission going forward, indefinitely.

## How commissions are calculated

Two distinct commission types — they can both apply at once:

### Referral commissions

When a customer signs up via your code, you earn the **referral commission rate** on their subscription billing — typically a percentage of the SignPresenter screen subscription fees they pay each month.

Example: customer subscribes via your code, has 10 screens at $10/month = $100/month. At a 20% referral rate, you earn $20/month from them.

This continues for as long as they remain a customer.

### Owned-feed commissions

When you publish a [public feed](./feeds/) and someone subscribes to it, you earn the **owned-feed commission rate** on the feed's subscription fees.

Example: your feed charges $20/month + $5/screen. A 5-screen subscriber pays $20 + $25 = $45/month. At a 70% owned-feed rate, you earn $31.50/month.

The remaining 30% covers SignPresenter's platform fee.

### Stacking

If a customer signs up via your code AND subscribes to your feed, you earn both — the referral commission on their SignPresenter subscription plus the owned-feed commission on your feed's subscription. Real money for some publishers.

## Tracking referrals

The [Affiliate page](./affiliate) has three panels:

- **Current Affiliates** — your codes and rates
- **Commission Checks** — past payouts
- **Current Commissions** — money earned but not yet paid

The **Current Commissions** panel updates in near-real-time. Every time a referred customer is invoiced, your commission is calculated and added here. When SignPresenter cuts a payout (typically monthly), unaccrued commissions are bundled into a check and moved to the **Commission Checks** panel.

See [Commission check detail](./commission-check) for what's inside an individual check.

## Payout cadence

Standard cadence is monthly, but the exact schedule depends on your agreement with SignPresenter. Typically:

- Commissions accrue throughout the month.
- On a fixed day (e.g., the 15th), SignPresenter cuts checks for accruals > a minimum threshold (often $25).
- Payment goes out via the method on file (typically ACH or PayPal).

If you don't see a check when you expect one, the most common reasons are:

1. **Below threshold** — you've accrued less than the minimum. The accrual carries forward to the next cycle.
2. **Pending account approval** — for new affiliates, the first check sometimes waits for tax-form completion.
3. **Payout method missing** — SignPresenter staff need a payment destination.

Email [support@signpresenter.com](mailto:support@signpresenter.com) with affiliate questions.

## Tax considerations

Affiliate commissions are reportable income. SignPresenter issues **1099-NEC** forms each January for US-based affiliates earning over $600 in the previous year. Make sure your address and tax ID on file are accurate before year-end.

For non-US affiliates, payments are processed without US tax withholding but you're responsible for reporting in your jurisdiction.

## Sharing your code

The affiliate links contain your code. Anywhere you'd put a link to SignPresenter — your blog, your email signature, social media, in-app help docs you publish — drop in the affiliate version instead.

Some customers also use the code in spoken pitches: "Sign up at signpresenter.com and use code YOURCODE." If a new customer enters the code during signup, it's attributed even without the link.

## Related

- [Affiliate overview](./affiliate)
- [Commission check detail](./commission-check)
- [Public feeds](./feeds/) — earn owned-feed commissions
- [Managing accounts](./managing-accounts) — for SignPresenter staff granting affiliate codes
