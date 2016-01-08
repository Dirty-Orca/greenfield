var dbConnection = require('../db/index.js');

var queryHelper = function(sql, params, res) {
  console.log(sql + ' - ' + params);
  dbConnection.query(sql, params, function(err, results) {
    if (err) {
      throw (err);
    }

    callback(results);
  });
}

module.exports = {
  db: {
    addUser: function(req, res) {
      var params = [req.body.user_name];
      var sql = 'INSERT INTO `users` (`name`) VALUES (?);'

      queryHelper(sql, params, function(results) {
        params = [results.insertId];
        sql = 'select * from users where users.id = ?;'
        queryHelper(sql, params, function(results) {
          //return inserted record
          res.json(results[0]);
        });
      });
    },

    addEvent: function(req, res) {
      var params = [req.body.artists,
        req.body.date_time,
        req.body.ticket_url,
        req.body.venue_id
      ];

      var sql = 'INSERT INTO `events` ( `artists`, `date_time`, `ticket_url`, `venue_id`) VALUES (?, ?, ?, ?);'

      queryHelper(sql, params, function(results) {
        params = [results.insertId];
        sql = 'select * from events where events.id = ?;'
        queryHelper(sql, params, function(results) {
          //return inserted record
          res.json(results[0]);
        });
      });
    },

    addVenue: function(req, res) {
      var params = [req.body.url,
        sreq.body.name,
        req.body.city,
        req.body.region,
        req.body.country,
        req.body.latitude,
        req.body.longitude
      ];

      var sql = 'INSERT INTO `venues` (`url`, `name`, `city`, `region`, `country`, `latitude`, `longitude`) VALUES (?, ?, ?, ?, ?, ?, ?);'

      queryHelper(sql, params, function(results) {
        params = [results.insertId];
        sql = 'select * from venues where venues.id = ?;'
        queryHelper(sql, params, function(results) {
          //return inserted record
          res.json(results[0]);
        });
      });
    },

    getEventsByUser : function(req, res) {
      var params = [req.body.user_id];
      var sql = 'SELECT DISTINCT events.*, venues.name \
                  FROM users_events \
                  JOIN users on users_events.user_id = users.id \
                  JOIN events on users_events.event_id = events.id \
                  JOIN venues on events.venue_id = venues.id \
                  and users.id = ? ';

      queryHelper(sql, params, function(results) {
        res.json(results);
      });

    },

    addUserEvent : function(req, res) {
      var params = [req.body.user_id, req.body.event_id];
      var sql = 'INSERT INTO `users_events` (`user_id`, `event_id`) VALUES( ? , ? );';

      queryHelper(sql, params, function(results) {
        params = [results.insertId];
        sql = 'select * from users_events where id = ?;'
        queryHelper(sql, params, function(results) {
          //return inserted record
          res.json(results[0]);
        });
      });
    },

    removeUserEvent : function(req, res) {
      var params = [req.body.user_id, req.body.event_id];
      var sql = 'DELETE FROM `users_events` where `user_id` = ? and `event_id` = ?;';
      queryHelper(sql, params, function(results) {
          res.status(200).end();   
      });
    }
  }
}
