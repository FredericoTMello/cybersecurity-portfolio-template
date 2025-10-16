# Deployment Log — October 2025

This log consolidates every deployment-related investigation carried out between 12–15 October 2025. It replaces the individual notes that previously lived in the repository root (`BRANCH_VERIFICATION.md`, `COMMIT_STATUS.md`, `VERCEL_DEBUG.md`, `VERCEL_DEPLOYMENT_FIX.md`, `VERCEL_DEPLOYMENT_SOLUTION.md`, `VERCEL_FIX.md`); those files now keep only a short summary that links back here.

## Branch Verification (15 Oct 2025)
- **Git branch:** `master` (default branch confirmed on GitHub and Vercel).
- **Local HEAD:** `4e032b7` (`fix: add explicit Vercel build configuration`).
- **Remote commit:** `f836450` (`fix: change moduleResolution to node...`).
- Confirmed presence of layout and page components in `origin/master` using `git ls-tree` and verified Vercel deployment settings (`Production Branch = master`).
- Potential pitfalls documented: mismatched production branch, case-sensitivity on Linux builds, stale Vercel cache.

## Commit Status Snapshot (14 Oct 2025)
- Commit `1c96a9d` added `.npmrc`, `vercel.json`, and `VERCEL_DEPLOYMENT_FIX.md`.
- Recommended action at the time: `git push origin master` to trigger Vercel deployment after npm configuration changes.
- Troubleshooting guidance included GitHub authentication fallback steps and expectations for Vercel’s build sequence.

## React 19 Peer Dependency Mitigation (14 Oct 2025)
- Root cause: `next-mdx-remote@4.4.1` still declares React <=18 as a peer dependency, causing `npm ci` to fail on Vercel.
- Resolution: enforce `legacy-peer-deps` via project-level `.npmrc` and matching commands in `vercel.json`.
- Status: safe workaround (application tested locally; zero CVEs). Remove once upstream React 19 support lands.

## Hydration & Module Resolution Debugging (14–15 Oct 2025)
- Resolved a nonce hydration mismatch by only injecting the CSP nonce in production (`process.env.NODE_ENV === 'production'`).
- Investigated Vercel build errors reporting missing components. Determined issues stemmed from outdated deployments pulling code prior to refactor; confirmed by successful local builds (`npm run build`).
- Documented verification steps for cache eviction, branch configuration, and log analysis.

## Barrel Export Resolution Strategy (15 Oct 2025)
- Vercel builds intermittently failed to resolve barrel exports from `@/components/layout` and `@/components/pages`.
- Permanent fix: replace barrel imports with direct imports to `Header`, `FloatingNav`, `Contact`, `Experience`, `Formation`, and `Projects` components.
- Other barrel exports (e.g., `ui`, `error`, `monitoring`, `motion`) remain intact because they target purely client-side modules.

## Consolidated Lessons
1. **Always push to GitHub:** Vercel clones from the remote repository; local-only commits are invisible to the build pipeline.
2. **Prefer explicit imports on production builds:** Webpack/Turbopack behaves more strictly in Vercel’s optimized environment.
3. **Handle peer dependency drift proactively:** Keep `.npmrc` and `vercel.json` aligned when React/LTS versions move ahead of third-party packages.
4. **Watch CSP differences between dev and prod:** Hydration mismatches can surface when the middleware injects attributes that development mode omits.

---
*Canonical reference for October 2025 deployment workstreams. Update this log for future fixes rather than recreating root-level markdown notes.*
