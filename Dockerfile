FROM node:14

WORKDIR /usr/src/index

COPY package*.json ./

RUN npm run install

COPY . .

EXPOSE 3001

CMD [ "node", "index.js" ]