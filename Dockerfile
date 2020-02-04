FROM node:13-alpine

# Create app directory that will be the root directory of our project
RUN mkdir -p /app

# Change working directory, any command from now will run in this directory
WORKDIR /app

# Copy package.json
COPY ./package.json .

# Install packages
RUN npm install

# Copy the other files and folders
COPY . .

# Expose port
EXPOSE 4000

# Run the npm script which will:
# - Build the production scripts with Webpack
# - Start the pm2 server (Docker version)
# @see https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
CMD [ "npm", "run", "start:docker" ]
