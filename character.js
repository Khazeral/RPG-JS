

class Character {
    constructor(name = "", hp = 1, dmg = 1, mana = 1, shield=0, status="playing", index=0) {
        this.name = name;
        this.currentHp = hp;
        this.maxHp = hp;
        this.dmg = dmg;
        this.currentMana = mana;
        this.maxMana = mana;
        this.shield = shield;
        this.status = status;
    }

    
    dealDamage = (enemy) => {
        console.log(`${this.name} attack ${this.dmg} points on ${enemy.name} !`);
        enemy.takeDamage(this, this.dmg);
         
    }

    showStats = () => {
        return `${this.name} : ${this.currentHp}/${this.maxHp} HP || ${this.currentMana}/${this.maxMana} MANA || ${this.shield} DEF || ${this.dmg} ATT `;
    }

    takeDamage = (enemy, dmg) => {
        let receivedDamage = dmg - this.shield;
        if(receivedDamage < 0) {
            receivedDamage = 0;   // to avoid gain on health point because negatif integer
            console.log(`The attack was blocked`);
        }
        this.currentHp -= receivedDamage;
        console.log(`${this.name} was attacked by ${enemy.name} and loses ${receivedDamage} points !`);
        if(this.currentHp <= 0) {
            this.currentHp = 0;
            console.log(`${this.name} is dead !`);
            enemy.isKiller();
            this.status = "loser";
        }
    }

    isKiller = () => {
        console.log(`${this.name} won 20 mana !`);
        if( (this.currentMana + 20) < this.maxMana){
            this.currentMana += 20;
        }else{
            this.currentMana = this.maxMana;
        }
    }
}

