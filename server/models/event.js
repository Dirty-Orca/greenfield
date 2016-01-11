var db = require('./db/index.js');

var add = function(eventObj, callback) {
  var dt = new Date(eventObj.date_time);
  
  var params = [
    eventObj.id,
    eventObj.artists,
    dt,
    eventObj.ticket_url,
    eventObj.venue_id
  ];

  var sql = 'INSERT INTO `events` \
                ( `id`, `artists`, `date_time`, `ticket_url`, `venue_id`) \
                VALUES (? ,?, ?, ?, ?);'

  db.queryHelper(sql, params, function(results) {
    params = [results.insertId];
    sql = 'select * from events where events.id = ?;'
    db.queryHelper(sql, params, function(results) {
      //return inserted record
      callback(results[0]);
    });
  });
}

var remove = function(id, callback) {
  var params = [id];
  var sql = 'DELETE FROM `events` where id = (?);'
  
  db.queryHelper(sql, params, function(results) {
    callback(results[0]);
  });
}


module.exports.add = add;
module.exports.remove = remove;
