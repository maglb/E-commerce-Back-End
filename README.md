# E-commerce-Back-End

Module 13 Challenge

## Description

For this project, our task was to build the back end for an e-commerce site, working with Express.js API and configuring it to use Sequelize to interact with a MySQL database.

During this project we learned to creating routes with GET, POST and DELETE requests.

Below are the assigmemnt's requirements:

### User Story

* AS A manager at an internet retail company
* I WANT a back end for my e-commerce website that uses the latest technologies
* SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

* GIVEN a functional Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete data in my database

## How to use it

Run in the terminal "mysql -u root" to connect the mysql. Run the command "source db/schema.sql" to create the ecommerce_db database. Exit mysql and run in the terminal "node seeds/index.js" to insert the data into the database. Once this is done, run node server and open Insomnia to test each route.


## Links

In order to complete this assignment, I have referred to a few resources:

* Used Xpert Learning Assistant about DELETE requests
* Tutoring session with Wesley Clement to debugg my code

## Walk through Video

https://drive.google.com/file/d/1TNu0Jh13BV6k2Bvduq84zCJD6IevVRc7/view?usp=sharing


##  Credits

To finish this assignment, I had the help of our TA Jaytee Padilla and used the AskBCS app as well.