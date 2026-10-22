# Testing

How to check that something works. Read this before saying that it does.

## The quick check

```
bin/check          macOS, Linux, Git Bash
bin\check.cmd      Windows (cmd or PowerShell)
```

Out of the box, bin/check verifies the agent configuration: AGENTS.md has no
placeholders left and stays short, every document in docs/ has its line in AGENTS.md
and every line points to a file that exists, CLAUDE.md and
.github/copilot-instructions.md point to AGENTS.md instead of copying it.

The login page has browser tests using the existing Playwright development
dependency. `npm test` runs them; `bin/check` runs them as part of the
repository check.

## Rules

- "Done" is said only after bin/check is green and the behaviour was tried by hand.
- A failing test is reported, not removed or rewritten to pass.

## Project tests

The Playwright tests in `tests/login.spec.js` cover every behavior in
`docs/specs/login.md`. Run them with:

```
npm test
```

The tests open `index.html` directly in Chromium and check the form, browser
input validation, presentation-only submission, and absence of password
recovery. The form does not authenticate users.
