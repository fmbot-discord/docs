# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Documentation website for **.fmbot**, a Discord bot for Last.fm music statistics. The site is published at https://fm.bot/ and built with Zensical. Zensical is made by the Material for MkDocs team — it's largely compatible with Material for MkDocs config and plugins, but it's not the same project and has its own documentation at https://zensical.org/docs/. Do not assume Material for MkDocs docs apply 1:1.

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

## Text / slash command mode

Every page can be viewed as text commands (`.fm`) or slash commands (`/fm`). The toggle lives in the header (injected by `docs/js/cmd-mode.js`), the homepage section pills use the same mechanism, state is `data-cmd-mode` on `<html>` (default `slash`; set before paint by `overrides/main.html`, persisted in localStorage `cmd-mode`, overridable with `?mode=slash|text`). Styling is in `docs/style/style.css` under "Text / slash command mode".

Markdown conventions (Python-Markdown `attr_list`; the attribute list must be on its own line after list items/paragraphs):

- `### .whoknows (`.wk`, `.w`) { data-slash="/wk" }` — heading and TOC entry swap to `/wk` in slash mode. Never change the text before `{` (anchors are generated from it and the bot links to them).
- `### .jumble (`.j`) { .text-only }` — "text command only" badge in slash mode. `### /localization { .slash-only }` — "slash command only" badge in text mode.
- `!!! note cmd-text "Examples"` / `!!! note cmd-slash "Examples"` — per-mode example blocks. Text-only commands keep a plain `!!! note "Examples"` so both modes show it.
- `{ .cmd-text }` / `{ .cmd-slash }` on the line after a list item or paragraph for per-mode options.
- Inline: `` `.update full`{ .cmd-text }`` `` `/update type:Full`{ .cmd-slash } ``.
- Slash parameter names and choices must match the bot; the catalog in `HelpService.cs` (fmbot repo) is the source of truth. Slash example style: `/wk artist:COMA mode:Image`, booleans `True`/`False`, users as `user:lastfmusername`.
- Server settings pages don't badge every command; they carry one `!!! info cmd-slash` note pointing at `/settings`.
