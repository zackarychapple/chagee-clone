import { createModuleFederationConfig } from "@module-federation/vite";

const remoteEntry = (envKey: string, port: number) =>
  process.env[envKey] ?? `http://localhost:${port}/remoteEntry.js`;

export default createModuleFederationConfig({
  name: "chageeShell",
  filename: "remoteEntry.js",
  remotes: {
    brandRemote: {
      type: "module",
      name: "brandRemote",
      entry: remoteEntry("VITE_BRAND_REMOTE_URL", 5174),
      shareScope: "default",
    },
    menuRemote: {
      type: "module",
      name: "menuRemote",
      entry: remoteEntry("VITE_MENU_REMOTE_URL", 5175),
      shareScope: "default",
    },
    growthRemote: {
      type: "module",
      name: "growthRemote",
      entry: remoteEntry("VITE_GROWTH_REMOTE_URL", 5176),
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
