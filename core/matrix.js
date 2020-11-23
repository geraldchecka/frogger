// Game grid default size are 6 x 5; Indices 0 & 1 indicate rows & columns.
const GRID_SIZE = {
  rows: 6,
  columns: 5
};

const GAME_CHARACTERS = {
  origin: 5,
  destination: 0,
  frog: 1,
  obstacle: -1
};

const GRID_LOOKS = {
  0: "destination",
  1: "troubled waters",
  2: "troubled waters",
  3: "troubled waters",
  4: "troubled waters",
  5: "origin"
};

// This matrix position is also the starting position of frog in the game.
const LAST_KNOWN_POSITION = [5,2];

function initialise(rows = GRID_SIZE.rows, columns = GRID_SIZE.columns) {
  let _matrix = [...Array(rows).fill([...Array(columns)])];
  // pipelines
  _matrix.map(row => {
    debugger;

    return row;
  })
}

// Matrix Datastructure for holding the grid information
export function Matrix (rows, columns) {
  var _gameMatrix;

  // Initialise _gameMatrix with rows and cols
  _gameMatrix = initialise(rows, columns);
}

// Single inheritance from Array
Matrix.prototype = Object.create(Array.prototype);
Object.defineProperty(Matrix.prototype, 'constructor', {
  value: Matrix,
  enumerable: false,
  writable: true,
  configurable: false
});
console.log(new Matrix());
console.log(R.compose);
