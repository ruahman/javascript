var crypto = require('crypto');
var config = require('../config');

var helpers = {};

helpers.hast = function(str) {
  var hash = crypto
    .createHmac('sha256', config.hashingSecret)
    .update(str)
    .digest('hex');

  return hash;
};

module.exports = helpers;
