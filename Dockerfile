FROM node:0.12.15-wheezy
MAINTAINER Srihari Rao <harirao3@gmail.com>

ADD ./ /monimus-botkit/
WORKDIR /monimus-botkit

ENV SLACK_TOKEN xoxb-55111929200-cHYiY8KrEy5EVFZSHMgzI0Ie

RUN apt-get update && apt-get install -y
RUN npm install 


EXPOSE 9000

CMD ["node","index"]
