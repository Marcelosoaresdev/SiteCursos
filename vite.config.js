import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Configurações para converter PNG para WebP
      png: {
        webp: {
          quality: 80,
        },
      },
      // Configurações para converter JPG/JPEG para WebP
      jpeg: {
        webp: {
          quality: 80,
        },
      },
      jpg: {
        webp: {
          quality: 80,
        },
      },
    }),
  ],
});