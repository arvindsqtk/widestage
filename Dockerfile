FROM node:13.0.1

MAINTAINER Widestage  <widestage.com>

RUN apt-get update  &&  npm install -g bower

WORKDIR /srv/app/

COPY . /srv/app/

RUN npm install

RUN bower install --allow-root --force-latest

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod a+x ./docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
