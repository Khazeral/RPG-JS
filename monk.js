class Monk extends Character {
  constructor(
    name = "Moana",
    hp = 8,
    dmg = 2,
    mana = 200,
    shield = 0,
    status = "playing",
    healing = false
  ) {
    super(name, hp, dmg, mana, shield, status);
    this.healing = healing;
  }

  disablePower = () => {};

  power = () => {
    if (this.currentHp + 8 > this.maxHp) {
      this.currentHp += 8;
    }
    this.currentMana -= 25;
  };

  getPowerName = () => {
    return "Healing";
  };
}
