# !
> Перед каждй сборкой проекта происходит проверка ESLint, 
> в консоле не должно быть ошибок <code style="color:red">"error"</code> 
> или уведомлений <code style="color:gold">"warning"</code> от ESLint.

### Установка

```bash
# Установка пакетов из package.json 
make setup
```

```bash
# Установка пакетов из package-lock.json 
make ci
```

### Команды

```bash
# Запуск сервера
make server
```

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
