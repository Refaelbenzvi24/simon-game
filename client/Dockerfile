FROM node:18.12-alpine3.16 AS builder

RUN yarn global add pnpm

WORKDIR /app
COPY pnpm-lock.yaml ./

ADD ./client ./
RUN pnpm install
RUN pnpm run build

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html
