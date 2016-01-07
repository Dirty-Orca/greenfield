angular.module('greenfield.services', [])

.factory('main', function($http, $log) {

  var get = function() {
    return $http({
        method: 'GET',
        url: '/api/test'
      })
      .then(function(resp) {
        return resp;
      });
  };

  var mapRequest = function(obj){
    // return $http({
    //   method: 'POST',
    //   url : '/api/search',
    //   data : 'http://api.bandsintown.com/events/search?location=' + obj.city + ',' + obj.state + '&radius=10&format=json&date=' + obj.toDate + ',' + obj.fromDate + '(inclusive range)&app_id=mapit'
    // })
    $log.info("made it", obj)
  }

  return {
    get : get,
    mapRequest : mapRequest
  };
});
