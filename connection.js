const dotenv = require('dotenv');
const mysql = require('mysql');
const keys = require('./env');
// configraration with env. 
dotenv.config();
var dbConnection = mysql.createConnection({
  host: keys.DB_HOST,
  user: keys.DB_USERNAME,
  password:keys.DB_PASSWORD,
  database: keys.DB_DATABASE,
  charset : 'utf8mb4'
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = dbConnection;
