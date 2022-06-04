install:
	npm install

server:
	NODE_ENV=development npx webpack serve

rm-dist:
	rm -rf dist

test:
	npm test

pretty:
	npx prettier --write ./src/scss && npx prettier --write ./src/js

lint:
	npx eslint --fix ./src/js

build: rm-dist pretty lint
	NODE_ENV=production npx webpack

.PHONY: test
