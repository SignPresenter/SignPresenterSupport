---
title: "Managing Users"
displayed_sidebar: adminSidebar
---

<span className="admin-badge">Administrators only</span>

# Managing Users

<div className="article-intro">

The **Users** tab on the admin dashboard is a global, cross-account user search. Use it when a customer can't find their own account, when you need to see which accounts a person belongs to, or when troubleshooting login issues.

</div>

## Where to find it

**Settings → Admin** → **Users** tab.

## What it does

Searches every user on the platform — across every customer account. This is different from the per-account user list you see when you drill into an [account](./managing-accounts), which is scoped to that account only.

## Searching

- **Email** (partial match) — the most reliable identifier
- **Name** (partial match) — works if you have it but be aware of name collisions
- **User ID** (numeric, exact match) — useful for log triage

The search returns one row per user, with a list of accounts they belong to. A user with access to three accounts shows up once with three account links.

## What you can do per user

Click into a user record to see:

| Field | Notes |
|-------|-------|
| Email | Primary identifier; user types this when signing in |
| Name | Display name |
| Accounts | Every account this user is a member of |
| Departments | Each (account, department) pair where the user has permissions |
| Last login | When they last successfully signed in |
| Active sessions | Devices currently signed in (mobile browser, dashboard, etc.) |

Available actions:

- **Reset password** — Generate a one-time reset link without sending an email.
- **Force sign out everywhere** — Invalidate every active session. Useful if you suspect a credential was leaked.
- **Update email** — Change the email on the account (e.g., user is migrating to a new address). Other users at the same account aren't affected.
- **Impersonate** (super-admin only) — Sign in as the user temporarily for support troubleshooting. Every action you take is logged with both your ID and the user's ID for auditability.

## Common workflows

### Customer says "I have an account but I can't find it"

1. **Users** tab → search their email.
2. If they show up, the **Accounts** column tells you which account they're a member of.
3. Reply with the account name and the URL they should use to sign in.
4. If they don't show up, they signed up under a different email — ask them to check.

### Customer wants to switch their login email

1. Search by current email.
2. Open the user record.
3. **Update Email** → enter the new email.
4. Confirm with the customer that the change took effect — they should now sign in with the new email.

Old sessions remain valid until they expire; the user can keep working without signing out.

### Suspected security incident

1. Search by email.
2. **Force sign out everywhere**.
3. **Reset password** → send the link directly to a verified channel (not email if email is the suspected vector).
4. Make a note in the ticket. If the account has admin/creator permissions on a customer account, escalate to a security review.

## Cross-reference with accounts

Every user record links to their accounts. From a user → click an account → drop into [Managing accounts](./managing-accounts) for the full account view.

When investigating something account-specific (billing, screens, feeds), prefer to start from the account side. When investigating something user-specific (login problems, email mismatches), start from the user side.

## Tips

:::tip
Names are unreliable — multiple users can have the same name, and some customers don't fill in a name at all. Always confirm by email when you're sure you've got the right person.
:::

:::warning
Impersonation is logged but visible to the user in their own activity log. Don't impersonate without their knowledge.
:::

## Related

- [Admin dashboard overview](./admin-dashboard)
- [Managing accounts](./managing-accounts)
- [Support ticket queue](./support-tickets)
