setup:
	npm install

ci:
	npm ci

rm-cache:
	npx rimraf ./.parcel-cache

rm-dist:
	npx rimraf ./dist

rm-development:
	npx rimraf ./development

lint:
	npx eslint --fix ./src/scripts

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
build-prod: rm-cache rm-dist pretty lint
	npx parcel build --no-cache --public-url ./

# WITH AUTOPREFIXER
build: pretty lint build-prod prefixer

