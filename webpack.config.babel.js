import { name, version } from "./package.json";
import { BannerPlugin } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import nib from "nib";
import path from "path";

export default {
	entry: path.join(__dirname, "src/index.ts"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			// TypeScript/JavaScript files
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"]
				}
			},
			// Stylus/CSS files
			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "stylus-loader",
						options: {
							use: nib(),
							import: "~nib/index.styl"
						}
					}
				]
			}
		]
	},
	plugins: [
		// Extract CSS into its own file
		new MiniCssExtractPlugin({
			filename: "bundle.css"
		}),
		// Add a banner with the project name and version
		new BannerPlugin({
			banner: `${name} | ${version}`,
			include: ["bundle.js", "bundle.css"]
		}),
		// This plugin will include the webpack produced script and style
		// in the HTML file. It adds a hash to the url, which ensures the
		// client downloads the latest version, in case there is a cached one.
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
			hash: true
		})
	],
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
	}
};
