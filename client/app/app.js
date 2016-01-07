angular.module('greenfield', [
    'greenfield.services',
    'greenfield.main',
    'greenfield.search',
    'ngRoute',
    'ngMessages'//form validation in search.html
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainController'
      })
      .when('/search', {
        templateUrl: "app/search/search.html",
        controller: "searchController"
      })
      // .when('user_events',{ //maybe not this name, it's ugly
      //   templateUrl: "app/user_events/user_events.html",
      //   controller: "user_eventsController"
      // })
      // .when('/login', {
      //   templateUrl: "app/login/login.html",
      //   controller: "loginController"
      // }
      .otherwise('/search');
  });
