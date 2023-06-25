const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

var server = http.createServer(function (req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");

  let method = req.method.toLowerCase();
  let queryStringObject = parsedURL.query;
  let headers = req.headers;

  // payload comes in as stream, little bits at a time
  let decoder = new StringDecoder("utf-8");
  let buffer = "";
  // data come in one chunk at a time
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();
    res.end("hello world\n");
    console.log(
      `request was received on this path: ${trimmedPath} with this method: ${method} and querystring:`,
      queryStringObject
    );
    console.log("headers: ", headers);
    console.log("payload: ", buffer);
  });
});

server.listen(3000, function () {
  console.log("we are running server on port 3000");
});
