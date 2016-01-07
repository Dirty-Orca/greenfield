angular.module('greenfield.search', [])

  .controller('searchController', function($scope, $log){
    
    $scope.search = {};//defining the object and properties ahead of time ensures they are in the correct order for the API request

    $scope.search.city = '';

    $scope.state = ''

    $scope.search.fromDate = '';

    $scope.search.toDate = '';

    $scope.format = function(stuff){// when the time comes to pass this stuff to ben, reset this function to contain two inner functions, one that reformats everything, and a second that passes off the data to his function
      $log.info(stuff)
      stuff.formattedToDate = "" + stuff.toDate.getFullYear() + "-" + (stuff.toDate.getMonth() + 1) + "-" + stuff.toDate.getDate()
      stuff.formattedFromDate = "" + stuff.fromDate.getFullYear() + "-" + (stuff.fromDate.getMonth() + 1) + "-" + stuff.fromDate.getDate()
    }




  })
