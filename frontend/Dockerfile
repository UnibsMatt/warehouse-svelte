FROM node:19.5.0-alpine3.17 as builder

COPY . .

RUN npm install && npm run build

FROM node:19.5.0-alpine3.17

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY --from=builder build .

CMD [ "node" , "index.js"]

