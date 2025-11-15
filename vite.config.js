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
    build: {
      minify: "terser",
      chunkSizeWarningLimit:1000,
      rollupOptions:{
        input: {
          index  : "./index.html",
        },
        output:{
          manualChunks: {
            three: [ "three" ],
            meyda: [ "meyda" ],
            rxjs: [ "rxjs" ]
          }
        }
      }
    }
  }
})
