import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import svgr from "vite-plugin-svgr";

/// <reference types="vite-plugin-svgr/client" />
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
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
      "~root": fileURLToPath(new URL("./src/", import.meta.url)),
      "~assets": fileURLToPath(new URL("./", import.meta.url)),
      "~enums": fileURLToPath(new URL("./src/enums", import.meta.url)),
      "~layouts": fileURLToPath(
        new URL("src/components/layouts", import.meta.url)
      ),
      "~types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "~fonts": fileURLToPath(new URL("./src/fonts", import.meta.url)),
    },
  },
});
