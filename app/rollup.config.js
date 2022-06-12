import { resolve } from 'path';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: [resolve(__dirname, 'src/index.html'), resolve(__dirname, 'src/page1.html')],
  output: {
    entryFileNames: 'index.js',
    chunkFileNames: 'js/[name].js',
    assetFileNames: ({ name }) => {
      if (/\.css$/i.test(name ?? '')) {
        return 'css/styles.css';
      }

      if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? '')) {
        return 'images/[name][extname]';
      }

      if (/\.(svg)$/i.test(name ?? '')) {
        return 'svg/[name][extname]';
      }

      if (/\.(woff(2)?|ttf|eot)$/i.test(name ?? '')) {
        return 'fonts/[name][extname]';
      }

      return '[ext]/[name][extname]';
    },
    format: 'esm', // 'esm' ||'cjs'
  },
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
    }),
  ],
};
