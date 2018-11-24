# ticket-booking-system
互联网电影票售票系统

### 概述
 - front-end 目录存放前端项目，利用 VUE 框架
 - back-end 目录存放后端项目，利用 Spring 框架
 - persistence-layer 目录存在数据库配置，利用 MySQL 数据库


### 部署
物理架构云上部署 [dock-compose.yml](./docker-compose.yaml) 文件编写与使用(容器编排)如下：
```yaml
version: '3'
services:
  nginx:
    container_name: nginx_container
    image: nginx:1.14
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - static-content:/www
      # - ./www:/www
    depends_on:
      - html
      - app

  html:
    container_name: html_container
    build:
      context: ./front-end
      dockerfile: Dockerfile-local
    volumes:
      - ~/.npm:/root/.npm
      - static-content:/www
      # - ./www:/www

  db:
    container_name: mysql_container
    build:
      context: ./persistence-layer
      dockerfile: Dockerfile-local
    restart: always
    expose:
      - "3306"
    # ports:
      # - "3306:3306"

  app:
    container_name: app_container
    build:
      context: ./back-end
      dockerfile: Dockerfile-local
    restart: always
    volumes:
      - ~/.m2:/root/.m2
    # extra_hosts:
      # - "db:127.0.0.1"
    # ports:
      # - "8082:8082"
    expose:
      - "8082"
    depends_on:
      - db

volumes:
  static-content:
```

