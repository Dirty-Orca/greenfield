angular.module('greenfield.main', ['leaflet-directive'])
  .controller('BasicCenterController', ['$scope', '$location', function($scope) {

    //dummy data
    var mapItems = [{
        name: 'Blackwall Hitch',
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

        }, {
          b_event_id: 10786327,
          url: "http://www.bandsintown.com/event/10786327/buy_tickets?app_id=mapit&came_from=233",
          datetime: "2016-01-07T09:00:00",
          artists: [{
            "name": "Lucero",
            "url": "http://www.bandsintown.com/Lucero"
          }]

        }]

      }]
      //Set data variables for rendering venue information on click
    $scope.data = {};
    $scope.data.showMarker = {
      name: 'pre-update'
    };
    $scope.data.venue = 'pre-update';
    //processed dummy data
    $scope.mainMarker = {
      id: 0,
      lat: mapItems[0].lat,
      lng: mapItems[0].lon,
      focus: true,
      message: '<div>' + mapItems[0].name + '</div>',


    };

    //extend scope to map objects
    angular.extend($scope, {
      center: {
        lat: mapItems[0].lat,
        lng: mapItems[0].lon,
        zoom: 10
      },
      markers: {
        mainMarker: angular.copy($scope.mainMarker)
      },
      position: {
        lat: mapItems[0].lat,
        lng: mapItems[0].lon
      },
      layers: {
        baselayers: {
          osm: {
            name: 'CartoDB',
            url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            type: 'xyz'
          }
        }
      }
    });


    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
      // Args will contain the marker name and other relevant information
      var id = args.leafletEvent.target.options.id
      console.log(id);
      $scope.data.showMarker = mapItems[id].events;
      console.log($scope.data.showMarker[0].artists[0].name);
      $scope.reveal = true;
    });


  }])


// .controller('mainController', function($scope, $routeParams, main) {
//   console.log($routeParams);
//   //KEY
//   L.mapbox.accessToken = "pk.eyJ1IjoiYmJhbGFyYW4iLCJhIjoiUmt5TlVjayJ9.1AYg44v3_Bg1XUQ6-5dGAw";

//   //instantiate new map
//   var map = L.mapbox.map('map', 'mapbox.streets', {
//     scrollWheelZoom: true
//   }).setView([38.8929, -77.0252], 14);

//   render point on map
//   hard-coded json data


//   //generates map layer
//   // var venueLayer = L.mapbox.featureLayer().addTo(map);
//   // venueLayer.setGeoJSON({
//   //       "type": "FeatureCollection",
//   //       "features": [{
//   //         "type": "Feature",
//   //         "geometry": {
//   //           "type": "Point",
//   //           "coordinates": [mapItems[0].lon, mapItems[0].lat]
//   //         },
//   //         "properties": {
//   //           "title": mapItems[0].name
//   //         }
//   //       }]
//   //     });

//   $scope.message = '';

//   // main.get().then(function(data) {
//   //   console.log(data.statusText);
//   //   $scope.message = data.statusText;
//   // });

// });