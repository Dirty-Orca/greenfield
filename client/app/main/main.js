angular.module('greenfield.main', ['leaflet-directive'])
  .controller('BasicCenterController', ['$scope', '$location', function($scope, $location) {
    //set data to bandsintown content
    var data = $location.search();
    //declare map maprkers
    $scope.markers = [];

    for (var i = 0; i < data.mapData.data.length; i++) {
      marker = {
        id: i,
        name: data.mapData.data[i].name,
        lat: data.mapData.data[i].latitude,
        lng: data.mapData.data[i].longitude,
        events: data.mapData.data[i].events,
        message: data.mapData.data[i].name
      }
      $scope.markers.push(marker)
    };

    //Set data variables for rendering venue information on click
    //"Could not load data" should not be displayed
    $scope.data = {};
    $scope.data.showMarker = {
      name: 'Could not load data'
    };
    $scope.data.venue = 'Could not load data';

    //extend scope to map objects and set defaults
    angular.extend($scope, {
      defaults: {
        minZoom: 8
      },
      center: {
        lat: $scope.markers[0].lat,
        lng: $scope.markers[0].lng,
        zoom: 12
      },
      markers: $scope.markers,
      position: {
        lat: $scope.markers[0].lat,
        lng: $scope.markers[0].lng
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
    //displays event information when marker is clicked
    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
      // references data by id in args
      var id = args.leafletEvent.target.options.id
      $scope.data.showMarker = $scope.markers[id].events;
      $scope.reveal = true;
      console.log($scope.data.showMarker[0].datetime)
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