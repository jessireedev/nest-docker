# Base image
FROM node:23-alpine3.20 as base

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY .env ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY src .

COPY tsconfig*.json ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start"]
