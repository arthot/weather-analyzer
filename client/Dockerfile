# RUN DEV
FROM node:alpine
WORKDIR /var/www/client
ADD package*.json ./
RUN ["npm", "i"]
COPY . .
EXPOSE 3003
CMD [ "npm", "run", "start" ]
