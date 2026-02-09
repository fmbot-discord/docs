# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Documentation website for **.fmbot**, a Discord bot for Last.fm music statistics. The site is published at https://fm.bot/ and built with Zensical (a Python-based static site generator using Material for MkDocs theme).

## Development Commands

```bash
# Install dependencies (requires uv: https://docs.astral.sh/uv/)
uv sync

# Live preview with hot reload
uv run zensical serve

# Production build (outputs to site/)
uv run zensical build --clean

# Upgrade dependencies
uv lock --upgrade
```

Requires Python >= 3.13.

## Deployment

GitHub Actions builds and deploys to GitHub Pages on every push to `master`. The workflow installs `uv`, runs `uv sync --locked --all-extras --dev`, builds with `uv run zensical build --clean`, and deploys the `site/` directory. Custom domain: `fm.bot` (configured via `docs/CNAME`).

## Site Structure

- `mkdocs.yml` — Main configuration (theme, nav, extensions, analytics)
- `docs/` — All source content
  - `docs/commands/` — Bot command documentation (17 pages organized by category)
  - `docs/guildsettings/` — Server configuration docs
  - `docs/overrides/` — Custom Jinja2 templates that extend the Material theme
    - `home.html` — Custom homepage with hero, feature cards, and stats grid
    - `main.html` — Base template wrapper (announcement banner, Google Analytics)
  - `docs/style/style.css` — Custom CSS (light/dark mode, responsive layouts)
  - `docs/img/` — Logos and images
  - Top-level pages: `faq.md`, `importing.md`, `supporter.md`, `privacy.md`, `terms.md`, etc.

## Key Conventions

- Navigation is explicitly defined in `mkdocs.yml` under `nav:` — new pages must be added there
- Markdown extensions in use: `admonition`, `pymdownx.details`, `attr_list`, `toc` (with permalinks)
- The homepage (`docs/index.md`) uses a completely custom template (`docs/overrides/home.html`) — the markdown content is hidden via CSS
- Custom CSS uses Material theme CSS variables (e.g., `--md-primary-fg-color`) for theme consistency
- The `docs/overrides/` directory uses Jinja2 template inheritance (`{% extends "base.html" %}` / `{% extends "main.html" %}`)
- Light mode palette: indigo primary; Dark mode palette: blue primary on slate scheme
