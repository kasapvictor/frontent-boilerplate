import { resolve } from 'path';

const assetFileNames = ({ name }) => {
  if (/\.css$/i.test(name ?? '')) {
    return 'css/[name][extname]';
  }

  if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? '')) {
    return 'img/[name][extname]';
  }

  if (/\.(svg)$/i.test(name ?? '')) {
    return 'svg/[name][extname]';
  }

  if (/\.(woff(2)?|ttf|eot)$/i.test(name ?? '')) {
    return 'fonts/[name][extname]';
  }

  return '[ext]/[name][extname]';
};

export default {
  input: {
    home: resolve(__dirname, 'src/index.html'),
    about: resolve(__dirname, 'src/page1.html'),
  },
  output: {
    entryFileNames: 'js/[name].js',
    chunkFileNames: 'js/[name].js',
    assetFileNames,
    format: 'esm',
  },
};
