class Paladin extends Character {
  constructor(
    name = "Ulder",
    hp = 16,
    dmg = 3,
    mana = 160,
    shield = 0,
    status = "playing",
    healingLightning = false
  ) {
    super(name, hp, dmg, mana, shield, status);
    this.healingLightning = healingLightning;
  }

  disablePower = () => {
    if (this.healingLightning) {
      console.log("The effect of Healing Lightning fades away ");
      this.dmg = 3;
    }
  };

  power = () => {
    this.dmg = 4;
    if (this.currentHp + 5 <= this.maxHp) {
      this.currentHp += 5;
    }
    this.currentMana -= 40;
    this.healingLightning = true;
  };

  getPowerName = () => {
    return "Healing Lightning";
  };
}
