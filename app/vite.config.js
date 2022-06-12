import { resolve } from 'path';
import { defineConfig } from 'vite';
import vsharp from 'vite-plugin-vsharp';

import rollupConfig from './rollup.config';

const isDevMode = process.env.NODE_ENV !== 'production';

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
    rollupOptions: rollupConfig,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    // compress({
    //   exclude: ['js', 'ts', 'json', 'tsx', 'jsx', 'json', 'css', 'scss'],
    //   extensions: ['jpg', 'jpeg', 'png', 'svg'],
    //   svgo: {
    //     removeViewBox: false,
    //     removeDimensions: true,
    //   },
    //   pngquant: {
    //     speed: 4,
    //     quality: [0.3, 0.5],
    //   },
    //   quality: 5,
    //   verbose: false,
    // }),
    vsharp({
      unlimited: true,
      includePublic: [],
      excludePublic: [],
      exclude: [],
      '.jpg': {
        quality: 45,
      },
      '.jpeg': {
        quality: 45,
      },
      '.png': {
        quality: 45,
        palette: true,
      },
      '.webp': {
        lossless: true,
      },
    }),
  ],
}));

// https://vitejs.dev/config
