import { defineConfig } from 'vite';

import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  plugins: [
    eslintPlugin(),
    vue(),
    VitePWA({
      base: '/',
      includeAssets: ['favicon.png'],
      manifest: {
        name: 'V2P2 Starter',
        short_name: 'V2P2',
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
