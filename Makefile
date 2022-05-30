################ Docker commands ################
build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

bash:
	docker exec -it webapp bash

dev-build-dev:
	docker exec -it webapp sh -c 'make build-dev'

dev-build-prod:
	docker exec -it webapp sh -c 'make build-prod'

dev-build-prefix:
	docker exec -it webapp sh -c 'make build-prefix'

dev-lint:
	docker exec -it webapp sh -c 'npx eslint --fix ./src/scripts'

################ NPM commands ################
setup:
	npm install

rm-cache:
	npx rimraf ./.parcel-cache

rm-dist:
	npx rimraf ./dist

rm-development:
	npx rimraf ./development

pretty:
	npx prettier --write ./src/scss && npx prettier --write ./src/scripts

prefixer:
	npx postcss ./dist/css/*.css -p -d ./dist/css -m

# WEB
server: rm-cache rm-development
	npx parcel --port 4444 --dist-dir development

# NO AUTOPREFIXER NO MINIFY
build-dev: rm-cache rm-dist
	npx parcel build --no-cache --no-optimize --no-source-maps --public-url ./

# NO AUTOPREFIXER
build-prod: rm-cache rm-dist pretty dev-lint
	npx parcel build --no-cache --public-url ./

# WITH AUTOPREFIXER
build-prefix: pretty dev-lint build-prod prefixer

