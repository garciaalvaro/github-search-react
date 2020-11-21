module.exports = {
	moduleNameMapper: {
		"\\.(css|styl)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
	},

	setupFilesAfterEnv: ["jest-enzyme"],

	testEnvironment: "enzyme",
};
