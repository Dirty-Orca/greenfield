angular.module('greenfield.services', [])

.factory('main', function($http, $log, $location) {



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
    searchItem: searchItem
  };
});