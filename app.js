let express = require('express');

let app = express();

let serv = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + 'client', express.static(dirname + '/client')));

serv.listen(2000);

console.log('Server Opened');

class User {
    constructor(name, level, exp, skins) {
        this.name = name;
        this.level = level;
        this.exp = exp;
        this.skins = skins
    }

}

let SOCKET_LIST = {};

let io = require('socket.io');

io.sockets.on('connection', (socket) => {
    console.log('Socket Connection');
    socket.id = Math.random(); 
    socket.x = 0;       
    socket.y = 0;
    socket.number = Math.floor(10 * Math.random()).toString();
    SOCKET_List[socket.id] = socket
    
    
});

io.sockets.on('disconnect', () => {
    delete SOCKET_LIST[socket.id];
});

setInterval(() => { 
    let pack = [];
    for(var i in SOCKET_LIST) {
        let socket = SOCKET_LIST[i];    
        socket.x++;
        socket.y++;
        pack.push({
            x:socket.x,
            y:socket.y
        });
    }
    
    for(var i in SOCKET_LIST) {
        let socket = SOCKET_LIST[i];
        socket.emit('newPositions', pack);
}, 1000/25);
