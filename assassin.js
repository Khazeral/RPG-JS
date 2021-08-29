class Assassin extends Character {
  constructor(
    name = "Carl",
    hp = 6,
    dmg = 6,
    mana = 20,
    shield = 0,
    status = "playing",
    shadowHit = false
  ) {
    super(name, hp, dmg, mana, shield, status);
    this.shadowHit = this.shadowHit;
  }

  disablePower = () => {
    if (this.shadowHit === true) {
      this.shield = 0;
      console.log("The effect of SHadow Hit fades away ");
      this.dmg = 6;
    }
  };

  power = () => {
    if (this.currentMana < 20) {
      return console.log("Don't have sufficient mana for this attack ");
    }
    this.dmg = 7;
    this.shadowHit = true;
    this.shield += 1000;
  };

  specialPower = () => {
    return "Shadow Hit";
  };
}
