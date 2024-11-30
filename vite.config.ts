import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Geist',
            src: './src/assets/fonts/Geist/*.woff2',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': fileURLToPath(new URL('public/', import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: '/rc-portfolio/',
})
