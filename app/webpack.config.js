const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const mode = process.env.NODE_ENV;
const isDevMode = mode === 'development';

module.exports = {
	mode: mode,
	
	devtool: 'source-map',
	
	entry: {
		index: path.resolve(__dirname, './src/js/index.js'),
	},
	
	output: {
		filename: `js/[name]${isDevMode ? '.[contenthash:6]' : ''}.js`,
		clean: true,
	},
	
	devServer: {
		hot: true,
		port: 9000,
		static: './src',
		watchFiles: ['./src/**/*',],
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
						presets: ['@babel/preset-env'],
					},
				},
			},
			// STYLES
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {publicPath: '../'},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			// IMAGES
			{
				test: /\.(png|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: `img/[name]${isDevMode ? '.[contenthash:6]' : ''}[ext]`,
				},
			},
			// SVG
			{
				test: /\.svg$/i,
				type: 'asset/resource',
				generator: {
					filename: `svg/[name]${isDevMode ? '.[contenthash:6]' : ''}[ext]`,
				},
			},
			// FONTS
			{
				test: /\.(woff(2)?|ttf|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: `fonts/[name]${isDevMode ? '.[contenthash:6]' : ''}[ext]`,
				},
			},
			//PUG
			{
				test: /\.pug$/i,
				loader: 'pug-loader',
				exclude: /(node_modules|bower_components)/
			},
		],
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: `styles/styles${isDevMode ? '.[contenthash:6]' : ''}.css`,
		}),
		new HtmlWebpackPlugin({
			favicon: "./src/img/256x256.png",
			// template: './src/index.pug',
			template: './src/index.html',
			inject: 'body',
		})
	],
};
