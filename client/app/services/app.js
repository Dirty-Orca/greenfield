angular.module('greenfield.services', [])

.factory('main', function($http, $log, $location) {

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
    return $http({
      method: 'POST',
      url : '/api/search',
      data : obj
    }).then(function(resp){
      console.log(resp.data);
      $location.path('/').search({mapData : resp})
    })
  }

  return {
    get : get,
    mapRequest : mapRequest
  };
});
