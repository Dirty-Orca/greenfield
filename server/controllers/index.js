var models = require('../models'); //for test route

var search = require('../models/search.js');
var user = require('../models/user.js');
var event = require('../models/event.js');
var venue = require('../models/venue.js');
var userEvents = require('../models/userEvents.js');

module.exports = {
  test: {
    get: function(req, res) {
      models.test.get(req, res);
    }
  },

  search: {
    post: function(req, res) {
      search(req.body, function(results) {
        res.send(results);
      });
    }
  },

  user: {
    post: function(req, res) {
      var userName = req.body.user_name;

      user.add(userName, function(results) {
        res.json(results);
      });
    }
  },

  event: {
    post: function(req, res) {
      event.add(req.body, function(results) {
        res.json(results);
      });
    }
  },

  venue: {
    post: function(req, res) {
      venue.add(req.body, function(results) {
        res.json(results);
      });
    }
  },

  userEvents: {
    get: function(req, res) {
      var userId = req.params.id;
      userEvents.get(userId, function(results) {
        res.json(results);
      });
    },

    post: function(req, res) {
      var userId = req.body.user_id;
      var eventId = req.body.event_id;
      userEvents.add(userId, eventId, function(results) {
        res.json(results);
      });
    },

    delete: function(req, res) {
      var userId = req.body.user_id;
      var eventId = req.body.event_id;
      userEvents.remove(userId, eventId, function(results) {
        //res.json(results);
        res.status(200).end();
      });
    }
  }
}
