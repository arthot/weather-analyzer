# RUN DEV
FROM node:14
WORKDIR /var/www/client
ADD package*.json ./
RUN ["npm", "i"]
COPY . .
EXPOSE 3003
CMD [ "npm", "run", "start" ]
