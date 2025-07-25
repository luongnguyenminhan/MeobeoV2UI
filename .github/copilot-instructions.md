# Copilot Instructions for MeobeoV2UI

## Project Overview

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **State Management:** Redux (see `store/` and `slices/`)
- **Internationalization:** next-intl, with translations in `i18n/messages/`
- **Authentication:** Context-based, see `context/AuthContext.tsx` and `hooks/useAuth.ts`
- **API Integration:** Service layer in `services/api/` (e.g., `auth.ts`, `user.ts`)

## Architecture & Patterns

- **App Structure:**
  - Pages and layouts are in `app/`, using `[locale]` for i18n routing.
  - Shared UI components in `components/ui/`, landing page sections in `components/landing/`.
  - Context providers in `context/` (e.g., `ThemeContext`, `ReactQueryProvider`).
- **Styling:**
  - Use Tailwind utility classes. Global styles in `styles/globals.css`.
- **State:**
  - Use Redux for global state, React Context for theme/auth/query providers.
- **API Calls:**
  - Use functions from `services/api/` for backend communication. Prefer React Query for data fetching/caching.
- **i18n:**
  - Use `useTranslations` hook from next-intl. Add new keys to `i18n/messages/{en,vi}.json`.

## Developer Workflows

- **Build:** `npm run build`
- **Dev:** `npm run dev`
- **Lint:** `npm run lint`
- **Format:** `npm run format` (if configured)
- **Test:** No test setup detected; add tests in `__tests__/` or `components/examples/` if needed.
- **Debug:** Use Next.js dev server; inspect context/providers for state issues.

## Conventions & Tips

- **Component Structure:**
  - Prefer function components with explicit props typing.
  - Use `use client`/`use server` directives as needed for SSR/CSR.
- **File Naming:**
  - Use PascalCase for components, camelCase for hooks.
- **Imports:**
  - Absolute imports preferred (e.g., `import { X } from 'components/ui/X'`).
- **Extending UI:**
  - Add new UI elements in `components/ui/` or `components/landing/`.
- **Adding API Endpoints:**
  - Add to `services/api/`, keep logic isolated from UI.
- **Adding Translations:**
  - Update `i18n/messages/{en,vi}.json` and reference via `useTranslations`.

## Key Files & Directories

- `app/` — Routing, layouts, pages
- `components/` — UI and landing page components
- `context/` — Providers for theme, auth, query
- `services/api/` — API integration
- `store/` — Redux store and slices
- `i18n/` — Internationalization
- `styles/` — Global and font styles

---

_If any section is unclear or missing, please provide feedback to improve these instructions._
