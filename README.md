# Nuxt3 *Content 2* Minimal Document-Driven Starter Project

Nuxt Content is a file-based CMS with a powerful query API which supports Markdown, YML, CSV, and JSON. Look at the [Content documentation](https://content.nuxt.com/) to learn more about Nuxt Content.

This is a bare-bones starter project with pre-configured tooling to allow a developer to spin up a new project quickly.

## Features

- Nuxt 3 and Content 2 configured in [Document-driven mode](https://content.nuxt.com/document-driven/introduction).
- TypeScript-ready.
- [Tailwind CSS](https://tailwindcss.com/docs/installation) v3.4 for styling with [Config Viewer](https://tailwindcss.nuxtjs.org/tailwind/viewer) enabled.
- ESLint and StyleLint fully configured.
- Prettier for code formatting.
- Support for prose linting via [Vale](https://vale.sh/) (Vale must be installed separately).
- Dark/Light/Sepia/System color mode via [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)

## Setup

Install the project dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
# yarn
yarn dev

# npm
npm run dev
```

## Development Tooling

```bash
# perform typechecking on project
yarn typecheck

# check for code formatting errors
yarn prettier

# automatically fix code formatting errors
yarn prettier:format

# lint code for JS errors
yarn lint:js

# lint code for CSS style errors
yarn lint:style

# lint code for both JS and CSS errors
yarn lint

# automatically fix both JS and CSS errors
yarn lint:fix

# lint code for prose issues
yarn lint:prose

```

## Production

Build the application for production:

```bash
# yarn
yarn build

# npm
npm run build
```

Locally preview production build:

```bash
# yarn
yarn preview

# npm
npm run preview
```

Alternatively pre-render every route for static hosting:

```bash
#yarn
yarn generate

#npm
npm run generate
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Recommended VSCode Settings

`.vscoe/settings.json`:
```json
{
  "eslint.experimental.useFlatConfig": true,
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "css.format.enable": false,
  "css.lint.unknownAtRules": "ignore"
}

```