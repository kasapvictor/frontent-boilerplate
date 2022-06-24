################ Docker commands ################
build:
	docker-compose build

up:
	docker-compose up -d; make bash

down:
	docker-compose down

bash:
	docker exec -it webpack-app zsh || winpty docker exec -it webpack-app zsh
