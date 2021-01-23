### Schema

DROP database if exists burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	availability BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);
