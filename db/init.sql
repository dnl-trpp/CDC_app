CREATE DATABASE IF NOT EXISTS CDC;
USE CDC;

DROP TABLE IF EXISTS order_items;
CREATE TABLE order_items (
  `id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_id_idx` (`product_id`)
);

INSERT INTO order_items(id, order_id, product_id, quantity, price) VALUES (1,1,2,2,40),(2,1,4,1,200),(3,2,1,5,50),(4,2,3,3,45),(5,3,5,4,80),(6,4,2,1,20),(7,4,4,2,100),(8,5,1,10,100),(9,5,3,5,75),(10,5,5,2,40),(11,6,2,3,30),(12,6,4,4,160),(13,7,1,8,80),(14,7,3,2,30),(15,8,5,1,20),(16,8,2,2,20),(17,9,2,4,40),(18,9,3,3,45),(19,10,1,3,30),(20,10,3,1,15);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  `id` int NOT NULL,
  `date` text,
  `customer_name` text,
  `customer_email` text,
  `customer_phone` text,
  `total_price` double DEFAULT NULL,
  `paid` int DEFAULT NULL,
  `status` text,
  PRIMARY KEY (`id`)
);

INSERT INTO orders(id, date, customer_name, customer_email, customer_phone, total_price, paid, status) VALUES (1,'2022-01-01','John Doe','johndoe@gmail.com','555-1234',100.5,1,'delivered'),(2,'2022-01-02','Jane Smith','janesmith@gmail.com','555-5678',75.25,1,'shipped'),(3,'2022-01-03','Bob Johnson','bobjohnson@yahoo.com','555-2468',50,0,'pending'),(4,'2022-01-04','Alice Lee','alicelee@hotmail.com','555-7890',80.75,1,'shipped'),(5,'2022-01-05','Mark Brown','markbrown@gmail.com','555-1357',110,1,'delivered'),(6,'2022-01-06','Susan Kim','susankim@yahoo.com','555-5793',25,1,'delivered'),(7,'2022-01-07','David Chen','davidchen@hotmail.com','555-2468',60.5,0,'pending'),(8,'2022-01-08','Mary Davis','marydavis@gmail.com','555-7890',45.75,0,'pending'),(9,'2022-01-09','James Lee','jameslee@yahoo.com','555-1234',90.25,1,'shipped'),(10,'2022-01-10','Kelly Smith','kellysmith@hotmail.com','555-5678',75,1,'delivered'),(11,'2022-01-11','Michael Brown','michaelbrown@gmail.com','555-1357',60.5,1,'shipped'),(12,'2022-01-12','Lisa Kim','lisakim@yahoo.com','555-5793',40,0,'pending'),(13,'2022-01-13','Robert Chen','robertchen@hotmail.com','555-2468',85.75,0,'pending'),(14,'2022-01-14','Samantha Davis','samanthadavis@gmail.com','555-7890',120.25,1,'delivered'),(15,'2022-01-15','William Lee','williamlee@yahoo.com','555-1234',95,1,'delivered'),(16,'2022-01-16','Emily Smith','emilysmith@hotmail.com','555-5678',70.5,1,'shipped'),(17,'2022-01-17','Christopher Brown','christopherbrown@gmail.com','555-1357',55.25,0,'pending'),(18,'2022-01-18','Natalie Kim','nataliekim@yahoo.com','555-5793',30,1,'delivered');

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `description` text,
  `category` text,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `image_url` text,
  PRIMARY KEY (`id`)
);

INSERT INTO products(id, name, description, category, price, stock, image_url) VALUES (1,'Hammer','\"Heavy-duty hammer for construction use.\"','Hand Tools',20,50,'https://example.com/hammer.jpg'),(2,'Screwdriver','\"Set of 4 screwdrivers for various types of screws.\"','Hand Tools',15,30,'https://example.com/screwdriver.jpg'),(3,'Drill','\"Powerful drill for drilling through metal and wood.\"','Power Tools',100,10,'https://example.com/drill.jpg'),(4,'Safety Vest','\"High-visibility safety vest for construction workers.\"','Safety Equipment',25,100,'https://example.com/vest.jpg'),(5,'Welding Mask','\"Protective mask for welding operations.\"','Safety Equipment',50,20,'https://example.com/mask.jpg'),(6,'Toolbox','\"Sturdy toolbox for carrying tools.\"','Tool Storage',30,5,'https://example.com/toolbox.jpg'),(7,'Pliers','\"Set of 3 pliers for various uses.\"','Hand Tools',18,25,'https://example.com/pliers.jpg'),(8,'Saw','\"Circular saw for cutting wood and metal.\"','Power Tools',120,8,'https://example.com/saw.jpg'),(9,'Hard Hat','\"Protective hard hat for construction workers.\"','Safety Equipment',20,50,'https://example.com/hardhat.jpg'),(10,'Screw Set','\"Set of 200 screws of various sizes.\"','Hardware',10,100,'https://example.com/screws.jpg'),(11,'Power Strip','\"Power strip with 6 outlets for multiple devices.\"','Electrical',25,15,'https://example.com/powerstrip.jpg'),(12,'Tape Measure','\"25-foot tape measure for accurate measurements.\"','Hand Tools',12,40,'https://example.com/tapemeasure.jpg'),(13,'Paint Brush','\"Set of 4 paint brushes for different paint types.\"','Painting Supplies',18,20,'https://example.com/paintbrushes.jpg'),(14,'Sander','\"Electric sander for smoothing surfaces.\"','Power Tools',80,12,'https://example.com/sander.jpg'),(15,'Level','\"48-inch level for precise leveling.\"','Hand Tools',25,30,'https://example.com/level.jpg'),(16,'Router','\"Powerful router for shaping wood and metal.\"','Power Tools',150,6,'https://example.com/router.jpg'),(17,'Light Bulbs','\"Set of 10 LED light bulbs for energy efficiency.\"','Electrical',20,25,'https://example.com/lightbulbs.jpg'),(18,'Chainsaw','\"Gas-powered chainsaw for cutting trees and wood.\"','Power Tools',250,5,'https://example.com/chainsaw.jpg'),(19,'Extension Cord','\"25-foot extension cord for powering devices further away.\"','Electrical',15,20,'https://example.com/extensioncord.jpg'),(20,'Gloves','\"Set of 5 work gloves for hand protection.\"','Safety Equipment',30,15,'https://example.com/gloves.jpg');


