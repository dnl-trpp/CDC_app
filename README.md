# CDC_app

## Team Members

The team is composed by:
- Carlo Carugno 
- Daniel Trippa  
- Christian Tedesco 

## Main Idea
CDC shop is a distributed system that handles the management, the payment and the shipment of products: in particular for materials that you can usually find in an hardware store.

## Entities
There are basically three entities in the system:
- ***Merchant***: that handles the products, he can add, remove or modify products in the system.
- ***Customer***: can look for new products, save them if interested, and can also place orders or ask for a refund.
- ***Shipper***: that handles the shipments, he receives the product and takes care of the delivery. At the end he will confirm through his interface whether delivery has taken place or not.

## Components
- ***Warehouse service***: microservice that handles the warehouse of the shop.
- ***Product catalog service***: microservice for products management.
- ***Buy and refund service***: microservice dedicated to the sell and refund of any products.
- ***Shipping service***: microservice for the shipper to take care of shipments
- ***Orders middleware***: publish/subscribe topic based middleware to handle order requests.
- ***Database***: database to store data related to the system.
- ***Product Interface***: interface that allows the communication between the product and the product service
- ***Client Interface***: interface that allows the communication between the client and the “buy and refund” service
- ***Shipper Interface***: interface that allows the communication between the shipper and the shipping service
## Architecture
<div>
   <img src="architecture.png" width=80% style="display:inline-block; margin-right: 2%;"/>
</div>
## Warehouse api documentation

* GET /products

Returns all products filtered by the following optional parameters:

* limit
* orderby
* name

> Example: /products?name=screwdriver&orderby=DESC&limit=5
> Gets the first 5 "screwdriver" ordered by descending price


* POST /products
  
  Adds a products and returns it's newly created id

  Format of json body:
  {
    "name":"Tool",
    "description":"Test",
    "category":"Categoria 10",
    "price":30,
    "stock" : 30,
    "image_url" : "https://test"
 }

* GET /products/[id]

Gets the product with given id

* DELETE /products/[id]

Deletes product with given id
 
