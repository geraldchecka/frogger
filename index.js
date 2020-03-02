// OOPS and Animations
// invariant library for errors?

// We need a 6*5 grid
  // navigable
  // a matrix?

// https://www.youtube.com/watch?v=7PHhRrjgTDA
// ---> Emulating private members 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'

// Matrix Datastructure for holding the grid information
function Matrix () {
  var _value = 10;// void 0;
  // const rows, cols;

  // Initialise _gameMatrix with rows and cols

  // getters
    // getValue
    // traverseByRow
    // traverseByColumn
  // setters
    // set
    // setByRow
    // setByColumn
  // this.valueOf = function () {
  //   return 11;
  // };
  
  // this.size
  // this.format
  // this.traverseByRow = function () { };
  // this.traverseByColumn = function () { };
  // this.set = function () { };
  // this.setByRow = function () { };
  // this.setByColumn = function () { };

  Object.defineProperties(this, {
    value: {
      // memoized getters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
      get: function () {
        return _value;
      },
      set: function(val) {
        _value = val;
        return val;
      }
    },
    valueOf: {
      value: function () {
        return _value;
      }
    }
  });

  return this;
}

Matrix.prototype.test = function() {}

var tt = new Matrix();

// Grid Engine
// Contains additional methods for querying to know the grids whereabouts
function GridEngine() {
  // MatrixDataStructure
}
