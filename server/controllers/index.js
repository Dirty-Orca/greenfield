var models = require('../models');

module.exports = {
  test: {
    get: function(req, res) {
      models.test.get(req, res);
    }
  }, 

  search: {
    post: function(req, res) {
      models.search.post(req, res);
    }
  },

  user: {
    post: function(req,res) {
      models.user.post(req,res);
    }
  },

  event: {
    post: function(req,res) {
      models.event.post(req,res);
    }
  },

  venue: {
    post: function(req,res) {
      models.venue.post(req,res);
    }
  },

  userEvents: {
    get: function(req, res) {
      models.userEvents.get(req, res);
    },

    post: function(req, res) {
      models.userEvents.post(req, res);
    },

    delete: function(req, res) {
      models.userEvents.delete(req, res);
    }
  }
}
