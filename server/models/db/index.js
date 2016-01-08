var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "greenfield"
});

connection.connect({
  debug: true
}, function(err) {
  if (err) throw (err);
});

module.exports = connection;
