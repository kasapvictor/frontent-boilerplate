FROM node:18

WORKDIR /home/app

RUN apt-get update && apt-get install -y \
	nano \
	mc \
	zsh

RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

RUN npm install -g npm@8.11.0

RUN export DOCKER_SCAN_SUGGEST=false

COPY ./app .

EXPOSE ${PORT}
