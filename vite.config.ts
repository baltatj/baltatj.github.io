import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "~enums": fileURLToPath(new URL("./src/enums", import.meta.url)),
      "~layouts": fileURLToPath(new URL("src/components/layouts", import.meta.url)),
      "~types": fileURLToPath(new URL("./src/types", import.meta.url))
    },
  },
})
