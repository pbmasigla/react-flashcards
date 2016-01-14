var webpack = require("webpack");
var path = require("path");
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	devtool: "source-map",
	entry: [
		path.resolve(ROOT_PATH, "./src/client/js/app.js"),
	],
	module: {
		preLoaders: [{
			test: /\.js?$/,
			loaders: ['eslint'],
			include: path.resolve(ROOT_PATH, 'app')
		}],
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel']
		},
		{
			test: /\.scss$/,
			loaders: ['style','css','sass']
		}]
	},
	resolve: {
		extensions: ["", ".js"]
	},
	output: {
		path: __dirname + "/build",
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./build",
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom"
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	]
};
