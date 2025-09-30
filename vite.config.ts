import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";
import ui from '@nuxt/ui/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/unApp/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  plugins: [vue(), ui()],
})
