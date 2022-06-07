install:
	nmp install

rm-cache:
	rm -rf dist

server: rm-cache
	npx vite

build-dev: rm-cache
	npx tsc && npx vite build --minify false

build-prod: rm-cache
	npx tsc && npx vite build
