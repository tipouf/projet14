import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
    ViteMinifyPlugin(),
  ],
  build: {
    minify: 'terser',
  },
})

