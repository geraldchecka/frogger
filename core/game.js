import Grid from './grid.js';
import Player from './player.js';
// import Enemy from './enemy.js';
import Data from './data.js';
import Resources from './resources.js';


function Game(assets) {
  debugger;
  // call the data class and fetch data objects
  this.data = new Data(assets);
  this.grid = new Grid('frogger-gameboard', this.data);
  // this.player = new Player();
  // this.enemies = [new Enemy()]; // Fix later
  this.grid.init(this.data.getImages, this.data.getPlayerPosition);
  // Player, Enemery and Prize have their own drawing logic. So pass canvas 'context' around.
    // Expose public methods accordingly

  // 
}

Resources
  .initiate()
  .then(res => {
    debugger;
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