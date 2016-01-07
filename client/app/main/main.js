angular.module('greenfield.main', [])
  .controller('mainController', function($scope, main) {

    //KEY
    L.mapbox.accessToken = 'KEY';

    //instantiate new map
    var map = L.mapbox.map('map', 'mapbox.streets', {
      scrollWheelZoom: false
    }).setView([38.8929, -77.0252], 14);

    //render point on map
    //hard-coded json data
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

    //generates map layer
    var venueLayer = L.mapbox.featureLayer().addTo(map);
    venueLayer.setGeoJSON(geojson);

    $scope.message = '';

    main.get().then(function(data) {
      console.log(data.statusText);
      $scope.message = data.statusText;
    });

  });