# REST API for CRUD app

REST API for Products List app

- Built with Node.js and Express
- Javascript
- REST API 

## Prerequisites

- [Git](https://git-scm.com/downloads)
-  [Node.js and npm](https://nodejs.org)

## Express Router and Routes

| Route                       | HTTP Verb | Description              |
| ----------------------------| --------- | ------------------------ |
| /product/healthcheck        | GET       | Test for API healthcheck |
| /product/                   | GET       | Get list of all products |
| /product/createProduct      | POST      | Creates a new product    |
| /product/updateProduct/:id  | PUT       | Updates a product        |
| /product//deleteProduct/:id | DELETE    | Deletes a product        |


### Basic example **Create Product** `/product/createProduct  `:

Request Body:
```json
{
  "product_name": "sabanas",
  "color": "blanco",
  "category": "home",
  "price": "100",
}
```

Response:

```json
{
    "product_name": "sabanas",
    "color": "blanco",
    "category": "home",
    "price": "100",
    "id": 1
}
```

### Developing

1. Run `npm install` to install server dependencies.

2. Create a `.env` file in the root directory.
 
3. Define `PORT=3001` as enviroment variable in `.env` file.

5. Run `npm run dev` to start the development server.