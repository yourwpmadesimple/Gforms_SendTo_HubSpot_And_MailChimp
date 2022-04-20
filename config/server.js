const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Update Successful");
};

const server = http.createServer(requestListener);
let port = process.env.PORT ? 8080 : 3000;
server.listen(port);
