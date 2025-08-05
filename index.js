/** Dependencies  */
const http = require('http');
const url = require('url');

const PORT = 3000;

/** First, we define what the server does */
const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  const queryStringObj = parsedUrl.query;

  const httpMethod = req.method.toLowerCase();

  console.log(`${httpMethod} ${pathname}  ${JSON.stringify(queryStringObj)}`);

  res.end('Hello World!\n');
})

/** Lastly, we start the server and listen on the PORT */
server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});