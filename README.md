# Instagram Clone with Tailwind CSS

A responsive Instagram feed layout built with plain HTML and Tailwind CSS. It is a static UI with no JavaScript, designed to practice utility-first styling.

## Features

- Sticky header with logo, search input and navigation icons
- Horizontally scrollable stories bar
- Post cards with image, caption, comments and a comment form
- Like and bookmark states for posts
- Sidebar with mini profile and follow suggestions
- Responsive layout: the sidebar and some header elements are hidden on small screens
- Hover animations on icons and stories

## Tech stack

- HTML
- Tailwind CSS 3
- @tailwindcss/forms
- tailwind-scrollbar

## Getting started

Requirements: Node.js 16 or newer.

```bash
git clone https://github.com/<your-username>/instagram-clone-tailwind.git
cd instagram-clone-tailwind
npm install
npm run dev
```

`npm run dev` rebuilds `dist/output.css` whenever you change the markup. Serve the project root with a local server (for example the Live Server extension in VS Code) and open `src/index.html`. The stylesheet is linked with an absolute path (`/dist/output.css`), so opening the file directly from disk will not load the styles.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Build the CSS and watch for changes          |
| `npm run build` | Build a minified CSS file for production     |

## Project structure

```
src/
  index.html    Page markup
  input.css     Tailwind directives and the custom .btn component
dist/
  output.css    Generated stylesheet
tailwind.config.js
```

## Notes

- All content is static placeholder data.
- Avatars and post images are loaded from external sources (pravatar, Unsplash, Wikimedia).
- The comment form, search, follow and sign out buttons do not do anything yet.
