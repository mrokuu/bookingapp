# Bookingapp

App for scheduling doctor appointments. A multi-layer architecture was used.


#  Features

Non-admin page:

* Login
* Making an appointment
* Sending an e-mail after making an appointment
* Sorting by specialization
* After logging in, you can view the list of appointments
* Adding opinions

Admin page:

* Login
* Editing Doctor, Specialization
* Adding Doctor, Specialization
* Deliting Doctor, Specilization
* Displaying a list of appointments


#  Tech stack

* Spring Boot, 
* Angular, 
* TypeScript, 
* Mysql
* Liquibase
* Swagger


### Features and TODO

#### Project


- [ ] Implement Logout
- [ ] Implement Calendar
- [ ] Implement payment gateway


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

#  Photos

![Screenshot 2023-05-23 at 07 40 20](https://github.com/mrokuu/bookingapp/assets/107129687/dd7116a9-c36f-403c-bbfc-a1eba3ef3d07)
![Screenshot 2023-05-23 at 07 41 56](https://github.com/mrokuu/bookingapp/assets/107129687/69e4a450-a6fc-484d-947f-e04e01ad92d7)
![Screenshot 2023-05-23 at 07 42 51](https://github.com/mrokuu/bookingapp/assets/107129687/5c386a22-381b-44f0-a1e8-f1b2dc76005c)
![Screenshot 2023-05-23 at 07 43 55](https://github.com/mrokuu/bookingapp/assets/107129687/1a189574-8d78-4de1-a939-5c9214dd2c73)
![Screenshot 2023-05-23 at 07 45 09](https://github.com/mrokuu/bookingapp/assets/107129687/0873fb7e-dfbd-4123-bdea-9b88fe9d11c0)
![Screenshot 2023-05-23 at 07 45 35](https://github.com/mrokuu/bookingapp/assets/107129687/35305bb7-1a8a-4fd9-95c0-8cad2ac420fa)
![Screenshot 2023-05-23 at 07 45 56](https://github.com/mrokuu/bookingapp/assets/107129687/0a1e1f8c-b780-44f3-a93c-ffe1219a079f)
![Screenshot 2023-05-23 at 07 46 17](https://github.com/mrokuu/bookingapp/assets/107129687/b90ceab7-2a25-4747-b8d0-669ff9db3890)
![Screenshot 2023-05-23 at 07 46 33](https://github.com/mrokuu/bookingapp/assets/107129687/ee1f81a3-56c2-442f-a9e3-30529f1ad466)
