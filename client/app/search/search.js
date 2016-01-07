angular.module('greenfield.search', [])

  .controller('searchController', function($scope, $log, $http){
    
    $scope.search = {};//defining the object and properties ahead of time ensures they are in the correct order for the API request

    $scope.search.zip = '';

    $scope.city = '';

    $scope.state = '';

    $scope.search.fromDate = '';

    $scope.search.toDate = '';

    $scope.format = function(stuff){// when the time comes to pass this stuff to ben, reset this function to contain two inner functions, one that reformats everything, and a second that passes off the data to his function
      stuff.formattedToDate = "" + stuff.toDate.getFullYear() + "-" + (stuff.toDate.getMonth() + 1) + "-" + stuff.toDate.getDate()
      stuff.formattedFromDate = "" + stuff.fromDate.getFullYear() + "-" + (stuff.fromDate.getMonth() + 1) + "-" + stuff.fromDate.getDate()

      $http({
        method: "GET",
        url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + stuff.zip + "&sensor=true"
      }).then(function(res){
        $log.info(res.data.results[0].address_components[1].long_name);
        //here is where you pass the stuff to ben.
      })
    }






  })
