# tRPC Websocket Server + Tauri Desktop App Client Demo
This repo showcases how tRPC can be used with WebSockets in a Next.js app. It features a basic chat room where users can pick a username and start texting right away. All incoming messages are sent to connected clients in realtime via websockets, just like the information on who is currently typing. 

This is a dumbed down version of the [tRPC Next.js Websocket example](https://github.com/trpc/examples-next-prisma-websockets-starter). I removed the dependency on `prisma` (which was pre-configured with a postgres DB) and replaced it with a simple in-memory 'database'. The authentication logic was also dumbed down: users just enter a username, no password or anything is required.

## Features

- 🧙‍♂️ E2E type safety with [tRPC](https://trpc.io)
- ⚡ Full-stack React with Next.js
- ⚡ WebSockets / Subscription support
- 🔐 Authorization using [next-auth](https://next-auth.js.org/)
- ⚙️ VSCode extensions
- 🎨 ESLint + Prettier
- 💚 CI setup using GitHub Actions:
  - ✅ E2E testing with [Playwright](https://playwright.dev/)
  - ✅ Linting

This thing uses `pnpm` so make sure to install it.
## Install dependencies
`pnpm i`

## Commands

```bash
pnpm build      # runs `next build`
pnpm dev        # starts next.js + WebSocket server in development mode
pnpm test-dev   # runs e2e tests on dev
pnpm test-start # runs e2e tests on `next start` - build required before
pnpm test:unit  # runs normal Vitest unit tests
pnpm test:e2e   # runs e2e tests
```

## Deployment

### Using [Render](https://render.com/) - NOT TESTED (from original tRPC template)

The project contains a [`render.yaml`](./render.yaml) [_"Blueprint"_](https://render.com/docs/blueprint-spec) which makes the project easily deployable on [Render](https://render.com/).

The database is setup with a `starter` plan, but you can use a free plan for 90 days.

Go to [dashboard.render.com/blueprints](https://dashboard.render.com/blueprints) and connect to this Blueprint and see how the app and database automatically gets deployed.

You will either need to create an environment group called `trpc-websockets` with environment variables or remove that from `render.yaml` in favor of manual environment variables that overrides the ones in `/.env`.
