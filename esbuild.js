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
    const _require = createRequire(import.meta.url);
    function require(mod) {
      if (mod !== "tls") {
        return _require(mod);
      }
      const tls = _require("tls");
      if (tls.createSecureContext()?.context?.addCACert) {
        return tls;
      }
      const _createSecureContext = tls.createSecureContext;
      tls.createSecureContext = (arg) => ({
        ..._createSecureContext(arg),
        context: { addCACert: (_key) => {} },
      });
      return tls;
    }`,
  },
});
