const { name, version, license } = require("./package.json");
const { BannerPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const path = require("path");

module.exports = {
	entry: path.join(__dirname, "src/entry.ts"),

	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},

	module: {
		rules: [
			// TypeScript/JavaScript files
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"],
				},
			},

			// Stylus/CSS files
			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,

					"css-loader",

					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: () => [
									postcssPresetEnv({
										autoprefixer: { grid: true },
									}),
								],
							},
						},
					},

					"stylus-loader",
				],
			},
		],
	},

	plugins: [
		// Extract CSS into its own file
		new MiniCssExtractPlugin({
			filename: "bundle.css",
		}),

		// Add a banner with the project name and version
		new BannerPlugin({
			banner: `${name} | ${version} | ${license}`,
			include: ["bundle.js", "bundle.css"],
		}),

		// This plugin will include the webpack produced script and style
		// in the HTML file. It adds a hash to the url, which ensures the
		// client downloads the latest version, in case there is a cached one.
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
			hash: true,
		}),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),

			// As we are using a custom optimization, making use of
			// CssMinimizerPlugin, we also need to specify TerserPlugin
			new TerserPlugin({ extractComments: false }),
		],
	},
};
