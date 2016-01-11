angular.module('greenfield.services', [])

.factory('main', function($http, $log, $location) {

  var venueRequest = function(venue) {
    $log.info(venue);
    return $http({
      method: 'POST',
      url: '/api/venue',
      data: venue
    })
  }

  var eventRequest = function(event) {
    $log.info(event);
    return $http({
      method: 'POST',
      url: '/api/event',
      data: event
    }).then(function(resp) {
      return $http({
        method: 'POST',
        url: '/api/userEvents',
        data: event
      })
    })
  }

  var mapRequest = function(obj) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: obj
    }).then(function(resp) {
      $location.path('/').search({
        mapData: resp
      })
    })
  }

  var searchItem = function(stuff) {
    $http({
      method: "GET",
      url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + stuff.zip
    }).then(function(res) {
      stuff.city = res.data.results[0].address_components[1].long_name;
      stuff.state = res.data.results[0].address_components[res.data.results[0].address_components.length - 2].short_name; //fix DC edgecase by using slice two spaces after the comma in the formatted address field
      mapRequest(stuff);
    })

  }

  return {
    mapRequest: mapRequest,
    searchItem: searchItem,
    eventRequest: eventRequest,
    venueRequest: venueRequest
  };
});