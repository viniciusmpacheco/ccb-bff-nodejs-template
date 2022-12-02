FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 30001

CMD [ "node", "server.js" ]
