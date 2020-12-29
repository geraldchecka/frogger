// All game related data is maintained here
// Change Data to 'Model' concept
// Player model, Enemies model/collection, grid model etc...

function Data(assets) {
  const images = assets;
  const enemies = [
    {
      row: 2,
      col: 0,
      xDelta: -60,
      yDelta: -3,
      speed: 0,
    },
    {
      row: 3,
      col: 0,
      xDelta: -60,
      yDelta: -3,
      speed: 0,
    },
    {
      row: 4,
      col: 0,
      xDelta: -60,
      yDelta: -3,
      speed: 0,
    },
    {
      row: 5,
      col: 0,
      xDelta: -60,
      yDelta: -3,
      speed: 0,
    }
  ];
  const player = {
    col: 4,
    row: 7,
  };
  const gridConstants = Object.freeze({
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
  });

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
    enemies: {
      getEnemies: function() {
        return enemies;
      },
      setEnemies: function(cb) {
        enemies.map(enemy => {
          if (cb) {
            cb(enemy);
          }
          return enemy;
        });
      }
    },
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