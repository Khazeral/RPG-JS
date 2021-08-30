class Game {
  constructor(turnsNumber = 10, players = new Array()) {
    this.turnsNumber = turnsNumber;
    this.players = players;
  }

  initPlayers = () => {
    let player1 = new Fighter();
    let player2 = new Paladin();
    let player3 = new Assassin();
    let player4 = new Berzerker();
    let player5 = new Monk();
    this.players.push(player1, player2, player3, player4, player5);
  };

  newTurn = () => {
    this.turnsNumber--;
  };

  isOver = () => {
    console.log(this.players.length > 1 && this.turnsNumber >= 0);
    return (this.players.length > 1 && this.turnsNumber >= 0);
  };

  updatePlayers = () => {
    this.players = this.players.filter( (player) => player.status === "playing" );
    console.log(this.players);
  };

  showEveryoneStats = () => {
    console.log("------- Stats of every character -------");
    this.players.forEach((player) => {
      if (player.status === "playing") {
        console.log(player.showStats());
      }
    });
    console.log("----------------------------------------");
  };

  showMenu = (player) => {
    console.log("1 : Attack");
    console.log(`2 : Use ${player.getPowerName()}`);
    console.log("3 : Watch players stats");
    let choice = prompt("Select an action with a number");
    let authoriseAction = false;
    while (!authoriseAction) {
      switch (choice) {
        case "1":
          console.log("Who's the person you want to attack ? ");
          player.dealDamage(this.chooseEnemy(player));
          authoriseAction = true;
          break;
        case "2":
          authoriseAction = true;
          console.log(`You use your special attack : ${player.getPowerName()}`);
          if (
            player instanceof Fighter ||
            player instanceof Assassin ||
            player instanceof Paladin
          ) {
            console.log("Who do you want to cast this spell on ?");
            player.power();
            const victim = this.chooseEnemy(player);
            console.log(
              `${player.name} use ${player.getPowerName()} on ${victim.name}`
            );
            victim.takeDamage(player, player.dmg);
            break;
          } else {
            console.log(`${player.name} use ${player.getPowerName()}`);
            player.power();
          }
          break
        case "3":
          this.showEveryoneStats();
          console.log("1 : Attack");
          console.log(`2 : Use ${player.getPowerName()}`);
          console.log("3 : Watch players stats");
          choice = prompt("Select an action ( with 1, 2 or 3 )");
          break;
        default:
          choice = prompt("Select an action with a number");
          break;
      }
    }
  };

  finishGame = () => {
    this.updatePlayers();
    this.players.map((p) => (p.status = "winner"));
    console.log("-----------Winner(s)-----------");
    this.players.map((p) => {
      console.log(`Congratulation ${p.name}, you are alive !`);
    });
    console.log("-------------------------------");
  };

  chooseEnemy = (player) => {
    const enemies = this.players.filter((e) => e !== player);
    let indexEnemy = 1;
    enemies.forEach( (enemy) => {
      console.log(`${indexEnemy} ) ${enemy.showStats()}`);
      enemy.index = indexEnemy;
      indexEnemy++;
    });

    const selectedEnemy = prompt("Enter the number of your choice");
    let start = false;

    while (!start) {
      for (let i = 0; i < enemies.length; i++) {
        const enemyChoosen = enemies[i];
        if (enemyChoosen.index === selectedEnemy) {
          start = true;
          return enemyChoosen;
        }
      }
    }

    if (!start) {
      selectedEnemy = prompt("This answer is not possible, try again");
    }
  };
}
