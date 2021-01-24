### Schema

DROP database if exists burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	availability BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);
