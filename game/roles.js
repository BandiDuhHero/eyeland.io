class Role {
    constructor(id, def, heaviness) {
        this.id = id;
        this.def = def;
        this.heaviness = heaviness;
		this.isActive = false;
    }
}

let Masochist = new Role('Plague', 3, 3);

let scorch = new Role('Scorch', 2, 1);

let grove = new Role('Grove', 1, 3);

let stream = new Role('Stream', 3, 3);

let mysterious = new Role('Mysterious', 2, 1);

exports.Masochist = Masochist;

exports.grove = grove;

exports.scorch = scorch;

exports.stream = stream;
