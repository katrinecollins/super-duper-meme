const mysql = require("mysql");

//connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        //your MySql username,
        user: "root",
        //Your MySQL password
        password:"ScoobyDoo1983!",
        database: "employee_watcher",
    },
    console.log("Connected to the employee Tracker database.")
);

module.exports = db;