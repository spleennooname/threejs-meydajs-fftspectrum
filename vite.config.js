// vite.config.js

import { defineConfig} from "vite"
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs"

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      https: true
    },
    plugins: [
      esbuildCommonjs(["colormap"])
    ],
    optimizeDeps: {
      include: ["three", "postprocessing", "rxjs", "meyda", "gsap", "tweakpane"]
    },
    build: {
      minify: "esbuild",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          index: "./index.html",
        },
        output: {
          manualChunks: {
            three: ["three", "postprocessing"],
            vendor: ["rxjs", "gsap", "tweakpane", "stats.js"],
            audio: ["meyda", "colormap"]
          }
        }
      }
    }
  }
})
