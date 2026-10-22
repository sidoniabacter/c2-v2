# Decisions

Why things are the way they are. Read this before reopening a decision.
Newest first. One entry per decision; do not rewrite old entries, add a new
one that replaces them.

## Entry format

```
## YYYY-MM-DD: short title
Decision: what was decided, in one sentence.
Why: the reason, and what it costs.
Rejected: the alternatives considered and why they lost.
```

## Entries

## 2026-10-22: Static form-only login page
Decision: build the login page with HTML, CSS, and JavaScript only, without a
framework, server, or build step; the form does not authenticate users.
Why: this is the application scope provided by the owner. It keeps the page
static and avoids implying that a browser-only form provides real
authentication.
Rejected: server-backed authentication and simulated client-side sign-in are
outside the requested scope.

## 2026-10-22: Real email-and-password login
Decision: the login feature authenticates real email-and-password credentials
and sends successful users to `/`; password recovery is excluded.
Why: this is the scope confirmed by the owner for the login specification.
Rejected: keeping the login as a static, unauthenticated form.

## 2026-10-22: Keep login presentation-only
Decision: implement the login form as a static interface with browser input
validation; do not authenticate, send, or store credentials, or redirect.
Why: the owner confirmed that this page must use only HTML, CSS, and
JavaScript without an authentication service.
Rejected: simulating successful or failed account credentials in the browser.
