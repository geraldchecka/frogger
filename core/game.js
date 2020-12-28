import Grid from './grid.js';
import Player from './player.js';
// import Enemy from './enemy.js';
import Data from './data.js';
import Resources from './resources.js';


function Game(assets) {
  this.data = new Data(assets);
  this.grid = new Grid('frogger-gameboard', this.data.api.grid.getGridInfo);
  // this.player = new Player();
  // this.enemies = [new Enemy()]; // Fix later
  this.grid.draw(
    this.data.api.grid,
    this.data.api.player,
    this.data.api.enemies,
  );

  // To remote later
  // function randomiseRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // setInterval(() => {
  //   this.data.api.player.setPlayerPosition(
  //     randomiseRange(0, 7),
  //     randomiseRange(0, 8)
  //   );
  // }, 3000)

  // Player, Enemy and Prize have their own drawing logic. So pass canvas 'context' around.
    // Expose public methods accordingly
  // 
}

Resources
  .initiate()
  .then(res => {
    window.frogger = new Game(res);
  })
  .catch(err => {
    console.log(err);
  });

export default Game;
// Initialise the game controls
// Initialise enemy random marquee effect


// learnings
  // dep injection
  // constructor injection
  // separation of concern
  // encapsulation (game)
  // facade patterns ?(Game.js as it acts like controller and god like class)