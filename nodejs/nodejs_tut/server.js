const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(`<htm>
      <head><title>Enter Message</title></head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      </body>
    </htm>`);
    return res.end();
  } else if (url === '/message' && method === 'POST') {
    console.log('POST request');
    const body = [];

    // data comes as a stream so that we can respond to it faster
    req.on('data', (chunk) => {
      console.log('on');
      body.push(chunk);
    });

    // we are done streaming all the data
    req.on('end', () => {
      console.log('end');
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log('message', message);
      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302; // redirect status code
    res.setHeader('Location', '/'); // redirect to index page
    return res.end();
  }

  res.write('this is anything else');
  return res.end();
});

server.listen(3000);
console.log('Server listening on port 3000');
