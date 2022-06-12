import { resolve } from 'path';
import { defineConfig } from 'vite';
import rollupConfig from "./rollup.config";

const isDevMode = process.env.NODE_ENV !== 'production';

export default defineConfig(() => ({
  base: './',
  root: './src',
  cacheDir: '../.cache',
  server: {
    port: 4444,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
  build: {
    emptyOutDir: true,
    minify: !isDevMode,
    outDir: resolve(__dirname, 'dist'),
    sourcemap: isDevMode ? false : 'inline',
    rollupOptions: rollupConfig
  },
  css: {
    devSourcemap: true
  },
}));

// https://vitejs.dev/config
