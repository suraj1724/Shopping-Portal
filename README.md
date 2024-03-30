## Installation
git clone https://github.com/suraj1724/Shopping-Portal.git
cd shopping-portal
npm install

## PORT=4000/ localhost
DB_URI=mongodb://localhost:27017/shopping_portal

## Start the Server
cd src
node index.js

## API Endpoints
GET /: Retrieve all products.
Endpoint: http://localhost:4000/

DELETE /product/:id: Delete a product by ID.
Endpoint: http://localhost:4000/product/:id

GET /product/:id: Retrieve a product by ID.
Endpoint: http://localhost:4000/product/:id

GET /product/updated-last-24-hours: Retrieve products updated within the last 24 hours.
Endpoint: http://localhost:4000/product/updated-last-24-hours

GET /product/status/:status: Get products by status.
Endpoint: http://localhost:4000/product/status/:status
Example: http://localhost:4000/product/status/pending (pending/completed)

PUT /product/:id: Update a product by ID.
Endpoint: http://localhost:4000/product/:id
Example JSON data:
{
  "title": "Updated Title",
  "description": "Updated Description",
  "status": "updated"
}


POST /product: Create a new product.
Endpoint: http://localhost:4000/product
Example JSON data:
{
  "title": "Mens Cotton Jackets and cloths",
  "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
  "status": "pending"
}



 

## Technologies Used
Node.js
Express
MongoDB