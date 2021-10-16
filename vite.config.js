// vite.config.js

import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      https: true
    },
    plugins: [],
    build: {
      // cssCodeSplit: true,
      minify: 'esbuild',
      chunkSizeWarningLimit:1000,
      rollupOptions:{
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
