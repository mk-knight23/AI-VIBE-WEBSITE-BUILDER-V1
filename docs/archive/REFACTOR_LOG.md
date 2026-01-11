# REFACTOR_LOG.md

## Phase 1: Diagnostics & Stability
- **SSE Stream Robustness**: Improved parsing in `src/app/api/generate/route.ts` and `src/hooks/use-generate-stream.ts` to handle fragmented network chunks.
- **Prisma Stabilization**: Reverted to Prisma 6.12.0 and ensured schema compatibility after Prisma 7 discovery (moved back for stability in current workspace).
- **TypeScript Fixes**: Resolved configuration conflicts in `next.config.ts` and `tailwind.config.ts` arising from major version upgrades.
- **Build Verification**: Achieved a clean build state (authenticated env pending).

## Phase 2: Technical Debt & Upgrades
- **Core Upgrades**:
  - Next.js: `v16.1.1` (Turbopack)
  - React/ReactDOM: `v19.2.3`
  - Clerk: `v6.36.7`
  - Tailwind CSS: `v4.0.0`
- **Library Consolidation**:
  - Merged `src/lib/sanitize.ts` into `src/lib/utils.ts`.
  - Removed dead code and updated all imports.
- **AI Provider Weighting**:
  - Created `src/lib/ai-selection.ts` for dynamic weighting (OpenRouter 40%, Routeway 30%, etc.).
  - Refactored `route.ts` to use weighted selection and failover logic.

## Phase 3: Feature Enhancement & Scaling
- **"Auto-Healing" SSE Parser**: Implemented logic to repair malformed code blocks and handle secondary extraction patterns in `route.ts`.
- **Project Versioning**:
  - Added `createSnapshot` and `getVersions` tRPC mutations back into `projectsRouter`.
  - Schema supports `ProjectVersion` snapshots of fragment files.
- **AI Prompt Refinement**: Updated `src/prompt.ts` with React 19 best practices (Server Actions, `useActionState`, `useOptimistic`).
- **Edge Caching**: Added `src/lib/cache.ts` for Edge-compatible fragment caching.

## Final System State
- **Directory Structure**:
  - `src/lib/`: Consolidated utilities and dynamic AI selection logic.
  - `src/generated/prisma/`: Updated client.
  - `src/modules/projects/server/procedures.ts`: Enhanced with versioning.
- **Launch Command**:
  ```bash
  npm run dev
  ```
- **Build Command**:
  ```bash
  npm run build
  ```
