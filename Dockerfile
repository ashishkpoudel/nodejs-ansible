FROM node:16.3.0-alpine3.11 as base

RUN apk add --no-cache bash curl

WORKDIR /var/www

FROM base as production

COPY package.json package-lock.json ./

RUN npm install

COPY ./ ./

ENV NODE_ENV "production"

RUN npm prune --production

CMD ["npm", "run", "start"]

