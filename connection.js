const dotenv = require('dotenv');
const mysql = require('mysql');
const keys = require('./env');
// configraration with env. 
dotenv.config();
var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: keys.DB_DATABASE,
  charset : 'utf8mb4'
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = dbConnection;
