FROM node:alpine
WORKDIR /app

COPY ./start.sh ./

ARG CONSUL_URL
ENV CONSUL_URL=$CONSUL_URL
RUN echo CONSUL_URL: $CONSUL_URL

RUN mkdir proxy
COPY ./proxy/package.json ./proxy
COPY ./proxy/package-lock.json ./proxy
COPY ./proxy/ ./proxy

RUN mkdir ui
COPY ./ui/package.json ./ui
COPY ./ui/package-lock.json ./ui
COPY ./ui ./ui

EXPOSE 3000 3001

CMD ["sh", "start.sh"]
