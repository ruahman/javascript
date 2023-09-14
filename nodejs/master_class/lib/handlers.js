var _data = require('./data');
var helpers = require('./helpers');

// handlers for our application
let handlers = {};
handlers.sample = function(data, callback) {
  callback(406, { name: 'sample handler' });
};

handlers.ping = function(data, callback) {
  callback(200);
};

handlers.notFound = function(data, callback) {
  callback(404);
};

handlers.users = function(data, callback) {
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

handlers._users = {};

handlers._users.get = function(data, callback) { };
handlers._users.post = function(data, callback) {
  var phone = data.payload.phone.trim();
  var firstName = data.payload.firstName.trim();
  var lastName = data.payload.lastName.trim();

  _data.read('users', phone, function(err, data) {
    if (err) {
      var hashedPassword = helpers.hash(data.payload.password);

      var userObject = {
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
      };

      _data.create('users', phone, userObject, function(err) {
        if (!err) {
          callback(200);
        } else {
          console.log(err);
          callback(500, { Error: 'Could not create the new user' });
        }
      });
    } else {
      callback(400, { Error: 'A user with that phone number already exists' });
    }
  });
};
handlers._users.put = function(data, callback) { };
handlers._users.delete = function(data, callback) { };

handlers.tokens = function(data, callback) {
  handlers._tokens[data.method](data, callback);
};

handlers._tokens = {};
handlers._tokens.post = function(data, callback) {
  var tokenId = helpers.createRandomString(200);
  var expires = Date.now() + 1000 * 60 * 60;
};

module.exports = handlers;
