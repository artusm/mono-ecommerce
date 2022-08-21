FROM node:16

RUN apt-get update && apt-get install libvips-dev -y
WORKDIR /opt/
COPY ./ ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm ci
RUN npx nx run api:install

EXPOSE 1337
CMD ["npx", "nx", "run", "api:develop"]
