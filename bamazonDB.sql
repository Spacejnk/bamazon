DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(60) NOT NULL,
    department_name VARCHAR(60) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "clothing", 5.20, 12),("pants", "clothing", 25.00, 21),("socks", "clothing", 2.00, 9),("fork", "kitchen", 2.00, 82),("knife", "kitchen", 2.90, 71),("toothbrush", "bathroom", 2.01, 31),("soap", "bathroom", 1.50, 41),("hose", "outdoor", 15.00, 9),("shovel", "outdoor", 18.00, 13),("saw", "outdoor", 21.00, 12);


