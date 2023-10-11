# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.17.1

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production


WORKDIR /app

USER node

COPY . .

EXPOSE 8000

CMD yarn start
