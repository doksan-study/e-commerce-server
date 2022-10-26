# Dockerfile

FROM node:12

# make work directory and copy files
WORKDIR /app
COPY . .

# project dependency install
RUN npm install

RUN npm run build

EXPOSE 3000

CMD node dist/main.js