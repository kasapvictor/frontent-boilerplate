install:
	npm install

server:
	NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write ./src/**/*.scss && npx prettier --write ./src/**/*.js

lint:
	npx eslint --fix ./src/**/*.js

build-prod: pretty lint
	npx webpack --mode production

build-dev:
	npx webpack --mode development

