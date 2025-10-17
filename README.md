# Hono API Template
This is a Cloudflare Worker with [Hono](https://github.com/honojs/hono).


## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/hono-template
```

## Setup Steps

1. Install the project dependencies with a package manager of your choice:
   ```bash
   npm install
   ```
2. Deploy the project!
   ```bash
   npx wrangler deploy
   ```
3. Monitor your worker
   ```bash
   npx wrangler tail
   ```

## local development

```bash
pnpm dev
```

## Project structure

1. Your main router is defined in `src/index.ts`.
2. Each endpoint has its own file in `src/endpoints/`.
3. For more information read the [Hono documentation](https://hono.dev/docs).
