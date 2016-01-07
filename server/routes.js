var controllers = require('./controllers');
var router = require('express').Router();

router.get("/test", controllers.test.get);

/*
Setup a path listener for post requests on the /search route. 

On this post request, the route will 
  1) call a function that adds the client-query data into the log for the logged-in user in the database
  2) send back a response of completion to the client

  Additional(on response, client should render the map view)

*/

router.post("/search", controllers.search.post);

/*
Setup a path listener for post requests on the /map route. 

On this post request, the route will 
  1) call a function that adds the client-query data into the log for the logged-in user in the database
  2) send back a response of completion to the client
*/

router.post("/map", controllers.map.post);

module.exports = router;
