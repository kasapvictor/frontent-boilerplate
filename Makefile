################ Docker commands ################
build:
	docker-compose build

up:
	docker-compose up -d; docker exec -it webapp zsh || winpty docker exec -it webapp zsh

down:
	docker-compose down

bash:
	docker exec -it webapp zsh || winpty docker exec -it webapp zsh
