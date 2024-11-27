import html from "bun-plugin-html";

// https://bun.sh/docs/bundler#basic-example
await Bun.build({
  entrypoints: ["./src/index.html", "./src/field.html", "./src/depth.html"],
  outdir: "./dist",
  naming: {
    // default values
    entry: "[dir]/[name].[ext]",
    chunk: "[dir]/[name]-[hash].[ext]",
    asset: "[dir]/[name]-[hash].[ext]",
  },
  plugins: [
    html({
      naming: {
        css: "[dir]/[name]-[hash].[ext]",
      },
    }),
  ],
  splitting: false,
});
