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

lint:
	npx eslint --fix ./src/scripts

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
build-prefix: pretty lint build-prod prefixer

