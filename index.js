/**
 * Get the neighbors array ( an array of Boolean)
 * 
 * @param {Object} currentCellPositions 
 * @param {Number} currentCellPositions.x 
 * @param {Number} currentCellPositions.y 
 * @param {Array} currentBoard 2 dimension array
 * 
 * @returns {Array} neighbors values up to 8
 */
function getNeighbors ( currentCellPositions, currentBoard) {
    return [];
}

/**
 * Get the new value depending of the neighbors
 * 
 * @param {Boolean} currentValue 
 * @param {Array} neighbors 
 * 
 * @returns {Boolean} new value
 */
function getNewValue(currentValue, neighbors){
    return true;
}

/**
 * get new board for an iteration
 * 
 * @param {Array} currentBoard 
 * @returns {Array} newBoard 
 */
function getNewBoard( currentBoard ){
    //go throw every cell
    // check neighbors using getNeighbors
    // get new value of the cell using getNewValue
    let newBoard = [];
    return newBoard;
}

function drawBoard(board) {
    //display the board for every frame
}

function main(){
    // run getNewBoard unless the board is not changing from a frame to other.
    //draw board
}
