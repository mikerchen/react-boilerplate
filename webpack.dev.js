const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: path.resolve('.env.dev')})

const config = {
	mode: 'development',
	devServer: {
		hot: true,
		port: 3001, 
		compress: true,
		historyApiFallback: true,
		client: { overlay: true },
	},
	
  entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public'),
	},

	module: {
		rules: [{
			include: /src/,
			exclude: /node_modules/,
			test: /\.(js|jsx)$/,
			use: {
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
			}
		}]
	},

  plugins: [
		new webpack.DefinePlugin({ 'process.env': JSON.stringify(dotenv.parsed) })
	]
};

module.exports = config;