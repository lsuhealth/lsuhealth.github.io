# COPES Website

Responsive static marketing website + Markdown blog for GitHub Pages/Jekyll.

## Pages

- `index.html` — responsive marketing homepage with video hero
- `blog.html` — Jekyll-generated blog index
- `contact.html` — project contact page
- `_posts/` — Markdown blog posts
- `_layouts/` — shared Jekyll layouts
- `assets/css/style.css` — complete responsive design system
- `assets/js/main.js` — responsive navigation and lightweight UI behavior
- `assets/video/copes-hero.mp4` — optional homepage background video

## Responsive behavior

The design uses fluid typography and responsive breakpoints for desktop, tablet, and phone layouts. Major grids collapse from multi-column layouts to one column on narrow screens. The mobile navigation uses a touch-friendly menu button.

## Color palette

The requested COPES palette is defined at the very top of `assets/css/style.css`:

```css
--purple: #1f666b;
--purple-2: #3f8583;
--gold: #8eb5af;
--soft-purple: #c3e7df;
--soft-gold: #8cb0a1;
```

## Font Awesome

The shared layout loads Font Awesome from cdnjs and uses icons in capability cards, workflows, blog metadata, contact cards, and calls to action. The site does not use a generated logo; the navigation and footer use a text-only `COPES` wordmark.

## Hero video

Place your MP4/H.264 background video at:

`assets/video/copes-hero.mp4`

Recommended:

- 1920×1080 or 1600×900
- 10–25 seconds
- muted/no audio track
- compressed to roughly 4–12 MB
- visually suitable for looping

A palette-matched SVG poster is already provided as a fallback.

## Contact information

Open `contact.html` and replace:

`your-email@example.com`

with the public email address you want to expose.

## Add a blog post

Create a file such as:

`_posts/2026-10-01-example-title.md`

with front matter:

```yaml
---
title: "Example Post"
date: 2026-10-01
author: "COPES Team"
category: "Research"
excerpt_text: "Short description shown on the blog index."
---
```

Everything below the front matter is normal Markdown.

## Run locally

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://127.0.0.1:4000`.

The Gemfile includes `tzinfo-data` for local Windows builds, which prevents the common `TZInfo::DataSourceNotFound` error.

## Deploy with GitHub Pages

Push the repository to GitHub, then open:

**Settings → Pages → Build and deployment → Source → Deploy from a branch**

Choose the `main` branch and `/ (root)`.

If this is a project site such as `username.github.io/copes-website`, update `_config.yml`:

```yaml
baseurl: "/copes-website"
```

For a custom domain or `username.github.io`, leave `baseurl` empty.


## Team page

`team.html` contains the COPES experts and industry partners and is linked from the primary navigation and footer.
