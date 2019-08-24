let express = require('express');

let app = express();

let serv = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + 'client', express.static(dirname + '/client')));

serv.listen(2000);

let io = require('socket.io');

io.sockets.on('connection', (socket) => {
    console.log('Socket Connection');
});
