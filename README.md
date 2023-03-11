# CDC_app

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
 