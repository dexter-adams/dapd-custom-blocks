const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
	entry: {
		main: [ './src/index.js', './src/style.scss' ],
		editor: [ './src/editor.js', './src/editor.scss' ],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss$|css/,
				exclude: /node_modules/,
				use: [
					{
						// fallback to style-loader in development
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/images', to: 'images' },
			],
		}),
	],
};
