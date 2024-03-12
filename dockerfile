# Use the official Node.js image as base
FROM node:21

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
RUN yarn run build

# Expose port 3002
EXPOSE 3002

# Set the command to serve the Docusaurus site on port 3002
CMD ["yarn", "serve", "--", "--port", "3002"]
