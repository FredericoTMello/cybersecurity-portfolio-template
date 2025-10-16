# Engineering Notes — October 2025

This document consolidates architectural and upgrade notes previously capturadas em múltiplos arquivos da raiz (`COMPONENT_REFACTOR_PLAN.md`, `COMPONENT_STRUCTURE.md`, `FIXES_NEXTJS15.md`, `REFACTOR_SUMMARY.md`, `SERVER_CLIENT_FIX.md`, `UPGRADE_NEXT15_SUMMARY.md`). As versões na raiz agora são resumos curtos que apontam para esta seção e demais arquivos em `docs/`.

## Component Refactor Roadmap
- Identified redundant top-level component files mirroring folders (`Header.tsx`/`Header/`, `FloatingNav.tsx`/`FloatingNav/`).
- Proposed modular layout:
  - `components/layout/` → persistent layout components and their `*-parts` folders.
  - `components/home/` → hero and preview sections unique to `/`.
  - `components/pages/` → full-page compositions used on dedicated routes.
  - `components/ui/` → reusable presentational widgets.
  - `components/error/`, `components/monitoring/`, `components/motion/` → specialised domains.
- Action items: migrate imports to the new structure, introduce repository/service layers, and continue extracting constants into `src/config/constants/`.

## Completed Structural Improvements (Commit `9756ed1`)
- Reorganised the component tree following the plan above.
- Replaced default imports with consistent named imports where barrel exports remain.
- Added Vercel Analytics, Speed Insights, and bundle analyzer support.
- Verified build output: shared JS ~87 kB, all 16 routes generated successfully.

## Next.js 15 + React 19 Upgrade Summary
- Upgraded to Next.js 15.5.5 and React 19.0.0; aligned `lucide-react` and related packages.
- Converted all Framer Motion usages to `m.*` to preserve tree-shaking inside `LazyMotion`.
- Implemented nonce-based CSP using Next.js 15 middleware capabilities; added JSON sanitisation to structured data scripts.
- Adjusted dynamic route APIs to await `params` (now delivered as Promises).
- Documented rollback plan and future improvements (remove `legacy-peer-deps` when upstream support arrives).

## Server vs Client Boundary Fixes
- Identified that `components/pages/Blog.tsx` (server component) should not be exported through the barrel index to avoid bundling `fs` in client builds.
- Standardised page imports:
  - `BlogSection` imported directly from `components/pages/Blog`.
  - Other page sections imported as named exports from the barrel file (client-only modules).
- Resolved hydration issues caused by mismatched default/named exports.

## Remaining Opportunities
1. Introduce `ErrorBoundary` globally (components already implemented).
2. Enable ISR for blog posts (`revalidate` interval) to reduce rebuild frequency.
3. Expand constants/config extraction to eliminate residual magic strings.
4. Track bundle size with `npm run analyze` and act on hotspots when necessary.

---
*Use this journal file as the single source of truth for ongoing architectural work. When updates occur, append here instead of re-introducing standalone markdown documents in the repository root.*
