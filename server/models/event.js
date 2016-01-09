var db = require('./db/index.js');

var add = function(eventObj, callback) {

  var params = [
    eventObj.id,
    eventObj.artists,
    eventObj.date_time,
    eventObj.ticket_url,
    eventObj.venue_id
  ];

  var sql = 'INSERT INTO `events` \
                ( `artists`, `date_time`, `ticket_url`, `venue_id`) \
                VALUES (?, ?, ?, ?);'

  db.queryHelper(sql, params, function(results) {
    params = [results.insertId];
    sql = 'select * from events where events.id = ?;'
    db.queryHelper(sql, params, function(results) {
      //return inserted record
      callback(results[0]);
    });
  });
}

module.exports.add = add;
