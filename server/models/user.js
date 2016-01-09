var db = require('./db/index.js');

var add = function(userName, callback) {
  var params = [userName];
  var sql = 'INSERT INTO `users` (`name`) VALUES (?);'

  db.queryHelper(sql, params, function(results) {
    params = [results.insertId];
    sql = 'select * from users where users.id = ?;'
    db.queryHelper(sql, params, function(results) {
      //return inserted record
      callback(results[0]);
    });
  });
}

module.exports.add = add;
