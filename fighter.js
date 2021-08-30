class Fighter extends Character {
  constructor(
    name = "Grace",
    hp = 12,
    dmg = 4,
    mana = 40,
    shield = 0,
    status = "playing",
    darkVision = false
  ) {
    super(name, hp, dmg, mana, shield, status);
    this.darkVision = darkVision;
  }

  powerOn = () => {};

  disablePower = () => {
    if (this.darkVision) {
      this.shield = 0;
      console.log("The effect of Dark Vision fades away ");
      this.dmg = 4;
    }
  };

  power = () => {
    if (this.currentMana < 20) {
      return console.log("Don't have sufficient mana for this attack ");
    }
    this.dmg = 5;
    this.currentMana -= 20;
    this.shield += 2;
    this.darkVision = true;
  };

  getPowerName = () => {
    return "Dark Vision";
  };
}
