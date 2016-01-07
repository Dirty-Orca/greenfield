angular.module('greenfield.main', [])
  .controller('mainController', function($scope, main) {
    $scope.message = '';

    main.get().then(function(data) {
      console.log(data.statusText);
      $scope.message = data.statusText;
    });
  });
