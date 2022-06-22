
# Build react client
FROM node:18

# Working directory be app
WORKDIR /usr/src/frontend

COPY package.json package.json
COPY package-lock.json package-lock.json

###  Installing dependencies

RUN npm install 

# copy local files to app folder
COPY src src
COPY public public

EXPOSE 3000

CMD ["npm","start"]