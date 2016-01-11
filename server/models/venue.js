var db = require('./db/index.js');

var add = function(venueObj, callback) {

  var params = [
    venueObj.id,
    venueObj.url,
    venueObj.name,
    venueObj.city,
    venueObj.region,
    venueObj.country,
    venueObj.latitude,
    venueObj.longitude
  ];

  var sql = 'INSERT INTO `venues` \
            (`id`, `url`, `name`, `city`, `region`, `country`, `latitude`, `longitude`) \
              VALUES \
            (?, ?, ?, ?, ?, ?, ?, ?);'

  db.queryHelper(sql, params, function(results) {
    params = [results.insertId];
    sql = 'select * from venues where venues.id = ?;'
    db.queryHelper(sql, params, function(results) {
      //return inserted record
      callback(results[0]);
    });
  });
}

var remove = function(id, callback) {
  var params = [id];
  var sql = 'DELETE FROM `venues` where id = (?);'

  db.queryHelper(sql, params, function(results) {
    callback(results[0]);
  });
}

module.exports.add = add;
module.exports.remove = remove;
