install:
	npm install

rm-cache:
	rm -rf .cache

pretty:
	npx prettier --write ./src/scss && npx prettier --write ./src/js

lint:
	npx eslint --fix ./src/js

server: rm-cache
	npx vite

build-dev: rm-cache
	npx tsc && npx vite build --mode development

build-prod: rm-cache pretty lint
	npx tsc && npx vite build
