const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ['index', 'about'];

const entry = (pages) => {
  return pages.reduce((config, page) => {
    config[page] = `./src/js/${page}.ts`;
    return config;
  }, {});
};

const HtmlWebpackPluginPages = (pages = []) => pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      favicon: './src/img/256x256.png',
      template: `./src/${page}.pug`,
      filename: `${page}.html`,
      inject: 'body',
      publicPath: './',
      chunks: [page],
    })
);

module.exports = {
  devtool: 'source-map',

  entry: entry(pages),
  
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  
  // на выходе создает отдельный js файл подключаемых библиотек
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  
  devServer: {
    hot: true,
    port: 9000,
    static: './src',
    watchFiles: ['./src/**/*']
  },
  
  module: {
    rules: [
      // JS
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // TS
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      // STYLES
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // IMAGES
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        }
      },
      // SVG
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: `svg/[name][ext]`
        }
      },
      // FONTS
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: `fonts/[name][ext]`
        }
      },
      //PUG
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  
  plugins:
    [
      new MiniCssExtractPlugin({
        filename: `css/[name].css`
      }),
      ...HtmlWebpackPluginPages(pages)
      // ].concat(['index', 'about'].map(
      // 	(page) =>
      // 	new HtmlWebpackPlugin({
      // 		favicon: './src/img/256x256.png',
      // 		template: `./src/${page}.pug`,
      // 		filename: `${page}.pug`,
      // 		inject: 'body',
      // 		publicPath: './'
      // 	})
      // ))
    ]
};
