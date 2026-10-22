# AI agent repository template

A starting point for a repository that AI coding agents (GitHub Copilot, Claude
Code and others) can work in well: a short `AGENTS.md`, a `docs/` folder that
holds the project's memory, specs for what gets built, and one command that
tells you whether the setup is in order.

It contains no application code, so it fits any stack. Used in the course
"Tehnologii și aplicații web" at Universitatea Emanuel din Oradea.

## Set up your project

1. Click **Use this template** → **Create a new repository**.
2. Clone your new repository and open it in your editor.
3. Fill in `AGENTS.md`: replace every `TODO`. Keep it short.
4. Create the two pointer files, so every tool reads the same rules:
   - `CLAUDE.md` with a single line:
     ```
     @AGENTS.md
     ```
   - `.github/copilot-instructions.md` with:
     ```
     Read AGENTS.md in the repository root — it is the entry point
     for AI agents working here.
     ```
5. Delete the documents in `docs/` that do not apply to your project, together
   with their line in `AGENTS.md`.
6. Run the check until it is green:
   ```
   bin/check          macOS, Linux, Git Bash
   bin\check.cmd      Windows (cmd or PowerShell)
   ```
7. Test it: open a new agent session and ask "how do I start the project?".
   The agent should find `docs/dev-environment.md` on its own.

A fresh copy of the template is red on purpose: steps 3 and 4 are still to do.

## What is inside

| File | What it holds | When the agent reads it |
| --- | --- | --- |
| `AGENTS.md` | what the project is, what is non-standard, the index of `docs/` | on every request |
| `docs/state.md` | work in progress, open questions, rejected proposals | first, in every session |
| `docs/hard-rules.md` | what must never be done, and why | before changing any file |
| `docs/dev-environment.md` | how to start the project | when asked to run it |
| `docs/testing.md` | how to check that something works | before saying it works |
| `docs/architecture.md` | how the main parts connect | before structural changes |
| `docs/conventions.md` | code style, branches, commit messages | before writing code |
| `docs/workflow.md` | how a change reaches the main branch | before a pull request |
| `docs/decisions.md` | why things were decided, with dates | before reopening a decision |
| `docs/specs/` | one spec per feature | before building it |
| `docs/ai-log.md` | your own account of how AI was used | never edited by the agent |
| `bin/check` | the quick check | you run it; so can the agent |

## What bin/check verifies

- `AGENTS.md` has no `TODO` left and has 40 lines or fewer.
- Every document in `docs/` has its line in `AGENTS.md`, and every `docs/` path
  named in `AGENTS.md` exists. A document without a line does not exist for
  the agent.
- `CLAUDE.md` and `.github/copilot-instructions.md` point to `AGENTS.md`
  instead of copying it. Copies drift apart; pointers cannot.
- As warnings only: documents in `docs/` that still contain `TODO`.

When your project has code, add its lint and tests at the marked place at the
end of `bin/check`.

On Windows, `bin\check.cmd` runs the same script through the `sh` that comes
with Git for Windows, so Git must be installed.

## Rules of thumb

- Keep `AGENTS.md` small. It is sent with every request; everything in `docs/`
  costs only when it is read.
- One subject per document, one line per document in the index.
- A lesson learned goes into the document that owns the subject, not into
  `AGENTS.md`. Add a rule after a real mistake, not to prevent an imagined one.
- What must be remembered about the project is written in the repository, not
  left in a chat or in a tool's private memory.
