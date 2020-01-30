//Set up MySql connection
require("dotenv").config();
var mysql = require("mysql");
var connection;

var data = process.env;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: data.host,
        user: data.user,
        password: data.password,
        database: data.database
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;