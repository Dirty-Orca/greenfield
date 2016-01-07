angular.module('greenfield.main', [])
  .controller('mainController', function($scope, main) {

    //instantiate new map
    L.mapbox.accessToken = 'pk.eyJ1IjoiYmJhbGFyYW4iLCJhIjoiUmt5TlVjayJ9.1AYg44v3_Bg1XUQ6-5dGAw';

    var map = L.mapbox.map('map', 'mapbox.streets', {
      scrollWheelZoom: false
    }).setView([38.8929, -77.0252], 14);

    //render point
    var geojson = [{
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-77.018387, 38.974193]
        },
        "properties": {
          "title": "Takoma Station Tavern"
        }
      }]
    }]

    var venueLayer = L.mapbox.featureLayer().addTo(map);
    venueLayer.setGeoJSON(geojson);

    $scope.message = '';

    main.get().then(function(data) {
      console.log(data.statusText);
      $scope.message = data.statusText;
    });
  });