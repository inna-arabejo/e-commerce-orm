# E-Commerce-ORM

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
E-commerce is the buying and selling of goods and services using the internet and the transfer of money to execute these transactions. Create a back end e-commerce site that utilizes Express.js API to use Sequalize and interact with MySQL database. Creating  

## Table of Contents
1. [Installation](#installation)
2. [Task](#task)
3. [Steps To Install](#steps-to-install)
3. [Usage](#usage)
4. [Video](#video)
5. [Screenshots](#screenshots)
6. [License](#license)
7. [Questions](#questions)

## Installation
The following dependencies were installed in the terminal to run the application. 
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)

## Task
In order to use this application, the following requirements are met when:
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Steps to Install
If you wish to run it locally, you can follow these instructions:

#### Step 1

Download or Clone this repo:

You can either download the repo as a zip file and unzip it to your computer, or you can clone it down to your computer directly.

#### Step 3

Navigate to App Directory:

Make sure you are in the directory of the application. It should be in a folder named e-commerce-orm. 

#### Step 4

Install Dependencies:

All NPM packages required for this application (Express, Compression, Mongoose, Lite-Server and Morgan) are already listed as dependencies in the package.json file. Run the command 'npm i' command in your terminal at the root directory level to install the packages.
Ensure you have Node.js installed on your machine.  

#### Step 5

Start the application:

In the command line, enter `'npm run start'`. As long as there are no errors, this should start the server and run it at http://localhost:3001

## Usage

#### Step 1

Run the application:
As mentioned in the installation section, install and run the application.

#### Step 2

First time access to Insomnia:
To send requests to the correct routes, it is recommended to install [Insomnia](https://insomnia.rest/download). It can be downloaded on Windows, Mac, or Linux.

#### Step 3

Insomnia features:
Under DEBUG, there are CRUD functions to choose from. The most common functions are GET, POST, PUT, and DELETE. Let's first start with GET and type in `localhost:3001`. This should display data. Depending on the route you'd like to check, you can pull response data of one request and feed it into the next request.

## Video

[Click to deploy video](https://youtu.be/kWcLg4JHjhE)

## Screenshots
![seeded database](./public/assets/images/seeds.jpg)
![insomnia routes](./public/assets/images/e-commerce-orm.jpg)

## License
This project is covered under MIT.

## Questions
For inquiries about the repo, you can find me through GitHub at [inna-arabejo](https://github.com/inna-arabejo). 
For any additional questions, you can reach me through my email at [iarabejo3@gmail.com](mailto:iarabejo3@gmail.com).