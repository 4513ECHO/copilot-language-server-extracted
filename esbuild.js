import { build } from "esbuild";

await build({
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
    import { createRequire } from "node:module";
    const __dirname = import.meta.dirname;
    const __filename = import.meta.filename;
    const require = createRequire(import.meta.url);`,
  },
});
