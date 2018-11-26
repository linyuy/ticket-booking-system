#!sh
service mysql start
mysql << EOF
CREATE DATABASE movie;
use movie
source $1
CREATE USER 'movie_database'@'%' IDENTIFIED BY 'movie_database';
GRANT ALL ON movie.* TO 'movie_database'@'%';
EOF
service mysql stop
cat /var/log/mysql/error.log
