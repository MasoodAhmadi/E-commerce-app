# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

# E-commerce-app

This is an e-commerce application that a user can order a product and buy stuffs.

## Installation

add .env file

- SECRETKEY = xxxxxxxxx;
- DB_PASSWORD=xxxxxxxxx
- DB_USERNAME=xxxxxxx
- DB_DATABASE=xxxxxx

## client

```bash
npm install && npm start
```

## server

```bash
npm install && npm run dev
```

    "test": "nyc jest --verbose ./src/test --coverage && cat ./coverage/lcov.info | coveralls-next",
