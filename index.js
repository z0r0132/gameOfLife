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
  return 0;
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
  let newBoard = [];
  return newBoard;
}

/**
 * get board in a way to visualize
 * @param {Array} board
 * @returns {String} Visible form of the board ( Maybe Dom Element )
 */
function drawBoard(board) {
  //display the board for every frame
  return "<div></div>";
}

function main() {
  // run getNewBoard unless the board is not changing from a frame to other.
  //draw board
}
module.exports = {
  getNewValue: getNewValue
};
