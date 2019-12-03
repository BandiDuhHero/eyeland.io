class Sword {
    constructor(id, atk, atkspd, heaviness) {
        this.id = id;
        this.power = atk;
        this.heaviness = heaviness;
    }
}
let Infected = new Sword('Infected', 2, 1);

exports.Infected = Infected;