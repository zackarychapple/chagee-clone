import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "menuRemote",
  filename: "remoteEntry.js",
  exposes: {
    "./MenuShowcase": "./src/MenuShowcase.tsx",
  },
  shared: {
    react: { singleton: true },
    "react/": { singleton: true },
    "react-dom": { singleton: true },
    "react-dom/": { singleton: true },
  },
  dts: false,
  manifest: true,
});
