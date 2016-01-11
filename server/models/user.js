var db = require('./db/index.js');

var add = function(name, callback) {
  var params = [name];
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

var remove = function(id, callback) {
  var params = [id];
  var sql = 'DELETE FROM `users` where id = (?);'

  db.queryHelper(sql, params, function(results) {
    callback(results[0]);
  });
}

module.exports.add = add;
module.exports.remove = remove;
