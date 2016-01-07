angular.module('greenfield.search', [])

  .controller('searchController', function($scope, $log){
    
    $scope.search = {};//defining the object and properties ahead of time ensures they are in the correct order for the API request

    $scope.search.loc = '';

    $scope.search.fromDate = '';

    $scope.search.toDate = '';

    $scope.someFunction = function(stuff){
      $log.info(stuff)
    }


  })
