import { defineConfig } from "vite";

export default defineConfig({
  base: "./",

  build: {
    outDir: "dist",
    emptyOutDir: true,

    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 0,

    rolldownOptions: {
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",

        assetFileNames: (assetInfo) => {
          if (
            assetInfo.names &&
            assetInfo.names.some((name) => name.endsWith(".css"))
          ) {
            return "[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
