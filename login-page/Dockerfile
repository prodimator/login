# base image
FROM node:10.15.3

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./

# start app
CMD ["npm", "start"]