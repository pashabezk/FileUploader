# FileUploader
Веб-интерфейс для загрузки csv файла в БД MySQL

## Запуск
Для запуска проекта необходима установленная СУБД MySQL, а также два запущенных терминала

#### Конфигурация базы данных
Для конфигурации БД необходимо выполнить следующие шаги:

1) В папке `database` есть файл `create_db.sql`. Необходимо вставить скрипт из него в Вашу БД.
2) Далее необходимо создать пользователя. Для этого воспользуйтесь скриптом из файла `create_user.sql` из той же папки.
> Обратите внимание, что имя пользователя, пароль и название БД должны быть такими же, как в файле `/backend/config.js`

#### Запуск сервера
В качестве сервера выступает Node.js с фреймворком express.

Для запуска сервера необходимо открыть терминал и выполнить следующие шаги:
1) Перейдите из корневой папки в папку `backend`:<br/>
`cd backend`
2) Перед первым запуском необходимо установить необходимые компоненты с помощью команды:<br/>
`npm install`
3) Для запуска сервера используйте команду:<br/>
`npm start`
> Если необходимо запустить сервер в режиме отладки, используйте на третьем шаге команду `npm run dev`. Тогда при изменении исходных файлов сервер будет в режиме реального времени перезапускаться

Если все шаги были выполнены правильно, то сервер должен запуститься по адресу `localhost:5000`

#### Запуск клиента
В качестве клиента выступает приложение, написанное с помощью библиотеки React.

Для запуска клиентской части необходимо открыть **второй** терминал (два терминала должны работать параллельно) и выполнить следующие шаги:
1) Перейдите из корневой папки в папку `frontend`:<br/>
`cd frontend`
2) Перед первым запуском необходимо установить необходимые компоненты с помощью команды:<br/>
`npm install`
3) Для запуска сервера используйте команду:<br/>
`npm start`

Если все шаги были выполнены правильно, то клиент должен запуститься по адресу `localhost:3000`