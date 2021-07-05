FROM node:16-alpine

RUN apk update

WORKDIR /app

COPY *.json ./
COPY *.js ./

COPY . /app

RUN ls -a

RUN npm install 

CMD [ "npm", "start"]