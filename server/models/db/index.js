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

var queryHelper = function(sql, params, callback) {
  connection.query(sql, params, function(err, results) {
    if (err) {
      throw (err);
    }

    callback(results);
  });
}

module.exports.connection = connection;
module.exports.queryHelper = queryHelper;
