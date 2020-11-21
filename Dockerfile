FROM node:15
ENV NODE_ENV=production

# Change working directory, any command from now will run in this directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install packages
RUN npm install --production

# Copy the other files and folders
COPY . .

# Expose port
EXPOSE 4000

# Run the npm script which will:
# - Build the production scripts with Webpack
# - Start the pm2 server (Docker version)
# @see https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
CMD npm run docker:start
