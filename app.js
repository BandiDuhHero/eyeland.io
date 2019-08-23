let io = require('socket.io');
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});
 
fs = require('fs'),

index = fs.readFileSync(__dirname + '/index.html');()

var io = require('socket.io').listen(app);
