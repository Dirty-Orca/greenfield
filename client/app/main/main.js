angular.module('greenfield.main', [])
  .controller('mainController', function($scope, main) {

    //KEY
    L.mapbox.accessToken = "pk.eyJ1IjoiYmJhbGFyYW4iLCJhIjoiUmt5TlVjayJ9.1AYg44v3_Bg1XUQ6-5dGAw";

    //instantiate new map
    var map = L.mapbox.map('map', 'mapbox.streets', {
      scrollWheelZoom: true
    }).setView([38.8929, -77.0252], 14);

    //render point on map
    //hard-coded json data

    var mapItems = [{
        name : 'Blackwall Hitch',
        b_venue_id: 3051563,
        lat: 38.8047222,
        lon: -77.0472222,
        events: [{
          b_event_id: 10786327,
          url: "http://www.bandsintown.com/event/10786327/buy_tickets?app_id=mapit&came_from=233",
          datetime: "2016-01-07T09:00:00",
          artists: [{
            "name": "Darcy Dawn & Company",
            "url": "http://www.bandsintown.com/DarcyDawnAndCompany"
          }]

        }]

      }]

    //generates map layer
    var venueLayer = L.mapbox.featureLayer().addTo(map);
    venueLayer.setGeoJSON({
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [mapItems[0].lon, mapItems[0].lat]
            },
            "properties": {
              "title": mapItems[0].name
            }
          }]
        });

    $scope.message = '';

    main.get().then(function(data) {
      console.log(data.statusText);
      $scope.message = data.statusText;
    });

  });