import * as esbuild from "esbuild";

await esbuild.build({
  allowOverwrite: true,
  entryPoints: ["dist/language-server.js"],
  format: "esm",
  target: "es2022",
  platform: "node",
  minify: true,
  logLevel: "info",
  outfile: "dist/language-server.js",
  banner: {
    js: `
    import { Buffer } from "node:buffer";
    import process from "node:process";
    import path from "node:path";
    import { createRequire } from "node:module";
    delete globalThis.window;
    const __dirname = import.meta.dirname;
    const __filename = import.meta.filename;
    const global = globalThis;
    const require = createRequire(import.meta.url);`,
  },
});
