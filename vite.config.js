import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.webp', 'logo-text.webp', '/src/assets/general/basreng-lifestyle.webp'],
      manifest: {
        name: 'Nurasa - Camilan Premium',
        short_name: 'Nurasa',
        description: 'Jajanan kering premium Nusantara.',
        theme_color: '#3D2314',
        background_color: '#FAF6F1',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'favicon.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallbackDenylist: [/^\/sitemap\.xml$/, /^\/robots\.txt$/]
      }
    })
  ],
  server: {
    port: 4000,
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('maplibre-gl')) {
              return 'vendor-maplibre';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('lucide-react') || id.includes('@iconify')) {
              return 'vendor-icons';
            }
            return 'vendor'; // all other dependencies
          }
        }
      }
    }
  }
})
