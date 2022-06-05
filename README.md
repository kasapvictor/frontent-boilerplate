### Подготовка (Windows)
1. Уствновить [Docker](https://www.docker.com/get-started/)
2. Уствновить [Git BASH](https://gitforwindows.org) далее открыть терминал git bash 
3. Установить make в терминале git bash выполнить команду ```choco install make```
4. Открыть папку с проектом в терминале git bash



## Создание образа и контейнера

### Образ
```bash
make build

# или выполнить команду 
# docker-compose build
```
[![asciicast](https://asciinema.org/a/8ceLqSVqB4VvB68hlivoOQAPh.svg)](https://asciinema.org/a/8ceLqSVqB4VvB68hlivoOQAPh)

### Запуск контейнера на базе образа
После выполнения команды терминал продолжит работать уже внутри созданного контейнера
```bash
make up

# или выполнить команду
# docker-compose up -d; docker exec -it webapp zsh || winpty docker exec -it webapp zsh
```
[![asciicast](https://asciinema.org/a/PhFBstDo8t0IQpwxMxghcqlht.svg)](https://asciinema.org/a/PhFBstDo8t0IQpwxMxghcqlht)

### Внимание!
Если закрылся терминал контейнера и нужно в него сново попасть, то выполнить эту команду
```bash
# для MacOS или Linux
docker exec -it webapp zsh

# для Windows
winpty docker exec -it webapp zsh
```

### Выключить контейнер
Выполняется в терминале машины, не контейнера
```bash
make down

# или выполнить команду
# docker-compose down
```

----

## Команды для работы со сборщиком

### 1. Установка пакетов
Выполняется внутри терминала контейнера
```bash
make install

# или выполнить команду
# npm install
```

### 2. Запуск сервера
Выполняется внутри терминала контейнера
```bash
make server

# или выполнить команду
# npx parcel --port 4444 --dist-dir development
# остановка сервера - Ctr+C
```

### 3. Сборка билда без оптимизаций и autoprefixer
Выполняется внутри терминала контейнера
```bash
make build-dev

# или выполнить команду
# npm run clear && npx parcel build --no-cache --no-optimize --no-source-maps --public-url ./
```

### 4. Сборка билда без использования autoprefixer
Выполняется внутри терминала контейнера
> При сборке проверяются все ошибки ESLint, если есть ошибки, то сборка не произойдет
```bash
make build-prod

# или выполнить команду
# npm run clear && npx prettier --write ./src/scss && npx prettier --write ./src/scripts && npx eslint --fix ./src/scripts && npx parcel build --no-cache --public-url ./
```

Пример:
```css
.example {
    background: linear-gradient(#fff, #000);
    display: -ms-grid;
    display: grid;
    -o-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
    user-select: none
}
```

### 5. Сборка билда c использованием autoprefixer
> При сборке проверяются все ошибки ESLint, если есть ошибки, то сборка не произойдет
Выполняется внутри терминала контейнера
```bash
make build-prefix

# или выполнить команду
# npm run clear && npx prettier --write ./src/scss && npx prettier --write ./src/scripts && npx eslint --fix ./src/scripts && npx parcel build --no-cache --public-url ./ && npm run prefixer
```

Пример:
```css
.example {
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#000));
    background: -o-linear-gradient(#fff, #000);
    background: linear-gradient(#fff, #000);
    display: -ms-grid;
    display: grid;
    -o-transition: all .5s;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}
```

### Утилиты
Запуск линтера. Показывает все ошибки в коде которые надо исправить
```bash
make dev-lint

# или выполнить команду
# npx eslint --fix ./src/scripts
```

# !
> Перед каждй сборкой проекта происходит проверка ESLint,
> в консоле не должно быть ошибок <code style="color:red">"error"</code>
> или уведомлений <code style="color:gold">"warning"</code> от ESLint.

```bash
# Пример ошибок если в продакшен коде есть console.log(...);
 
/home/app/src/scripts/index.ts
10:1  error  Unexpected console statement  no-console

/home/app/src/scripts/pages/home.ts
5:5  error  Unexpected console statement  no-console
7:5  error  Unexpected console statement  no-console
18:3  error  Unexpected console statement  no-console
21:3  error  Unexpected console statement  no-console
24:3  error  Unexpected console statement  no-console

✖ 6 problems (6 errors, 0 warnings)

make: *** [Makefile:18: lint] Error 1
```
> [![asciicast](https://asciinema.org/a/ZEQntepzVe6q8ydUkE5DV4wTb.svg)](https://asciinema.org/a/ZEQntepzVe6q8ydUkE5DV4wTb)


> Если нет ошибок в коде
> 
> [![asciicast](https://asciinema.org/a/v9dBV9U7zmkOfJNPksKHLyjhx.svg)](https://asciinema.org/a/v9dBV9U7zmkOfJNPksKHLyjhx)

### Ссылки
- [ParcelJS](https://parceljs.org/getting-started/webapp)
- [Docker](https://www.docker.com/get-started/)
- [Git BASH](https://gitforwindows.org)

---
