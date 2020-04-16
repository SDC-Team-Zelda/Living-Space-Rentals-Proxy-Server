FROM node:12.14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --update nodejs nodejs-npm
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]