install:
	npm ci

rm-cache:
	rm -rf ./.parcel-cache

rm-dist:
	rm -rf ./dist

lint:
	npx eslint --fix ./src/scripts

pretty:
	npx prettier --write ./src/scss && npx prettier --write ./src/scripts

test:
	npx jest

test-coverage:
	npx jest --coverage --coverageProvider=v8

server: rm-cache rm-dist
	npx parcel src/*.html --dist-dir dist/ --port 1234 --open --target default

build-dev: rm-dist
	npx parcel build src/*.html --dist-dir dist/ --no-optimize --no-cache --public-url ./

build-prod: rm-dist
	npx parcel build src/*.html --dist-dir dist/ --no-cache --public-url ./


