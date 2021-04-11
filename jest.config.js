module.exports = {
	moduleNameMapper: {
		"\\.(css|styl)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	modulePathIgnorePatterns: ["<rootDir>/__tests__/utils/"],
};
