install:
	nmp install

rm-cache:
	rm -rf .cache

server: rm-cache
	npx vite

build-dev: rm-cache
	npx tsc && npx vite build --mode development

build-prod: rm-cache
	npx tsc && npx vite build
