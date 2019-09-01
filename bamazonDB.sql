
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT(4) NOT NULL,
    product_name VARCHAR(60) NOT NULL,
    department_name VARCHAR(60) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity);
VALUES (001,"t-shirt", "clothing", 5.20, 12);


INSERT INTO products (product_name, department_name, price, stock_quantity);
VALUES (024, "pants", "clothing", 16.50, 20);

SELECT * FROM products;


