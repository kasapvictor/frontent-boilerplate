### Подготовка (Windows)
- Уствновить [Git BASH](https://gitforwindows.org) далее открыть терминал git bash
- Установить make в терминале git bash ```choco install make```

# Start

```bash
# билд контейнера, запускать один раз при установке
make build
```
[![asciicast](https://asciinema.org/a/xQ5e8wC0A2GFSVxFqlkR9nqFf.svg)](https://asciinema.org/a/xQ5e8wC0A2GFSVxFqlkR9nqFf)

```bash
# запуск контейнера
make up
```
[![asciicast](https://asciinema.org/a/iiCw5HTDtiik6H4NWKkJiWJ5u.svg)](https://asciinema.org/a/iiCw5HTDtiik6H4NWKkJiWJ5u)

```bash
# остановка контейреа
make down
```

```bash
# терминал контейнера, выйти из терминала - exit
make bash
```
[![asciicast](https://asciinema.org/a/ejQBVQv08k0a7Ngk3LR8UNeI3.svg)](https://asciinema.org/a/ejQBVQv08k0a7Ngk3LR8UNeI3)

----

# !
> Перед каждй сборкой проекта происходит проверка ESLint, 
> в консоле не должно быть ошибок <code style="color:red">"error"</code> 
> или уведомлений <code style="color:gold">"warning"</code> от ESLint.
> 
> _Есть ошибки в коде_
> [![asciicast](https://asciinema.org/a/ZEQntepzVe6q8ydUkE5DV4wTb.svg)](https://asciinema.org/a/ZEQntepzVe6q8ydUkE5DV4wTb)
> 
> _Нет ошибок в коде_
> [![asciicast](https://asciinema.org/a/v9dBV9U7zmkOfJNPksKHLyjhx.svg)](https://asciinema.org/a/v9dBV9U7zmkOfJNPksKHLyjhx)

### Команды Makefile

```bash
# Билд дев версия
make build-dev
```

```bash
# Билд прод версия без автопрефиксов для стилей
make build-prod
```

```bash
# Билд прод версия с автопрефиксами для стилей
make build-prefix
```

### Утилиты

```bash
# Запуск линтера. 
# Показывает все ошибки в коде которые надо исправить
make lint
```

### Ссылки
 - [ParcelJS](https://parceljs.org/getting-started/webapp)
