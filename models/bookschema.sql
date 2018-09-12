DROP DATABASE IF EXISTS booklist_db;
CREATE DATABASE booklist_db;
USE booklist_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(300) NOT NULL,
    author_firstname VARCHAR(50) NOT NULL,
    author_lastname VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    rating INT(2) NOT NULL,
    month_read VARCHAR(20) NOT NULL,
    year_read INT(5) NOT NULL,
    reread BOOLEAN NOT NULL,
    notes VARCHAR(1000),
    PRIMARY KEY (id)
);
