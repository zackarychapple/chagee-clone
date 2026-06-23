import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "brandRemote",
  filename: "remoteEntry.js",
  exposes: {
    "./BrandExperience": "./src/BrandExperience.tsx",
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
