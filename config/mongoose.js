var config = require('./config'),
  Mongoose= require('mongoose');

module.exports = function() {
  var db = Mongoose.connect(config.db);

  require('../app/models/user.server.model');
  return db;
};
