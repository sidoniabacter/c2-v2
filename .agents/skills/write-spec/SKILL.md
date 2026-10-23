---
name: write-spec
description: This skill guides the creation of a feature specification at a user-provided path in docs/specs, following docs/specs/TEMPLATE.md and resolving unclear requirements with the user. Use when a user asks to write or draft a feature specification. Without it, specifications can drift from the project template, leave important behavior ambiguous, or lead to implementation before requirements are agreed.
---

Write no code in this task.

- [ ] Identify the feature and the requested destination under `docs/specs/`.
- [ ] Read `docs/specs/TEMPLATE.md` and use its four sections: Goal, Out of scope, Behavior, and Done when.
- [ ] Ask the user about unclear requirements before drafting; do not invent behavior or silently resolve significant ambiguity.
- [ ] Write the specification at the requested path, with browser-checkable behavior statements and a clear out-of-scope section.
- [ ] Keep the task limited to the specification file; do not implement the feature or change other files.
