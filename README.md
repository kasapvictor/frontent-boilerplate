# Стартовый набор 
для разработки front-end проектов

    - parcle2
    - post html
    - parcel-namer
    - sharp image
    - autoprefixer
    - babel
    - eslitn
    - prettier
    - jest

---
## Start 

```bash 
# 1. установка

make install
```

```bash 
# 2. запуск веб сервера
# [i] скрипт дополнительно запускает удаление прошлого кэша

make server
```

```bash  
# 3. сборка файлов /dist

make build
```

---

## Parcel 
Manual ParcelJS - https://parceljs.org/getting-started/webapp

### Package.json
>По умолчанию Parcel не выполняет транспиляцию кода. Это означает, что если вы напишете свой код с использованием современных языковых функций, Parcel будет выводить именно это. 
> 
>Вы можете указать браузеры, поддерживаемые вашим приложением, используя `browserslist` поле. Когда это поле объявлено, Parcel соответствующим образом перенесет ваш код, чтобы обеспечить совместимость с вашими поддерживаемыми браузерами.
```json
{
  "browserslist": "> 0.5%, last 2 versions, not dead"
}
```



