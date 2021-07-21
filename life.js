// what is a neighbor for a cell?
// [x][y]  -> any cell with x -+1 and y -+1
// unless x or y are 0 or maximum col or row
function checkRow(i, arr, skipCurrent) {
  var arrLength = arr.length;
  var counter = 0;
  if (i > 0 && arr[i - 1]) counter++;
  if (!skipCurrent && arr[i]) counter++;
  if (i < arrLength - 1 && arr[i + 1]) counter++;

  return counter;
}
function checkCurrentRow(i, arr) {
  return checkRow(i, arr, true);
}
/**
 * Get the number of alive neighbor cells
 *
 * @param {Object} currentCellPositions
 * @param {Number} currentCellPositions.x
 * @param {Number} currentCellPositions.y
 * @param {Array} currentBoard 2 dimension array
 *
 * @returns {Number} number of alive neighbor cells
 */
function getAliveNeighborsNumber(currentCellPositions, currentBoard) {
  var rowsNumber = currentBoard.length;
  var x = currentCellPositions.x;
  var y = currentCellPositions.y;
  var aliveNumber = 0;
  if (y > 0) aliveNumber += checkRow(x, currentBoard[y - 1]);
  if (y < rowsNumber - 1) aliveNumber += checkRow(x, currentBoard[y + 1]);
  aliveNumber += checkCurrentRow(x, currentBoard[y]);
  return aliveNumber;
  //TODO: no need for the number only if 2 or 3 or more is enough
}

/**
 * Get the new value depending of the neighbors
 *
 * @param {Boolean} currentValue
 * @param {Number} aliveNeighborsNumber
 *
 * @returns {Boolean} new value
 */
function getNewValue(currentValue, aliveNeighborsNumber) {
  return (
    aliveNeighborsNumber === 3 || (currentValue && aliveNeighborsNumber === 2)
  );
}

/**
 * get new board for a frame
 *
 * @param {Array} currentBoard
 * @returns {Array} newBoard
 */
function getNewBoard(currentBoard) {
  //go throw every cell
  // check neighbors using getNeighbors
  // get new value of the cell using getNewValue
  var rowsNumber = currentBoard.length;
  var colsNumber = currentBoard[0].length;
  let newBoard = [...Array(rowsNumber)].map(e => Array(colsNumber));
  (y = 0), (x = 0);
  for (y = 0; y < rowsNumber; y++) {
    for (x = 0; x < colsNumber; x++) {
      newBoard[y][x] = getNewValue(
        currentBoard[y][x],
        getAliveNeighborsNumber({ x: x, y: y }, currentBoard)
      );
    }
  }
  return newBoard;
}

/**
 * get board in a way to visualize
 * @param {Array} board
 * @returns {String} Visible form of the board ( Maybe Dom Element )
 */
function drawBoard(board) {
  var rowsNumber = board.length;
  var colsNumber = board[0].length;
  var y = 0,
    x = 0,
    resultRow;
    result = "";
  for (y = 0; y < rowsNumber; y++) {
    resultRow = "";
    for (x = 0; x < colsNumber; x++) {
      resultRow += board[y][x] ? "o" : "&nbsp;";
    }
    result += "<div>"+resultRow+"</div>";
  }
  document.getElementById("root").innerHTML = result;
  return result;
}

function main(board) {
  setInterval(function() {
    var newBoard = getNewBoard(board);
    drawBoard(newBoard);
    board = newBoard;
    console.log('\n')
  }, 300);
  // run getNewBoard unless the board is not changing from a frame to other.
  //draw board
}

// module.exports = {
//   getNewValue: getNewValue,
//   checkRow: checkRow,
//   main: main
// };
