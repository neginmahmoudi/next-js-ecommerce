# comfortably numb - e-commerce store

## Description

Comfortably Numb is a fictional e-commerce store for electric guitars.
This project is part of a web development course. It is no actual company and no purchases can be made. The site is not responsive.

## Functionalities

- Landing page
- Products page where all the products are listed
- Pages for each single product with the ability to add a quantity to the cart
- Shopping cart page with a list of all products. This page allows the user to the ability to change the quantity, delete products and view the total price.
- Checkout page where users input the shipping and payment information
- Thank you page after checkout.
- The header shows the current number of items in the cart - it also links to the shopping cart.

## Technologies

- Next.js
- React
- Postgres
- Emotion
- Typescript

## Setup instructions

- Clone the repository with `git clone <repo>`
- Setup the database by downloading and installing PostgreSQL
- Create a user and a database
- Create a new file .env
- Copy the environment variables from .env-example into .env
- Replace the placeholders xxxxx with your username, password and name of database
- Install dotenv-cli with `yarn add dotenv-cli`
- Run `yarn install` in your command line
- Run the migrations with `yarn migrate up`
- Start the server by running `yarn dev`

## Deploy on fly.io

- Generate a Fly.io Token, called _GitHub Actions Deploy Token_ and copy the text
- Create a new repository secret in the GitHub repo, named FLY_API_TOKEN
- Log into Fly.io on the command line: `flyctl auth login`
- Create an app `flyctl apps create --name <app name>`
- Create the Fly.io config files
- Add database credentials using Fly.io secrets
  `flyctl secrets set PGHOST=localhost PGDATABASE=$(openssl rand -hex 16) PGUSERNAME=upleveled$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)`
- Create a 1GB volume for the PostgreSQL database in Frankfurt
  `flyctl volumes create postgres --size 1 --region fra`
- Deploy: `flyctl deploy`
