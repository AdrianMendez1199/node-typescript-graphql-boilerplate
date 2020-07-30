FROM node:lts-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf dist 

RUN yarn install

COPY . .

CMD ["yarn", "prod"]