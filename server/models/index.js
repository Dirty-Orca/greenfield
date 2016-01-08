var request = require('request');
var db = require('./db/code.js');


module.exports = {
  reArrange: function(body) {

    var newBody = {};
    for (var i = 0; i < body.length; i++) {
      if (!newBody[body[i].venue.id]) {
        newBody[body[i].venue.id] = body[i].venue
      }
      newBody[body[i].venue.id].events.push({
        b_event_id: body[i].id,
        url: body[i].url,
        datetime: body[i].dateTime,
        artists: body[i].artists
      })
    }

    var actualBody = [];
    for (var key in newBody) {
      actualBody.push(newBody[key]);
    }
    return actualBody;
  },

  test: {
    get: function(req, res) {
      res.status(200).end();
    }
  },

  search: {
    post: function(req, res) {
      request('http://api.bandsintown.com/events/search?location=' + req.data.city + ',' + req.data.state + '&radius=10&format=json&date=' + req.data.fromDate + ',' + req.data.toDate + '(inclusive range)&app_id=mapit', function(error, resp, body) {
        if (!error && response.statusCode == 200) {
          var newBody = reArrange(body);
          resp.send(newBody);
        }
      })
    }
  },

  user: {
    post: function(req, res) {
      db.addUser(req, res);
    }
  },

  event: {
    post: function(req, res) {
      db.addEvent(req, res);
    }
  },

  venue: {
    post: function(req, res) {
      db.addVenue(req, res);
    }
  },

  userEvents: {
    get: function(req, res) {
      db.getEventsByUser(req, res);
    },

    post: function(req, res) {
      db.addUserevent(req, res);
    },

    delete: function(req, res) {
      db.removeUserEvent(req, res);
    }
  }
}
