let Blink = 0;
let Time = new Date();
let players = {};
let BaseData = {};
let EmptyBases = ['49,8', '6,50', '90,50', '49, 91']
let vendors = {
	Activator: ['Armor Activation', 'Sword Activation']
};
let spawnEC = function() {

}

let startBlink = function(){
	if(Blink === 1) {
		for(var i in players) {
			players[i].unlockBase();
		}
		Entities.Construction.openShop();
		spawnEC();
	}
	if(Blink === 2) {
		Entities.Activator.openShop();
		spawnEC();
	}
	if(Blink === 3) {
		for(var i in players) {
			players[i].crystalhp = players[i].crystalhp*0.5;
		}
		Entities.Marksman.openShop();
		Entities.Eye.shootBeams();
		spawnEC();
	}
	if(Blink = 4) {
		Entities.Eye.atkable = true;
		spawnEC();
	}
	if(Blink = 5) {
		Entities.Marksman.closeShop();
		Entities.Activator.closeShop();
		Entities.Construction.closeShop();
		Entities.Eye.stopBeams();
	}
}
let startSleepPhase = function() {
	return;
}
let startBlindPhase = function() {
	return;
}

let getBaseData = function(id, data) {
	
	if(!BaseData[id]) {
		randomBase = Math.floor(Math.random()*(EmptyBases.length-1));
		BaseData[id].coordinates = EmptyBases[randomBase];
		EmptyBases.splice(randomline, 1);
	}
	if(data === 'x') {
		Number(BaseData[id].coordinates.split(',')[0]);
	}
	if(data === 'y') {
		Number(BaseData[id].coordinates.split(',')[1]);
	}
}
exports.getUpdates = function() {
	let data = {};
	for(var i in players) {
		players[i].updatePosition();	
	}
	data.players = players;
	return data;
}

exports.Blink = Blink;
exports.Time = Time;
exports.players = players;
exports.BaseData = BaseData;
exports.startBlink = startBlink;
exports.startSleepPhase = startSleepPhase;
exports.startBlindPhase = startBlindPhase;