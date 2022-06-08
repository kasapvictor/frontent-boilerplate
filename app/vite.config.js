import { resolve } from 'path';
import { defineConfig } from "vite";

const mode = process.env.NODE_ENV;
// const isDevMode = mode === 'development';

// console.log(process.env);
console.log('MODE:', process.env);
// console.log(import.meta);

export default defineConfig(() => ({
  server: {
    port: 4444,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    },
  },
  root: './src',
  cacheDir: '../.cache',
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        page1: resolve(__dirname, 'src/page1.html'),
        page2: resolve(__dirname, 'src/pages/page2.html')
      },
      // input: ['./src/index.html', './src/page1.html'],
    },
    // minify: isDevMode
    // sourcemap: true
    emptyOutDir: true
  }
}));

// https://youtu.be/L23bAMdgOZA
// https://vitejs.dev/config
