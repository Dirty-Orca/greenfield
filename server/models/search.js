var request = require('request');

var reArrange = function(body) {
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
};

module.exports = function(data, callback) {
  request('http://api.bandsintown.com/events/search?location=' + data.city + ',' + data.state + '&radius=10&format=json&date=' + data.fromDate + ',' + data.toDate + '(inclusive range)&app_id=mapit', function(error, resp, body) {
    if (err) {
      throw err;
    }

    if (!error && response.statusCode == 200) {
      var newBody = reArrange(body);
      //resp.send(newBody);
      callback(newBody);
    }
  })
}
