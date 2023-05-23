# Bookingapp

App for scheduling doctor appointments. A multi-layer architecture was used.


#  Tech stack
* Spring Boot, 
* Angular, 
* TypeScript, 
* Mysql
* Liquibase
* Swagger


#  Installation

_____
Download project <code> git clone https://github.com/mrokuu/bookingapp </code>:

Backend:
* Run the code in the IDE
* Set properties. MySql is used in the project and the name of the database is "app", you can change the name if you want. Then set a username and password for the database.
* Go to mysql and set test data. You can find them in the resources -> example-data.txt.
* Navigate to `(http://localhost:8080/swagger-ui/index.html)`


Frontend:
* Run the code in the IDE
* Run `npm install`
* Run `npm start` for a dev server
* Navigate to `http://localhost:4200/`



The project is divided into two layers, the client layer and the admin layer.
The client is available:
`http://localhost:4200/`
Admin is available:
`http://localhost:4200/admin`
