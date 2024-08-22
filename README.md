# Web Data to Excel

Этот проект извлекает все ссылки из веб-страницы и сохраняет их в Excel-файл.

## Установка

Для работы этого проекта вам понадобятся `Node.js` и `npm`. Установите их, если они еще не установлены.

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/ваш-логин/ваш-репозиторий.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd ваш-репозиторий
    ```

3. Установите зависимости:

    ```bash
    npm install
    ```

## Использование

1. Откройте файл `index.js` и измените переменную `url` на нужный вам URL.

2. Запустите скрипт:

    ```bash
    node index.js
    ```

3. После выполнения скрипта файл `results.xlsx` будет создан в корневой директории проекта с извлеченными ссылками.

## Описание функций

- `fetchData(url)`: Загружает данные с указанного URL.
- `parseData(html)`: Извлекает ссылки из HTML-страницы.
- `saveToExcel(data, fileName)`: Сохраняет ссылки в Excel-файл.

## Примеры

Если URL `https://example.com` содержит ссылки на другие страницы, они будут извлечены и сохранены в `results.xlsx`.

# Подписывайте:
[![Instagram](https://img.shields.io/badge/INSTAGRAM-FOLLOW-red?style=for-the-badge&logo=instagram)](https://instagram.com/cs.mer6)
[![Instagram](https://img.shields.io/badge/TELEGRAM-CHANNEL-red?style=for-the-badge&logo=telegram)](https://t.me/Muhammedov)
<a href="https://youtube.com/@nukotz?si=1Z6uz0wO2NpOeJUY"><img title="YouTube" src="https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=Youtube"></a>
