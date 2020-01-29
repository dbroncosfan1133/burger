//Set up MySql connection
require("dotenv").config();
var mysql = require("mysql");

var data = process.env;

var connection = mysql.createConnection({
    host: data.HOST,
    port: data.PORT,
    user: data.USER,
    password: data.PASSWORD,
    database: data.DATABASE
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;