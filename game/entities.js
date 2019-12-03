let PLAYER_LIST = {};

class Entity {
  constructor(x, y, id) {
    this.x = 250;
    this.y = 250;
    this.id = id;
  }
  spawn(x, y) {
	  
  }
  despawn() {
    this.x = 0;
    this.y = 0;
    delete this;
  }
  move(xamt, yamt) {
	this.x += xamt;
	this.y += yamt;
  }
  getDistance(pt) {
	return Math.sqrt(Math.pow(this.x - pt.x,2) + Math.pow(this.y - pt.y,2));
  }
}
class Eye extends Entity {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.id = 'Eye';
		this.hp = 1000;
	}
}

class Player extends Entity {
  constructor(x, y, id, role, armor, weapon, base) {
    super(x, y, id);
    this.role = role;
    this.armor = armor;
    this.weapon = weapon;
    this.base = base;
	this.HP = 100;
    this.CrystalHP = 100;
    this.regentime = 5;
    this.regenamt = 5;
    this.atkspd = 1;
    this.atk = 10;
    this.def = 2;
    this.spd = 1;
	this.ec = 20;
    this.inventory = [];
	this.pressingRight = false;
    this.pressingLeft = false;
    this.pressingUp = false;
    this.pressingDown = false;
	this.mouseAngle = 0;
  }
  onConnect(socket) {
	  
	socket.emit('newPlayer', function() {
	var players = [];
	for(var i in Game.players)
		players.push(Game.players[i]);
		data = {
		socketId:socket.id,
		players:players,
		};
		console.log('emitted newPlayer' + data);
		return data;
	});
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
}

  updatePosition() {
	  let xamt = 0;
	  let yamt = 0;
        if(this.pressingRight) {
            xamt = this.spd;
		}
        else if(this.pressingLeft) {
            xamt = -this.spd;
		}
        if(this.pressingUp) {
            yamt = -this.spd;
		}
        else if(this.pressingDown) {
            yamt = this.spd;
		}
		
		super.move(xamt, yamt)
  }
  attack(targ) {
    if(targ.id = 'eye') 
      targ.hp -= targ.atk/10;
    if(targ.id = 'crystal') 
      targ.hp -= targ.atk/5;
    else 
      targ.hp -= targ.atk/targ.def; 
    
  }
  lockBase() {
	  
  }
  unlockBase() {
  }
  spawn(loc) {
    if(loc = 'base') {
      var base = this.base.split(',');
      this.x = Number(base[0]);
      this.y = Number(base[1]);
    }
  }
  death() {
    if(this.crystalhp === 0) {
      super.despawn();
    }
    else {
      this.spawn('base');
    }
  }
}

class Vendor extends Entity {
	constructor(x, y, id) {
		super(x, y, id)
		this.name = name;
		this.isOpen = false;
	}
	openShop() {
		this.isOpen = true;
		//Game.announce(this.id + 'has just opened shop.');
	}
	closeShop() {
		this.isOpen = false;
		this.despawn();
		//Game.announce(this.id + 'has just opened shop.');
	}
}

class Construction extends Vendor {
	constructor(x, y, id) {
		super(x, y, id)
		this.items = [];
	}
}
class Activator extends Vendor {
	constructor(x, y, id) {
		super(x, y, id)
		this.items = [];
	}
}
class Marksman extends Vendor {
	constructor(x, y, id) {
		super(x, y, id)
		this.items = [];
	}
}

exports.Entity = Entity;
exports.Eye = Eye;
exports.Player = Player;
exports.Construction = Construction;
exports.Activator = Activator;
exports.Marksman = Marksman;
