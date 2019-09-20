class Entity {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }
  despawn() {
    this.x = 0;
    this.y = 0;
    delete this;
  }
}

class Player extends Entity {
  constructor(x, y, id, role, armor, weapon, base) {
    super(x, y, id);
    this.role = role;
    this.armor = armor;
    this.weapon = weapon;
    this.base = base;
    this.inventory = [];
    this.regentime = 5;
    this.regenamt = 5;
    this.atkspd = 1;
    this.atk = 10;
    this.def = 2;
    this.spd = 1;
    this.hp = 100;
    this.crystalhp = 100;
  }
  attack(targ) {
    if(targ.id = 'eye') {
      targ.hp -= targ.atk/10;
    }
    if(targ.id = 'crystal') {
      targ.hp -= targ.atk/5;
    }
    else {
      targ.hp -= targ.atk/targ.def; 
    }
    
  }
  spawn(loc) {
    if(loc = 'base') {
      var base = this.base.split(',');
      this.x = parseInt(base[0]);
      this.y = parseInt(base[1]);
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


