
<h1 align="center">Object-Relational Mapping (ORM): E-Commerce Back End 👋</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/jpd61/e-commerce-backend" />
    <img src="https://img.shields.io/github/languages/top/jpd61/e-commerce-backend"  />
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
</p>

## Table of Contents
- [Description](#description)
- [Installation](#installation)


## Description

A backend application designed to be used for ecommerce. Used node.js, MySQL2, Express, Sequelize, and dotenv.
  

![DB Setup and Start](https://drive.google.com/file/d/16RqPMJpsuQjqIZ8CHAG1wMyqW-tkLJK9/view)

![Category Routes]()

![Tag Routes]()

![Product Routes]()
  


## Installation
After cloning the repository you will need to create a new file named:

`.env`

In this file you will need to enter the following lines:

```js script
DB_NAME='(name of your new database)'
DB_USER='(your username for mysql)'
DB_PW='(your password for mysql)'
```

After that you will need to run the following:
  
`npm i`

Next you need to login to mysql to create the database:

`mysql -u root -p`

Enter your mysql password

`source db/schema.sql`

`quit`

After that the program is ready to use, however if you want to seed the database with premade options:

`npm run seed`

Whether you seeded the database or not you need to run the program to start the server:

`npm start`
