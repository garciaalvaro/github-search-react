const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;
const DIRECTORY_DIST = path.join(__dirname, "dist");
const DIRECTORY_ASSETS = path.join(__dirname, "assets");

/**
 * Static directories
 */
app.use(express.static(DIRECTORY_DIST));
app.use(express.static(DIRECTORY_ASSETS));

/**
 * Routes
 */
app.get("*", (req, res) => {
	// Send the index.html file when visiting any route.
	res.sendFile(path.join(DIRECTORY_DIST, "index.html"));
});

/**
 * Server port
 */
app.listen(port, () => {
	console.log(`Server started in http://localhost:${port}`);
});
