FROM node:13-alpine

WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

EXPOSE 8000
CMD yarn start