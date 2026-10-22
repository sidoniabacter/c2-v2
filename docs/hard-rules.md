# Hard rules

What must never be done in this project, and why. The agent reads this before
it changes any file.

A rule goes in here after a real mistake, not to prevent an imagined one.
Each rule has a reason; a rule without a reason gets ignored or misapplied.

## Rules

1. Never edit docs/ai-log.md.
   Why: it is the human's own account of how AI was used. If the agent writes
   it, it stops being that.

2. Never change or skip a test to make it pass.
   Why: a green result must mean the behaviour works, not that the check was
   removed. If a test is wrong, say so and stop.

3. Never add a dependency without asking first.
   Why: every dependency is a decision the human answers for.

4. Never put secrets (passwords, API keys, tokens) in the repository or in a prompt.
   Why: what is committed or sent cannot be taken back.

TODO: add your own rules below, each with the incident that caused it.

## Rule format

```
N. Never <do what>.
   Why: <the reason>.
   Incident: YYYY-MM-DD, <what went wrong>.
```
