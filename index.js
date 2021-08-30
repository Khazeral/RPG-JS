const shufflePlayers = (players) => {
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }
  return players;
};

const gameStart = () => {
  const game = new Game();
  game.initPlayers();
  const playersList = shufflePlayers(game.players);
  console.log("Welcome to the war !");
  console.log("-----------------------------------------");
  while (game.isOver()) {
    console.log(`Turn n°${game.turnsNumber}`);
    console.log("-----------------------------------------");
    playersList.forEach((player) => {
      console.log(`It's the turn of ${player.name}`);
      console.log(player.showStats());
      console.log(`What do you will do ${player.name} ?`);
      game.showMenu(player);
      // put a menu to select action for player
      game.updatePlayers();
      console.log(`--------------------------------------------`);
      console.log(`End of ${player.name}'s turn, press Enter to continue`);
      prompt(`End of ${player.name}'s turn, press Enter to continue`);
      console.clear();
    });

    console.log(`--------------------------------------------`);


    playersList.forEach((player) => {
      if (player.status == "playing") {
        player.disablePower();
      }
    });

    game.newTurn();
  }
  game.finishGame();
};

document.getElementById("startButton").addEventListener("click", gameStart);
