class Armor {
    constructor(id, def, heaviness) {
        this.id = id;
        this.def = def;
        this.heaviness = heaviness;
		this.isActive = false;
    }
}

let Plague = new Armor('Plague', 3, 3);

let scorch = new Armor('Scorch', 2, 1);

let grove = new Armor('Grove', 1, 3);

let stream = new Armor('Stream', 3, 3);

let mysterious = new Armor('Mysterious', 2, 1);

exports.Plague = Plague;