DROP TABLE IF EXISTS purchase_items;
CREATE TABLE purchase_items (
  `id` int NOT NULL,
  `purchase_id` int DEFAULT NULL,
  `prod_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_id_idx` (`purchase_id`),
  KEY `product_id_idx` (`prod_id`)
);

INSERT INTO purchase_items(id, purchase_id, prod_id, quantity, price) VALUES (1,1,1,100,10),(2,1,2,50,20),(3,1,3,25,30),(4,2,4,100,8),(5,2,5,75,12),(6,3,6,50,18),(7,3,7,100,5),(8,4,8,200,7.5),(9,4,9,150,10),(10,4,10,100,15),(11,5,5,50,10),(12,5,2,25,20),(13,6,3,10,25),(14,6,4,20,15),(15,7,1,5,50),(16,8,8,150,9),(17,9,10,200,12.5),(18,10,6,100,20),(19,10,9,75,11),(20,10,3,30,28);

DROP TABLE IF EXISTS purchases;
CREATE TABLE purchases (
  `id` int NOT NULL,
  `date` text,
  `supplier_id` int DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_id_idx` (`id`),
  KEY `supplier_id_idx1` (`supplier_id`)
);

INSERT INTO purchases(id, date, supplier_id, total_price) VALUES (1,'2022-01-05',2,1500),(2,'2022-02-10',7,800),(3,'2022-03-15',4,1200),(4,'2022-04-20',8,1600),(5,'2022-05-25',1,2500),(6,'2022-06-30',3,1000),(7,'2022-07-05',9,750),(8,'2022-08-10',6,900),(9,'2022-09-15',10,2000),(10,'2022-10-20',5,500),(11,'2022-11-25',4,1200),(12,'2022-12-30',2,1000),(13,'2023-01-05',3,600),(14,'2023-02-10',1,3000),(15,'2023-03-15',6,800),(16,'2023-04-20',9,1000),(17,'2023-05-25',10,1500),(18,'2023-06-30',5,400),(19,'2023-07-05',7,900),(20,'2023-08-10',8,1200);

DROP TABLE IF EXISTS suppliers;
CREATE TABLE suppliers (
  `id` int NOT NULL,
  `name` text,
  `address` text,
  `email` text,
  `phone` text,
  PRIMARY KEY (`id`)
);

INSERT INTO suppliers(id, name, address, email, phone) VALUES (1,'Acme Hardware','123 Main St','acme@example.com','555-1234'),(2,'Global Tools','456 Center St','globaltools@example.com','555-5678'),(3,'Smith Industrial','789 Oak Ave','smithindustrial@example.com','555-9012'),(4,'Big Supplies Inc','555 1st St','bigsupplies@example.com','555-3456'),(5,'Mega Builders','888 Elm St','megabuilders@example.com','555-7890'),(6,'Precision Tools','444 Park Ave','precisiontools@example.com','555-2345'),(7,'Superior Supply Co','777 Maple St','superiorsupply@example.com','555-6789'),(8,'Allied Hardware','222 Pine St','alliedhardware@example.com','555-0123'),(9,'Central Tools','333 Oak St','centraltools@example.com','555-4567'),(10,'High Quality Equipment','999 Broad St','hqequipment@example.com','555-8901'),(11,'Global Supplies Inc','333 2nd St','globalsupplies@example.com','555-2345'),(12,'Quality Tools','444 Elm St','qualitytools@example.com','555-6789'),(13,'United Industrial','555 Maple Ave','unitedindustrial@example.com','555-0123'),(14,'Super Tools','666 Park Ave','supertools@example.com','555-4567'),(15,'Great Supplies Co','777 Oak St','greatsupplies@example.com','555-8901'),(16,'Pacific Tools','888 Broad St','pacifictools@example.com','555-2345'),(17,'Industrial Supply Co','999 Elm St','industrialsupply@example.com','555-6789'),(18,'Mighty Tools','111 Maple St','mightytools@example.com','555-0123'),(19,'Top Quality Supplies','222 Pine Ave','topqualitysupplies@example.com','555-4567'),(20,'Quality Equipment Inc','333 Oak St','qualityequipment@example.com','555-8901');