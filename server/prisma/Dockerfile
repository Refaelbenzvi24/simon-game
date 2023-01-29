FROM node:18.12-alpine3.16

WORKDIR /app

RUN npm install -g prisma --unsafe-perm

ADD /server/prisma ./prisma

CMD [ "prisma", "migrate", "dev", "--skip-generate"]
