FROM node:18.12-alpine3.16

RUN yarn global add pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./

ADD ./server ./
RUN pnpm install

CMD ./node_modules/.bin/ts-node src/index.ts
