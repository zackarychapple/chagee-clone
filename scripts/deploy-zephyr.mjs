import { spawn } from "node:child_process";

const remotes = [
  {
    label: "brand",
    workspace: "@chagee/brand-remote",
    envKey: "VITE_BRAND_REMOTE_URL",
  },
  {
    label: "menu",
    workspace: "@chagee/menu-remote",
    envKey: "VITE_MENU_REMOTE_URL",
  },
  {
    label: "growth",
    workspace: "@chagee/growth-remote",
    envKey: "VITE_GROWTH_REMOTE_URL",
  },
];

function remoteEntryFor(appUrl) {
  return new URL("remoteEntry.js", appUrl.endsWith("/") ? appUrl : `${appUrl}/`).href;
}

function extractZephyrUrl(label, output) {
  const urls = [...output.matchAll(/https:\/\/[^\s]+zephyrcloud\.app/g)].map((match) =>
    match[0].replace(/[),.;]+$/, ""),
  );

  const deployedUrl = urls.at(-1);
  if (!deployedUrl) {
    throw new Error(`Could not find a Zephyr deployment URL in the ${label} build output.`);
  }

  return deployedUrl;
}

function runBuild(label, workspace, extraEnv = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn("npm", ["run", "build", "-w", workspace], {
      env: {
        ...process.env,
        ZEPHYR_DEPLOY: "true",
        ...extraEnv,
      },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let output = "";

    child.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      output += text;
      process.stdout.write(text);
    });

    child.stderr.on("data", (chunk) => {
      const text = chunk.toString();
      output += text;
      process.stderr.write(text);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve(output);
        return;
      }

      reject(new Error(`${label} build failed with exit code ${code}.`));
    });
  });
}

const remoteEnv = {};
const deployed = [];

for (const remote of remotes) {
  console.log(`\n[zephyr] Deploying ${remote.label} remote...`);
  const output = await runBuild(remote.label, remote.workspace);
  const appUrl = extractZephyrUrl(remote.label, output);
  const remoteEntryUrl = remoteEntryFor(appUrl);

  remoteEnv[remote.envKey] = remoteEntryUrl;
  deployed.push({ label: remote.label, appUrl, remoteEntryUrl });
}

console.log("\n[zephyr] Deploying shell with remote entries:");
for (const item of deployed) {
  console.log(`- ${item.label}: ${item.remoteEntryUrl}`);
}

const shellOutput = await runBuild("shell", "@chagee/shell", remoteEnv);
const shellUrl = extractZephyrUrl("shell", shellOutput);

console.log("\n[zephyr] Deployment complete");
console.log(`shell: ${shellUrl}`);
for (const item of deployed) {
  console.log(`${item.label}: ${item.appUrl}`);
}
