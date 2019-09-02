DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT(10) NOT NULL,
    product_name VARCHAR(60) NOT NULL,
    department_name VARCHAR(60) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (001,"t-shirt", "clothing", 5.20, 12),(031,"pants", "clothing", 25.00, 21),(307,"socks", "clothing", 2.00, 9),(201,"fork", "kitchen", 2.00, 82),(172,"knife", "kitchen", 2.90, 71),(211,"toothbrush", "bathroom", 2.00, 31),(021,"soap", "bathroom", 1.50, 41),(561,"hose", "outdoor", 15.00, 9),(502,"shovel", "outdoor", 18.00, 13),(371,"saw", "outdoor", 21.00, 12);


