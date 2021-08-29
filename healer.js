class Healer extends Character {


    constructor( name = "Grace" ,hp = 12, dmg = 4, mana = 40, shield=0, status="playing", darkVision = false) {
        super(name, hp, dmg, mana, shield, status);
        this.darkVision = darkVision;
    }
    
    healingLighting = (ennemy) => {
        ennemy.dmg -= 4;
        this.hp += 5;
        this.mana -= 40;
    }

    hit = (dmg) => {
        this.hp -= dmg;
    }

}