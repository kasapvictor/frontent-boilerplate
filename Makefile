# установка
install:
	npm ci

# удаление папки кэша
rm-cache:
	rm -rf ./.parcel-cache

# очищает папку перед сборкой
rm-dist:
	rm -rf ./dist && NODE_ENV=production

# проверка ошибок + исправление
lint:
	npx eslint --fix ./src/scripts

# исправление отступов и переносов
pretty:
	npx prettier --write ./src/scss && npx prettier --write ./src/scripts

test: # тест скрипта
	npx jest

test-coverage: # покрытие тестами
	npx jest -- --coverage --coverageProvider=v8

# запуск веб сервера
# npx parcel src/index*.html --open
server: rm-cache rm-dist
	npx parcel src/*.html --dist-dir dist/ --port 1234 --open --target default

# сборка проекта в папку prod
# перед сборкой папка prod очищается
build: rm-dist
	npx parcel build src/*.html --dist-dir dist/ --no-cache --public-url ./

# сборка проекта в папку prod
# файлы проекта не сжимаются
build-no-minify: rm-dist
	npx parcel build src/*.html --dist-dir dist/ --no-optimize --no-cache --public-url ./
