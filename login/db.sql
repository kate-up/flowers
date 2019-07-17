SET NAMES UTF8;
DROP DATABASE IF EXISTS flower;
CREATE DATABASE flower CHARSET=UTF8;
USE flower;

/*创建用户信息表flower_user*/
CREATE TABLE flower_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(13),
    email VARCHAR(13)

);
INSERT INTO flower_user VALUES
(NULL,"tom","123456","13610000000","tom@qq.com"),
(NULL,"kitty","123456","13610000000","kitty@qq.com");