import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";
import moduleFederationConfig from "./module-federation.config";

const isZephyrDeploy = process.env.ZEPHYR_DEPLOY === "true";
const plugins = [react(), federation(moduleFederationConfig)];

if (isZephyrDeploy) {
  plugins.push(withZephyr());
}

export default defineConfig({
  base: isZephyrDeploy ? "./" : "http://localhost:5173/",
  plugins,
  server: {
    cors: true,
    origin: "http://localhost:5173",
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
  build: {
    target: "chrome89",
    minify: false,
    modulePreload: {
      resolveDependencies: (_, deps) =>
        deps.filter((dep) => {
          const isReactPackage = dep.includes("react") || dep.includes("react-dom");
          const isNotRemoteEntry = !dep.includes("remoteEntry.js");

          return isReactPackage && isNotRemoteEntry;
        }),
    },
  },
});
