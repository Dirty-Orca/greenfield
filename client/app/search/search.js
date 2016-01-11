angular.module('greenfield.search', [])

  .controller('searchController', function($scope, $log, $http, main){
    
    $scope.search = {};//defining the object and properties ahead of time ensures they are in the correct order for the API request

    $scope.search.zip = '';

    $scope.city = '';

    $scope.search.rawFromDate = '';

    $scope.search.rawToDate = '';

    $scope.format = function(stuff){// when the time comes to pass this stuff to ben, reset this function to contain two inner functions, one that reformats everything, and a second that passes off the data to his function
      stuff.toDate = "" + stuff.rawToDate.getFullYear() + "-0" + (stuff.rawToDate.getMonth() + 1) + "-" + stuff.rawToDate.getDate()
      stuff.fromDate = "" + stuff.rawFromDate.getFullYear() + "-0" + (stuff.rawFromDate.getMonth() + 1) + "-" + stuff.rawFromDate.getDate()
      $http({
        method: "GET",
        url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + stuff.zip
      }).then(function(res){
        stuff.city = res.data.results[0].address_components[1].long_name;
        stuff.state = res.data.results[0].address_components[res.data.results[0].address_components.length-2].short_name;//fix DC edgecase by using slice two spaces after the comma in the formatted address field
        //here is where you pass the stuff to ben.
        main.mapRequest(stuff);
        //
      })
    } 

//concat city, state to zip 




  })
