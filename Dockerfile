FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y \
	nano \
	mc

COPY package*.json ./

RUN npm install -g npm@8.11.0

RUN export DOCKER_SCAN_SUGGEST=false

COPY . .

EXPOSE 4444

CMD npm install && npm run server