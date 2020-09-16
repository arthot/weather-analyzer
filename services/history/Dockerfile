FROM node:14

ENV PORT "8000"

EXPOSE 8000
WORKDIR /srv

ADD package.json /srv/package.json
ADD package-lock.json /srv/package-lock.json
RUN npm ci

ADD . /srv/

ENTRYPOINT ["npm", "run"]
CMD ["start"]
