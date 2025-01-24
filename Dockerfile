FROM node:23-alpine3.20 AS base

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY src .

COPY tsconfig*.json ./

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
