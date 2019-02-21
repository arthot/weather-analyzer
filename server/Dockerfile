# RUN DEV
FROM node:alpine
WORKDIR /var/www/server
ADD package*.json ./
RUN ["npm", "i"]
COPY . .
ENV HOST='0.0.0.0'
EXPOSE 3003
CMD [ "npm", "run", "start" ]
