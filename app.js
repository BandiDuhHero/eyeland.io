global.express = require('express');
global.app = express();
global.serv = require('http').Server(app);
global.Game = require('./game/game');
global.Entities = require('./game/entities');
global.Roles = require('./game/roles');
global.Armor = require('./game/armor');
global.Weapons = require('./game/weapons');
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/game.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);
console.log("Server started.");
 
let SOCKET_LIST = {};
let io = require('socket.io') (serv, {});

io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;
	Game.players[socket.id] = new Entities.Player(5, 10, socket.id, Roles.Masochist, Armor.Plague, Weapons.Infected, Game.BaseData[socket.id]);
    let player = Game.players[socket.id];
    socket.on('keyPress', function(data) {
        if(data.inputId === 'left') {
            player.pressingLeft = data.state;
		}
        else if(data.inputId === 'right') {
            player.pressingRight = data.state;
		}        
		else if(data.inputId === 'up') {
            player.pressingUp = data.state;
		}
        else if(data.inputId === 'down') {
            player.pressingDown = data.state;
		}
		else if(data.inputId === 'attack') {
			player.pressingAttack = data.state;
		}
		else if(data.inputId === 'mouseAngle') {
			player.mouseAngle = data.state;
		}
	});
	socket.emit('newPlayer', {
		socketId: socket.id,
		players: Game.players
		});
	//initPack.push(player);
	console.log('player: '  + Object.keys(player));
	console.log('sockId: ' + socket.id);
	console.log('slatt');
	socket.on('disconnect', function(){
		let DCPlayerName = Game.players[socket.id].id;
		delete Game.players[socket.id];
		console.log('Removed Player ' + DCPlayerName);
    });
});
 
setInterval(function() {  
    for(let i in SOCKET_LIST){
        let socket = SOCKET_LIST[i];
		//socket.emit('newPlayer', initPack);
		socket.emit('update', Game.getUpdates());
    }
	
	//initPack.player = [];
}, 40);

/*setInterval(function (){
	let minutes = Game.Time.getMinutes();
	let seconds = Game.Time.getSeconds();
	
	if (Game.players.length < 10 && Game.blink.isNaN) {
		Game.startSleepPhase();
	}
	else if(minutes === 0 && Game.Blink !== 1) {
		Game.Blink = 1;
		Game.startBlink();
	}
	else if(minutes === 3 && Game.Blink !== 2) {
		Game.Blink = 2;
		Game.startBlink();
	}
	else if(minutes === 5 && Game.Blink !== 3) {
		Game.Blink = 3;
		Game.startBlink();
	}
	else if(minutes === 10 && Game.Blink !== 4) {
		Game.Blink = 4;
		Game.startBlink();
	}
	else if(minutes === 13 && Game.Blink !== 5) {
		Game.Blink = 5;
		Game.startBlink();
	}
	else if(minutes === 15) {
		Game.startBlindPhase();
	}
    let minutesDisplay = minutes.toString();
    let secondsDisplay = seconds.toString();
    if (minutes.length < 2) {
      minutesDisplay = '0' + minutesDisplay;
    }

    if (seconds.length < 2) {
      seconds = '0' + secondsDisplay;
    }
    for(let i in SOCKET_LIST){
        let socket = SOCKET_LIST[i];
    socket.emit('gameTimer', minutesDisplay + ' : ' + secondsDisplay);
    }
}, 1000);*/

