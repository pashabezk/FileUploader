drop database if exists fileuploader;
create database fileuploader;
use fileuploader;

create table files (
    ddate date, ttime time, number1 real, number2 real, number3 real, number4 real, number5 int,
    constraint pk_files primary key (ddate, ttime));

# пример выполнения запросов
# select * from files;
# replace into files values ("2017.06.23","07:00",1.1162,1.1167,1.1161,1.1163,1128);