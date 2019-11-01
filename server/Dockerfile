FROM node:12.13.0-alpine

WORKDIR /code

RUN npm install -g nodemon@latest

COPY package.json /code/package.json

RUN npm install

COPY . /code

RUN npm run build

CMD ["npm", "run", "start:prod"]