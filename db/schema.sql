DROP DATABASE IF EXISTS sushi_db;
CREATE DATABASE sushi_db;

USE sushi_db;

CREATE TABLE sushi (
    id int NOT NULL AUTO_INCREMENT,
    sushi_name VARCHAR (255) NOT NULL,
    sushi_jap VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM sushi;