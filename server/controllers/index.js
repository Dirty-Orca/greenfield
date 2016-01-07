var models = require('../models');

module.exports = {
  test: {
    get: function(req, res) {
      models.test.get(req, res);
    }
  }, 

  search: {
    post: function(req, res) {
      models.test.post(req, res)
    }
  }
}
