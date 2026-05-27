---
name: project-uuid-registration
description: Ensures new or renamed portfolio project UUID entries are fully wired across src/content/projects (content module, index registry, tree node, and ProjectId typing) and validated before finishing. Use when adding/renaming a uuid-*.tsx project file or updating project ids.
disable-model-invocation: true
---

# Project UUID Registration

## Instructions

Use this workflow whenever adding or renaming a project content id (for example `uuid-241`) or creating a new `src/content/projects/uuid-<number>.tsx` file.

## Checklist (verbatim)

# Project UUID Registration Checklist

When adding or renaming any project content id (for example `uuid-241`) or creating a new `src/content/projects/uuid-<number>.tsx` file, always keep all project wiring in sync.

## Required Execution Order (do not skip)

1. Create/update `src/content/projects/uuid-<number>.tsx` and export:
   - `id` as a `ProjectId`
   - `content`
2. Update `src/content/projects/index.ts`:
   - Add the uuid module import.
   - Add `[uuidX.id]: { content: uuidX.content }` in `projectData`.
3. Update `src/content/projects/tree.ts`:
   - Add/update the matching node in `defaultData`.
   - Ensure title and `id` point to the same project.
4. Update `src/content/projects/types.ts` if `ProjectId` is an explicit union.
5. Run lint checks on touched files and fix newly introduced issues.

## Mandatory Validation Before Finishing

- `tree.ts` ids -> all ids exist in `projectData`.
- `projectData` ids -> all ids map to existing `uuid-*.tsx` modules.
- Added/renamed uuid file export id matches the tree/index registration id exactly.
- No commented-out or orphaned uuid references are left behind unless intentionally requested.

## Failure Prevention Notes

- Never ship a new uuid content file without index and tree registration in the same change.
- If a project is intentionally hidden from tree, explicitly note it and keep `projectData` behavior intentional.

## Quick validation loop

After edits:

- Read/verify the `id` export in the new/changed `uuid-*.tsx` module.
- Verify `src/content/projects/index.ts` imports the module and includes it in `projectData`.
- Verify `src/content/projects/tree.ts` includes a node referencing the same `uuid-*` id.
- Run lints on the touched files and fix any newly introduced issues.

## Examples

- Adding a new project content file like `src/content/projects/uuid-244.tsx`
- Creating a nested project module like `src/content/projects/kain/uuid-244.tsx` (still must be imported/registered in `src/content/projects/index.ts` and referenced from `src/content/projects/tree.ts`)
