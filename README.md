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

## Content Deploy Webhook

This repository deploys the Wrangler direct upload Pages project from GitHub Actions.

Required GitHub Actions secrets:

- `SERVICE_DOMAIN`
- `API_KEY`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

microCMS should trigger the `repository_dispatch` event:

- Method: `POST`
- URL: `https://api.github.com/repos/andex-tokyo/portfolio-v2/dispatches`
- Headers:
  - `Accept: application/vnd.github+json`
  - `Authorization: Bearer <GitHub fine-grained PAT>`
  - `X-GitHub-Api-Version: 2022-11-28`
- Body:

```json
{
  "event_type": "microcms_build"
}
```
