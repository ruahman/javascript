const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

var server = http.createServer(function (req, res) {
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

    choosenHandler(data, function (statusCode, payload) {
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
});

let handlers = {};
handlers.sample = function (data, callback) {
  callback(406, { name: 'sample handler' });
};

handlers.notFound = function (data, callback) {
  callback(404);
};

let router = {
  sample: handlers.sample,
};

server.listen(3000, function () {
  console.log('we are running server on port 3000');
});
