import { defineConfig } from 'vite';
import path from 'path';

import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src')
      }
    ]
  },
  plugins: [
    eslintPlugin(),
    vue(),
    VitePWA({
      base: '/',
      includeAssets: ['favicon.png'],
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        name: 'V2P2 Starter',
        short_name: 'V2P2',
        background_color: '#acafb6',
        theme_color: '#acafb6',
        icons: [
          {
            src: '192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
