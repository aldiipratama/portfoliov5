FROM node:20-alpine

WORKDIR /app

COPY *.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]