angular.module('greenfield.userEvents',[])

  .controller('userEventsController', function($scope, $log){
    $log.info('butts');

    // $scope.go = function(event){        //in case we don't like the ng-href method, we can change it to an ng-click
    //   location.assign("event.url");    //will do a reroute to http://127.0.0.1:3000/#/www.google.com instead of a redirect if the http is missing
    // }

    $scope.user = {};

    $scope.user.events = [
      {
        name: "The Crazy Donkey",//double check that the name field will be the venue name
        date_time: new Date(),
        ticket_url: "https://www.ticketfly.com",
        id: 1,
        Artist: "William Mayes"
      },
      {
        name: "The Cray Donkey",
        date_time: new Date(),
        ticket_url: "https://www.ticketfly.com",
        id: 1,
        Artist: "William Mayes"
      },
      {
        name: "The Crazy Donk",
        date_time: new Date(),
        ticket_url: "https://www.ticketfly.com",
        id: 1,
        Artist: "William Mayes"
      }
    ]


  });
