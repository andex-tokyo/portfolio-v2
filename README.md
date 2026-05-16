# portfolio-v2

Astro-based portfolio site deployed as a static site.

## Requirements

- Node.js 26.1.0 via asdf
- npm
- microCMS environment variables for content-backed builds

```bash
SERVICE_DOMAIN=your-service-domain
API_KEY=your-api-key
```

Without these variables, local dev/build still starts with empty content so the shell can be checked.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages

Use these settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `26.1.0`
- Environment variables: `SERVICE_DOMAIN`, `API_KEY`

Redirects are defined in `public/_redirects`.
