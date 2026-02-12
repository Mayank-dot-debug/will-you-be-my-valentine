# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint (flat config, `eslint.config.js`)

## Architecture

React 19 + Vite 7 app (JSX, no TypeScript). A playful "Will you be my Valentine?" page with two views:

- **App** (`src/App.jsx`) — Root component. Manages a single `isSuccess` state to toggle between the two views.
- **QuestionView** (`src/components/QuestionView.jsx`) — The "No" button dodges the cursor (moves to a random position on hover/click) and cycles through escalating messages. The "Yes" button grows larger with each "No" interaction. Calls `onSuccess` when "Yes" is clicked.
- **SuccessView** (`src/components/SuccessView.jsx`) — Celebratory screen shown after accepting.
- **HeartsBackground** (`src/components/HeartsBackground.jsx`) — Animated falling hearts overlay, spawning a new heart every 300ms with random position/size/speed.

Each component has a co-located `.css` file. Global styles are in `src/index.css` and `src/App.css`.

## ESLint

Flat config with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. Custom rule: `no-unused-vars` ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
