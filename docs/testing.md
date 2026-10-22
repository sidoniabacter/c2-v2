# Testing

How to check that something works. Read this before saying that it does.

## The quick check

```
bin/check          macOS, Linux, Git Bash
bin\check.cmd      Windows (cmd or PowerShell)
```

Out of the box, bin/check verifies the agent configuration: AGENTS.md has no
TODO left and stays short, every document in docs/ has its line in AGENTS.md
and every line points to a file that exists, CLAUDE.md and
.github/copilot-instructions.md point to AGENTS.md instead of copying it.

When the project has code, add its own checks (lint, tests) at the marked
place at the end of bin/check, so one command still answers "is it green?".

## Rules

- "Done" is said only after bin/check is green and the behaviour was tried by hand.
- A failing test is reported, not removed or rewritten to pass.

## Project tests

TODO: how to run all tests, and how to run a single one.
