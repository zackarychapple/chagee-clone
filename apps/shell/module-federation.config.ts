import { createModuleFederationConfig } from "@module-federation/vite";

const isZephyrDeploy = process.env.ZEPHYR_DEPLOY === "true";

const zephyrTagRemotes = {
  brandRemote:
    "https://t-latest-zackary-chapple--chagee-brand-remote-chagee--c4ff72-ze.zephyrcloud.app/remoteEntry.js",
  menuRemote:
    "https://t-latest-zackary-chapple--chagee-menu-remote-chagee-c-1a3fc2-ze.zephyrcloud.app/remoteEntry.js",
  growthRemote:
    "https://t-latest-zackary-chapple--chagee-growth-remote-chagee-23c342-ze.zephyrcloud.app/remoteEntry.js",
};

const remoteEntry = (envKey: string, port: number, zephyrTagUrl: string) =>
  process.env[envKey] ?? (isZephyrDeploy ? zephyrTagUrl : `http://localhost:${port}/remoteEntry.js`);

export default createModuleFederationConfig({
  name: "chageeShell",
  filename: "remoteEntry.js",
  remotes: {
    brandRemote: {
      type: "module",
      name: "brandRemote",
      entry: remoteEntry("VITE_BRAND_REMOTE_URL", 5174, zephyrTagRemotes.brandRemote),
      shareScope: "default",
    },
    menuRemote: {
      type: "module",
      name: "menuRemote",
      entry: remoteEntry("VITE_MENU_REMOTE_URL", 5175, zephyrTagRemotes.menuRemote),
      shareScope: "default",
    },
    growthRemote: {
      type: "module",
      name: "growthRemote",
      entry: remoteEntry("VITE_GROWTH_REMOTE_URL", 5176, zephyrTagRemotes.growthRemote),
      shareScope: "default",
    },
  },
  shared: {
    react: { singleton: true },
    "react/": { singleton: true },
    "react-dom": { singleton: true },
    "react-dom/": { singleton: true },
  },
  dts: false,
  manifest: true,
  hostInitInjectLocation: "html",
});
