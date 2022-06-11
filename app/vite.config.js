import { resolve } from "path";
import { defineConfig } from "vite";

const isDevMode = process.env.NODE_ENV !== 'production';

export default defineConfig(() => ({
  base: "./",
  root: "./src",
  cacheDir: "../.cache",
  server: {
    port: 4444,
    host: "0.0.0.0",
    watch: {
      usePolling: true
    }
  },
  build: {
    emptyOutDir: true,
    minify: !isDevMode,
    outDir: resolve(__dirname, "dist"),
    sourcemap: isDevMode ? false : 'inline',
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "js/[name].js",
        assetFileNames: ({ name }) => {
          if (/\.css$/i.test(name ?? "")) {
            return "css/styles.css";
          }
          
          if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? "")) {
            return "images/[name][extname]";
          }
          
          if (/\.(svg)$/i.test(name ?? "")) {
            return "svg/[name][extname]";
          }
          
          if (/\.(woff(2)?|ttf|eot)$/i.test(name ?? "")) {
            return "fonts/[name][extname]";
          }
          
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return "[ext]/[name][extname]";
        }
      },
      input: [
        resolve(__dirname, "src/index.html"),
        resolve(__dirname, "src/page1.html")
      ]
    }
  },
  css: {
    devSourcemap: true
  }
}));

// https://vitejs.dev/config
