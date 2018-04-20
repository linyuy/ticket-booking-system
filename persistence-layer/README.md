## 持久化层

## 使用
```shell
mysql> CREATE DATABASE movie;
mysql> use movie;
mysql> source sql/init_data.sql;
mysql> CREATE USER 'movie_database'@'%' IDENTIFIED BY 'movie_database';
mysql> GRANT ALL ON movie.* TO 'movie_database'@'%';
```

## 介绍
* user 表：用户表，记录用户的信息，用户名，密码的 MD5，电话，邮箱
* movie 表：记录电影的信息，包括中文名，英文名，电影类型，电影时长，上映日期，电影简介， 电影海报的 URL，参演人员名单
* person 表：记录电影人的信息，通过 type 列区别是导演还是演员，包括名字，照片 URL，type 电 影人的类型（导演/演员）
* cinema 表：订单编号，电影 id、影院 id、场次 id、座位 id screen 表：荧屏 id，语言，价格，房间 id，时间，影院 id，电影名字，座位 id 
* admin 表：id，名字，密码，email，电话号码


## 参考
[SevenDwarfs](https://github.com/SevenDwarfs/DatabaseServer)
