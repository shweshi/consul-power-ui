FROM node:alpine
WORKDIR /app
ARG CONSUL_URL
ENV CONSUL_URL=$CONSUL_URL
RUN echo CONSUL_URL: $CONSUL_URL
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]