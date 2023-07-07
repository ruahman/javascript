const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const config = require('./config');
// const _data = require('./lib/data');
const handlers = require('./lib/handlers');

// _data.create('test', 'newFile', { foo: 'bar' }, function(err) {
//   console.log('this was the error', err);
// });
//
// _data.read('test', 'newFile', function(err, data) {
//   console.log('this was the error', err, 'and this was the data', data);
// });
//
// _data.update('test', 'newFile', { fizz: 'buzz' }, function(err) {
//   console.log('this was the error', err);
// });
//
// _data.delete('test', 'newFile', function(err) {
//   console.log('this was the error', err);
// });

// instantiate http server
var httpServer = http.createServer(function(req, res) {
  unifiedServer(req, res);
});

// routes that map to our handlers
let router = {
  sample: handlers.sample,
  ping: handlers.ping,
  users: handlers.users,
};

// start http server
httpServer.listen(config.httpPort, function() {
  console.log(
    `we are running server on port ${config.httpPort} in ${config.envName} mode`
  );
});

// setup https server
let httpsServerOptions = {
  key: fs.readFileSync('./https/key.pem'),
  cert: fs.readFileSync('./https/cert.pem'),
};

// instantiate https server
var httpsServer = https.createServer(httpsServerOptions, function(req, res) {
  unifiedServer(req, res);
});

// start http server
httpsServer.listen(config.httpsPort, function() {
  console.log(
    `we are running server on port ${config.httpsPort} in ${config.envName} mode`
  );
});

// all the server logic for both http and https
let unifiedServer = function(req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, '');

  let method = req.method.toLowerCase();
  let queryStringObject = parsedURL.query;
  let headers = req.headers;

  // payload comes in as stream, little bits at a time
  let decoder = new StringDecoder('utf-8');
  let buffer = '';

  // decode data one chunk at a time
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    // tell buffer that data has ended
    buffer += decoder.end();

    let choosenHandler =
      typeof router[trimmedPath] !== 'undefined'
        ? router[trimmedPath]
        : handlers.notFound;

    let data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: buffer,
    };

    choosenHandler(data, function(statusCode, payload) {
      statusCode = typeof statusCode == 'number' ? statusCode : 200;
      payload = typeof payload == 'object' ? payload : {};

      let payloadString = JSON.stringify(payload);

      // return json to browser
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      console.log('response: ', statusCode, payload);
    });
  });
};
