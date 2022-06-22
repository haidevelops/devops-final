#  Dockerfile for Node Express Backend
# Build react client
FROM node:18

# Create App Directory
# RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

# Install Dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install 

# Copy app source code
COPY controllers controllers 
COPY routes routes
COPY models models
COPY server.js server.js


# Exports
EXPOSE 4000



CMD ["npm","start"]
