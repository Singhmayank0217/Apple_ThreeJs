import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from 'path';

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsr-vp",
    project: "javascript-react"
  })],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  build: {
    sourcemap: true
  }
});
