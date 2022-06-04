FROM node

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /home/app

COPY ./app .

RUN apt-get update && apt-get install -y \
	nano \
	mc \
	zsh

RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

RUN npm install -g npm@8.12.1

RUN export DOCKER_SCAN_SUGGEST=false

EXPOSE ${PORT}
