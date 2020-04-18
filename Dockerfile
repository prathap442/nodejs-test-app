FROM node:10
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN pwd
RUN npm install
RUN ls
EXPOSE 8080
CMD [ "node", "app.js" ]