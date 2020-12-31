import Grid from './grid.js';
import Player from './player.js';
import Enemy from './enemy.js';
import Data from './data.js';
import Resources from './resources.js';


function Game(assets) {
  // rename data to model
  this.data = new Data(assets);
  this.grid = new Grid(
    'frogger-gameboard',
    this.data.model.grid
  );
  this.player = new Player(
    this.data.model.grid,
    this.data.model.player,
  );
  this.enemies = new Enemy(
    this.data.model.enemies,
  );
  this.grid.draw(
    this.data.model.grid,
    this.data.model.player,
    this.data.model.enemies,
  );
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
  // MVC pattern