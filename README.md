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

`npm run zephyr:deploy` deploys the remotes first, then deploys the shell using
the `zephyr:dependencies` selectors in
`apps/shell/package.json`. The shell remotes currently follow the
`latest_zackary_chapple` tag for brand, menu, and growth.

You can still deploy workspaces manually:

```bash
npm run zephyr:deploy:brand
npm run zephyr:deploy:menu
npm run zephyr:deploy:growth
npm run zephyr:deploy:shell
```

The shell also declares `zephyr:dependencies` in `apps/shell/package.json`.
Zephyr resolves labels by checking for an environment first, then a tag, then a
version number.
