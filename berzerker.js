

class Berzerker extends Character {


    constructor( name = "Draven" ,hp = 8, dmg = 4, mana = 0, shield=0, status="playing", rage = false) {
        super(name, hp, dmg, mana, shield, status);
        this.rage = rage;
    }

    powerOff = () => {};

    power = () => {
        this.currentHp -= 1;
        this.dmg += 1;
    }

    specialPower = () => {
        return "Rage";
    }

}