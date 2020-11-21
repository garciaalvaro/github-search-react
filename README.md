![Banner Image](docs/banner.png)

# GitHub Search (React)

This project is a simple app that provides a UI to search GitHub repositories using the [GitHub Search API](https://developer.github.com/v3/search/).

It is a reimplementation of [GitHub Search](https://github.com/garciaalvaro/github-search), built in TypeScript using React and Redux.

- Built in **TypeScript** using **React** and **Redux**
- It provides a server using **Node.js** and **Express** on port 4000
- The CSS is built using **Stylus**
- The **Webpack** bundler transforms the files and transpiles them using Babel, and other loaders and plugins
- Code lint using **eslint** and **prettier** for code format
- Tests are included using **Jest** and **Enzyme**

---

## Getting Started

### Installation

From the root directory inside your terminal run `$ npm install`

### Development

To start Webpack in watch mode and start the development server run `$ npm start`
Once it is ready visit http://localhost:4000 in your browser

### Production

First build the production bundle `$ npm run build`
Once finished, start the production server `$ npm run serve`
To stop the production server run `$ npm run serve:stop`

---

## Tests

To run the provided tests, simply run `$ npm test`

---

## Docker

The project also comes with Docker configuration files, so it can be run using Docker. It uses the production version of the app. First it builds the scripts with Webpack, then it starts the pm2 server.
- First make sure you have Docker installed
- Run the command `$ npm run docker` which will download and install the dependencies and set up the container
- Once finished, it will be available in http://localhost:4000
- To stop the container run the command: `$ npm run docker:stop`
- If the container needs to be built again, run the command `$ npm run docker:recreate`

---

## Screenshots

![Screenshot Image](docs/screenshot.png)

---

## Changelog

#### 1.3.0

- Added CSS Webpack loaders
- Updated npm scripts
- Updated dependencies

#### 1.2.2

- Added docker and docker-stop npm scripts
- Updated results HTML to use ol and li

#### 1.2.1

- Removed unnecessary @babel/plugin-proposal-optional-chaining package
- Fixed types

#### 1.2.0

- Added Docker configuration files. Now the project can be run using Docker

#### 1.1.0

- Added tests using Jest and Enzyme
- Added util functions for unit testing
- Minor bug fixes

#### 1.0.0

- Initial release of functioning app
