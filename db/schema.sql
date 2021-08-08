--DROP DATABASE employee-tracker

--selecting table to use
USE employee_tracker;

//Dropping all tables


DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;




--Creating employee table
CREATE TABLE employee(
    id INTERGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTERGER NOT NULL,
    FOREIGN KEY(role_id) REFERENCES role (id),
    FOREIGN KEY(manager_id) REFERENCES employee(id));

--Creating department table
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

--create role table
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department (id),
)