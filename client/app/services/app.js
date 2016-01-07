angular.module('greenfield.services', [])

.factory('main', function($http) {

  var get = function() {
    return $http({
        method: 'GET',
        url: '/api/test'
      })
      .then(function(resp) {
        return resp;
      });
  };

  return {
    get : get
  };
});
