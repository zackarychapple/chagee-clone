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
  base: isZephyrDeploy ? "./" : "http://localhost:5175/",
  plugins,
  server: {
    cors: true,
    origin: "http://localhost:5175",
    port: 5175,
    strictPort: true,
  },
  preview: {
    port: 5175,
    strictPort: true,
  },
  build: {
    target: "chrome89",
    minify: false,
    modulePreload: false,
  },
  experimental: isZephyrDeploy
    ? {
        renderBuiltUrl() {
          return { relative: true };
        },
      }
    : undefined,
});
