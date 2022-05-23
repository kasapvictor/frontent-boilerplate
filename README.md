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

### Подготовка (Windows)
- Уствновить [Git BASH](https://gitforwindows.org) далее открыть терминал git bash
- Установить make в терминале git bash ```choco install make```

### Установка сборщика

```bash
# Установка пакетов из package.json 
make setup
```
[![asciicast](https://asciinema.org/a/T92rMm35Utec1i1irG8oRqJJN.svg)](https://asciinema.org/a/T92rMm35Utec1i1irG8oRqJJN)

```bash
# Установка пакетов из package-lock.json 
make ci
```
[![asciicast](https://asciinema.org/a/qHtoJs7mIaPt2ZhMype1B9m0k.svg)](https://asciinema.org/a/qHtoJs7mIaPt2ZhMype1B9m0k)

### Команды

```bash
# Запуск сервера
make server
```
[![asciicast](https://asciinema.org/a/yCbIaJb9r58CByfNgmnyPTY1E.svg)](https://asciinema.org/a/yCbIaJb9r58CByfNgmnyPTY1E)

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
make build
```

### Утилиты

```bash
# Запуск линтера. 
# Показывает все ошибки в коде которые надо исправить
make lint
```
