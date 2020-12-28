// All game related data is maintained here
// Change Data to 'Model' concept
// Player model, Enemies model/collection, grid model etc...

function Data(assets) {
  // Images from remote assets
  const images = assets;
  
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

  this.model = {
    player: {
      getPosition: function() {
        return player;
      },
      setPosition: function(row, col) {
        player.row = row;
        player.col = col;
      },
    },
    enemies: {},
    grid: {
      getGridInfo: function() {
        return gridConstants;
      },
      getImages: function() {
        return images;
      },
    }
  };

  // moveEnemies = function() {};
}

export default Data;