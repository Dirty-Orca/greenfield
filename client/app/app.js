angular.module('greenfield', [
    'greenfield.services',
    'greenfield.main',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainController'
      })
      .otherwise('/');
  });
