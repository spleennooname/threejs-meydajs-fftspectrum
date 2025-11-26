// vite.config.js

import { defineConfig } from "vite"
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs"
import basicSsl from "@vitejs/plugin-basic-ssl"

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      https: true
    },
    plugins: [
      ...[basicSsl()],
      esbuildCommonjs(["colormap"])
    ],
    build: {
      //minify: "terser",
      chunkSizeWarningLimit: 1000,
      /**  terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }, */
      rollupOptions: {
        input: {
          index: "./index.html",
        },
        output: {
          manualChunks: {
            vendor: ["three","meyda", "rxjs"],
          }
        }
      }
    }
  }
})
