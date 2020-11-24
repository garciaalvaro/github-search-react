module.exports = {
	plugins: ["@babel/plugin-transform-runtime"],

	presets: [
		[
			"@babel/preset-env",
			// Uses .browserslistrc data
			{ corejs: 3, useBuiltIns: "usage" },
		],

		"@babel/preset-react",
		"@babel/preset-typescript",
	],
};
