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
   container_name: proxy
   image: nginx:1.14
   restart: always
   ports:
   - 80:80
   - 443:443
   volumes:
   - ./nginx/conf.d:/etc/nginx/conf.d
  depends_on:
    - front_ent
  
  front_ent:
   container_name: front-ent
   build: ./front-ent
   volumes:
   - ./www:/www

  mysql:
   container_name: database
   build: ./back-end
   ports:
   - "3306:3306"
   restart: always

  app:
    restart: always
    build: ./back-end
    working_dir: /app
    volumes:
      - ./app:/app
      - ~/.m2:/root/.m2
    expose:
      - "8082"
    command: mvn clean spring-boot:run
    depends_on:
      - mysql

```

