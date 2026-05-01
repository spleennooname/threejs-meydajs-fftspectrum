// vite.config.js

import { defineConfig } from "vite"
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs"
import basicSsl from "@vitejs/plugin-basic-ssl"
import { execSync } from "child_process"

const gitHash = (() => {
  try { return execSync("git rev-parse --short HEAD").toString().trim(); }
  catch { return "dev"; }
})();
const buildTime = new Date().toISOString().slice(0, 16).replace("T", " ");

export default defineConfig(({ command, mode }) => {
  return {
    define: {
      __BUILD_VERSION__: JSON.stringify(`${buildTime} · ${gitHash}`),
    },
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
