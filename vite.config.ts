import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import svgLoader from "vite-svg-loader"; //TODO: this is for VUE only, use another

/// <reference types="vite-svg-loader" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
  ],
  assetsInclude: ["**/*.ttf", "**/*.svg", "**/*.png", "**/*.jpg"],
  publicDir: "static",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "~components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "~assets": fileURLToPath(new URL("./static", import.meta.url)),
      "~enums": fileURLToPath(new URL("./src/enums", import.meta.url)),
      "~layouts": fileURLToPath(
        new URL("src/components/layouts", import.meta.url)
      ),
      "~types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "~fonts": fileURLToPath(new URL("./src/fonts", import.meta.url)),
    },
  },
});
