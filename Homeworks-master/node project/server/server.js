const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let readStream = fs.createReadStream(__dirname + '/project.html','utf8');
    readStream.pipe(res)
  }).listen(8080); 