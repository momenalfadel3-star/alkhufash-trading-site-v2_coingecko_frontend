# Deploy to Cloudflare Pages (No VPS)

This project is a Vite (React) SPA. You can deploy it as a **static web app** on Cloudflare Pages.

## Recommended: Deploy via GitHub (Cloudflare builds for you)

1) Push this project to a GitHub repo.
2) Cloudflare Dashboard → **Workers & Pages** → **Pages** → **Create a project**
3) Connect your GitHub repo
4) Build settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist/public`

5) Deploy ✅

## Local build (optional)

```bash
npm install
npm run build
```

The static output will be created at: `dist/public`

Upload the contents of `dist/public` to any static hosting.

## CoinGecko
Live prices and charts are fetched client-side from CoinGecko public endpoints (no API key).
