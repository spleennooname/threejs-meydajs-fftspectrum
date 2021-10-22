// vite.config.js

import { defineConfig} from 'vite'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      https: true
    },
    plugins: [
      esbuildCommonjs(['colormap'])
    ],
    build: {
      // cssCodeSplit: true,
      minify: 'esbuild',
      chunkSizeWarningLimit:1000,
      rollupOptions:{
        input: {
          index  : './index.html',
          /* index2 : './index2.html' */
        },
        output:{
          manualChunks: {
            three: [ 'three' ],
            meyda: [ 'meyda' ]
          }
        }
      }
    }
  }
})
