// All game related data is maintained here
function Data(assets) {
  // Images from remote assets
  const images = assets;
  
  debugger;
  // Game entities
  const enemies = {};

  const player = {
    col: 4,
    row: 7,
  };

  const gridConstants = {
    rows: 8,
    cols: 9,
    colWidth: 60,
    colHeight: 90,
    vTransp: 26,
    gameBoard: [
      "water",
      "water",
      "stone",
      "stone",
      "stone",
      "stone",
      "grass",
      "grass"
    ],
  };

  this.getGridInfo = function() {
    return gridConstants;
  };

  this.getImages = function() {
    return images;
  };

  this.getPlayerPosition = function() {
    return player;
  };

  this.setPlayerPosition = function(row, col) {
    player.row = row;
    player.col = col;
  };
  // moveEnemies = function() {};
}

export default Data;