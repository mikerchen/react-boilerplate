const path = require("path");
const dotenv = require('dotenv');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public'),
	},

	module: {
		rules: [{
			include: path.join(__dirname, 'src'),
			exclude: /node_modules/,
			test: /\.(js|jsx)$/,
			use: {
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-env', '@babel/preset-react', {
					plugins: ['@babel/plugin-transform-runtime']
				}] }
			}
		},
		{
			include: path.join(__dirname, 'client', 'src'),
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		},
        {
			test: /\.s[ac]ss$/i,
			use: [
			  // Creates `style` nodes from JS strings
			  "style-loader",
			  // Translates CSS into CommonJS
			  "css-loader",
			  // Compiles Sass to CSS
			  "sass-loader",
			],
		  },
		  {
			test: /\.css$/i,
			include: [
				path.resolve(__dirname, 'node_modules/react-datepicker/dist')
			],
			use: [
			  // creates `style` nodes from JS strings
			  "style-loader",
			  // Translates CSS into CommonJS
			  "css-loader",
			  // Compiles Sass to CSS
			  "sass-loader",
			],
		  }
	]
	},

  plugins: [
		// new webpack.DefinePlugin({ 'process.env': JSON.stringify(dotenv.config().parsed) })
	]
};

module.exports = config;