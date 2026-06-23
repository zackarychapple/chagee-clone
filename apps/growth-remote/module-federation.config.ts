import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "growthRemote",
  filename: "remoteEntry.js",
  exposes: {
    "./GrowthStory": "./src/GrowthStory.tsx",
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
