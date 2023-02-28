# создание пользователя
DROP USER if exists 'fileuploaderuser'@'%';
CREATE USER 'fileuploaderuser'@'%' IDENTIFIED with mysql_native_password BY '1234';
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON fileuploader.* TO 'fileuploaderuser'@'%';
FLUSH PRIVILEGES;

# SELECT host, user, password_expired FROM mysql.user; # посмотреть созданных пользователей