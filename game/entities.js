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
  constructor(x, y, id, role, armor, weapon) {
    super(x, y, id)
    this.role = role;
    this.armor = armor;
    this.weapon = weapon;
    this.inventory = [];
    this.regentime = 5;
    this.regenamt = 5;
    this.atkspd = 5;
    this.atk = 10;
    this.def = 10;
    this.spd = 10;
    this.hp = 100;
    this.crystalhp = 100;
  }
  death() {
    if(this.crystalhp === 0) {
      super.despawn();
    }
  }
}


