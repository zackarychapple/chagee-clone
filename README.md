# CHAGEE Federated Clone

A React/Vite micro-frontend clone of the CHAGEE Malaysia homepage, composed from
one shell and three federated remotes.

## Apps

- `@chagee/shell` on port `5173`: page shell, fixed navigation, footer, and
  remote composition.
- `@chagee/brand-remote` on port `5174`: hero carousel and brand/about section.
- `@chagee/menu-remote` on port `5175`: tea intro and menu category grid.
- `@chagee/growth-remote` on port `5176`: global stores, Halal, and media strip.

## Local Development

```bash
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run typecheck
npm run build
npm run preview
```

The host defaults to local remote entries:

- `http://localhost:5174/remoteEntry.js`
- `http://localhost:5175/remoteEntry.js`
- `http://localhost:5176/remoteEntry.js`

Override them with `VITE_BRAND_REMOTE_URL`, `VITE_MENU_REMOTE_URL`, and
`VITE_GROWTH_REMOTE_URL` when deploying the shell against hosted remotes.

## Zephyr

Each Vite config follows the Zephyr React/Vite integration pattern and includes
`withZephyr()` when `ZEPHYR_DEPLOY=true`.

```bash
npm run zephyr:deploy
```

`npm run zephyr:deploy` deploys the remotes first, extracts their Zephyr URLs,
then deploys the shell with these environment variables set:

- `VITE_BRAND_REMOTE_URL`
- `VITE_MENU_REMOTE_URL`
- `VITE_GROWTH_REMOTE_URL`

You can still deploy workspaces manually:

```bash
npm run zephyr:deploy:brand
npm run zephyr:deploy:menu
npm run zephyr:deploy:growth
VITE_BRAND_REMOTE_URL="https://.../remoteEntry.js" \
VITE_MENU_REMOTE_URL="https://.../remoteEntry.js" \
VITE_GROWTH_REMOTE_URL="https://.../remoteEntry.js" \
npm run zephyr:deploy:shell
```

The shell also declares `zephyr:dependencies` in `apps/shell/package.json`.
Zephyr can use those aliases for automatic remote resolution after the project is
backed by a git remote and the remotes have dashboard environments. Until then,
the deploy script's explicit remoteEntry injection is the reliable local path.

Current snapshot URLs from the first Zephyr deployment:

- Shell: `https://zackary-chapple-15223-chagee-shell-chagee-zack-ch-19fbb5aef-ze.zephyrcloud.app`
- Brand remote: `https://zackary-chapple-15220-chagee-brand-remote-chagee--b6dae138e-ze.zephyrcloud.app`
- Menu remote: `https://zackary-chapple-15221-chagee-menu-remote-chagee-z-28236413c-ze.zephyrcloud.app`
- Growth remote: `https://zackary-chapple-15222-chagee-growth-remote-chagee-daa90e743-ze.zephyrcloud.app`
