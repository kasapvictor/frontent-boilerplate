import { resolve } from 'path';
import { defineConfig } from 'vite';
import sharp from 'vite-plugin-vsharp';

import rollupOptions from './rollup.config';

const isDevMode = process.env.NODE_ENV !== 'production';
const vSharp = (devMode) => {
  if (devMode) {
    return '';
  }

  return sharp({
    '.jpg': {
      quality: 35,
    },
    '.jpeg': {
      quality: 35,
    },
    '.png': {
      quality: 45,
      palette: true,
    },
    '.webp': {
      lossless: true,
    },
    '.svg': {},
  });
};

export default defineConfig(() => ({
  base: './',
  root: './src',
  cacheDir: '../.cache',
  server: {
    port: 4444,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  build: {
    emptyOutDir: true,
    minify: !isDevMode,
    outDir: resolve(__dirname, 'dist'),
    sourcemap: isDevMode ? false : 'inline',
    rollupOptions,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    vSharp(isDevMode),
  ],
}));
