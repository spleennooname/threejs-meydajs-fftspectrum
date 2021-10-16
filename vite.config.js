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
      minify: 'esbuild'
    }
  }
})
