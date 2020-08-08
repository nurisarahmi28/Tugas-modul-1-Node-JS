const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('Hello you!');
    res.end();
}).listen(8080);

console.log('Apliccation success!');
