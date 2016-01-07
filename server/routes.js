var controllers = require('./controllers');
var router = require('express').Router();

router.get("/test", controllers.test.get);

module.exports = router;
