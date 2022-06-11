// vite.config.js

import { defineConfig} from "vite"
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs"

import react from "@vitejs/plugin-react"

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      https: true
    },
    plugins: [
      esbuildCommonjs(["colormap"]),
      react({
        //jsxRuntime: "classic",
        include: "src/components/**/*.jsx"
      })
    ],
    build: {
      // cssCodeSplit: true,
      minify: "esbuild",
      chunkSizeWarningLimit:1000,
      rollupOptions:{
        input: {
          index  : "./index.html",
        },
        /* output:{
          manualChunks: {
            three: [ "three" ],
            meyda: [ "meyda" ]
          }
        } */
      }
    }
  }
})
