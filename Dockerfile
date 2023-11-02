FROM node:18-alpine

WORKDIR /app

COPY . .

COPY package.json .

ENV PORT=8000

RUN yarn install

EXPOSE 8000

CMD ["yarn", "dev"]

# "dev": "node --watch --loader ts-node/esm src/server.ts",