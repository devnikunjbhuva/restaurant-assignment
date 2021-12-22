# Restaurant Assignments
  - Restaurant Assignments backend (NodeJS + Express + MongoDB + Typescript)

## Instructions to run project in local
  - Make sure to install MongoDB and NodeJS in your local system    before you start
  - Go to src/config and update DB config respective to development and production
  - Run `npm i` to install dependencies
  - Start you local server by using command `npm run dev`

## Instructions to deploy the project
  - Make sure to install NodeJS in your server before you start
  - Go to src/config and update DB config of production
  - Run `npm i` to install dependencies
  - Start you server by using command `npm run deploy:prod`

## Check server status
> pm2 status

## Check server logs
> pm2 logs `APP_NAME`

APP_NAME will be `prod` or `dev` as per current ecosystem config


## Ways to improve application:
  - Implement image upload and store image path in restaurants and products.
  - Here, we are mentioning all api docs in one swagger file. Instead, we can mention doc description at route level and use swagger-jsdoc or express-jsdoc-swagger to generate docs
  - Instead of swagger, we can also go for apidocs to generate docs more efficiently


## Project Defination:
- Your API must be able to:
    - List all restaurants
    - Register new restaurants
    - Change a restaurant's data
    - List all the products of a restaurant
    - Create a restaurant product
    - Change a restaurant product
    - Delete a product from a restaurant
- The restaurant registration must have the following fields:
    - Restaurant picture
    - Restaurant name
    - Restaurant address
    - Opening hours of the restaurant (eg: Monday to Friday from 9 am to 6 pm and from Saturday to Sunday from 11 am to 8 pm).
- The restaurant's product registration must have the following fields:
    - Product photo
    - Product's name
    - Price of the product
    - Product category (ex.: Sweet, Savory, Juice...)