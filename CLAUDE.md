# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based portfolio website built for static deployment to GitHub Pages. It showcases projects, experience, skills, and education using a clean, modern design with dark/light theme support.

**Tech Stack:**
- SvelteKit 1.25.0 with adapter-static
- TypeScript (strict mode)
- UnoCSS (atomic CSS framework, not Tailwind)
- Vite build system
- GitHub Actions for deployment

## Development Commands

```bash
# Start development server
yarn dev

# Build for production (outputs to build/)
vite build

# Preview production build
yarn preview

# Type checking
yarn check
yarn check:watch  # watch mode

# Linting and formatting
yarn lint          # check formatting and linting
yarn format        # auto-format code
```

## Architecture

### Directory Structure

```
src/
├── routes/                    # SvelteKit pages
│   ├── +layout.svelte         # Root layout (theme, navigation)
│   ├── +page.svelte           # Home page
│   ├── education/
│   ├── resume/
│   ├── search/
│   ├── skills/[slug]/         # Dynamic skill detail pages
│   └── projects-experience/[slug]/  # Dynamic project/experience pages
├── lib/
│   ├── components/            # Reusable UI components
│   ├── data/                  # Content data files (see Content Management)
│   ├── stores/                # Svelte stores (theme.ts)
│   ├── utils/                 # Utility functions
│   └── types.ts              # TypeScript type definitions
```

### Path Aliases

The project uses path aliases configured in `svelte.config.js`:
- `$lib` → `./src/lib`
- `@data` → `./src/lib/data`
- `@components` → `./src/lib/components`
- `@md` → `./src/lib/md`
- `@stores` → `./src/lib/stores`
- `@utils` → `./src/lib/utils`

**Always use these aliases in imports** instead of relative paths.

### Content Management

All content (skills, projects, experience, education) is managed through TypeScript files in `src/lib/data/`:
- `skills.ts` - Skills catalog with categories and colors
- `projects.ts` - Personal projects
- `experience.ts` - Work experience
- `education.ts` - Educational background
- `timeline.ts` - Combined timeline merging projects and experience
- `navbar.ts` - Navigation menu items
- `home.ts` - Home page content
- `resume.ts` - Resume data

**To add/edit content:** Modify these data files directly. They are strongly typed using interfaces from `src/lib/types.ts`.

### Type System

Key TypeScript types in `src/lib/types.ts`:
- `Item<S>` - Base type with slug, name, logo, description
- `Skill<S>` - Extends Item with color and category
- `Project<S>` - Extends Item with links, period, type, skills
- `Experience<S>` - Extends Project with company, location, contract
- `Education<S>` - Educational info with organization, degree
- `TimelineItem<S>` - Union type of Project | Experience

Use the `isExperience()` type guard to distinguish Experience from Project in TimelineItems.

### Styling

**UnoCSS** is used instead of Tailwind CSS. Key differences:
- Atomic CSS utilities similar to Tailwind
- Custom shortcuts defined in `uno.config.ts`:
  - `col` → flex flex-col
  - `row` → flex flex-row
  - `col-center` → centered column
  - `row-center` → centered row
- Icons via `i-carbon-{name}` classes (Iconify Carbon icons)
- Global styles in `src/lib/index.scss`

**Theme Management:**
- Dark/light theme toggle managed by Svelte store in `src/lib/stores/theme.ts`
- Theme preference persisted to localStorage
- CSS variables used for theming

### Component Architecture

Components follow a clean, reusable pattern:
- Card components for different content types (ProjectCard, ExperienceCard, TimelineCard)
- Markdown rendering with syntax highlighting (Prism.js)
- Icon system using Iconify
- Carrousel for skills showcase

## GitHub Pages Deployment

The site deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`):
1. Triggers on push to master/main
2. Runs `yarn install` and `yarn build`
3. Generates 404.html fallback for SPA routing
4. Deploys to gh-pages branch

**Important:** The `base` variable in `svelte.config.js` is set to `''` because the repo name matches the GitHub Pages domain (`{username}.github.io`). If the repo name differs, set base to the repo name with a leading slash.

## Code Conventions

- **Tabs for indentation** (per Prettier config)
- **Single quotes** for strings
- **100 character line width**
- TypeScript strict mode enabled
- ESLint with Svelte plugin for linting

## Adding New Routes

1. Create route directory in `src/routes/`
2. Add `+page.svelte` for the page component
3. For dynamic routes, use `[slug]` folder naming
4. Update navigation in `src/lib/data/navbar.ts` if needed

## Modifying Content

**To add a new project:**
1. Add entry to `src/lib/data/projects.ts`
2. Reference skills from `src/lib/data/skills.ts`
3. Timeline automatically merges projects and experience

**To add a new skill:**
1. Add to `src/lib/data/skills.ts`
2. Choose a color and category
3. Can be referenced in projects/experience

**To update navigation:**
- Edit `src/lib/data/navbar.ts`
- Uses `Platform` enum from types for social links
