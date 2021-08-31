const container = document.querySelector('#container');
const resetButton = document.getElementById('reset-button');
const initDimensions = 16;
drawGrid(initDimensions)
let squares = document.querySelectorAll('.square');
// Adding the event listener for the initial squares
squares.forEach((square) => 
    square.addEventListener("mouseover", () => square.classList.add('black')));
resetButton.addEventListener("click", resetGrid)

function drawGrid(dimensions) {
    let numOfSquares = Math.pow(dimensions, 2);
    let squareElem;
    for (i=1; i <= numOfSquares; i++) {
    squareElem = document.createElement('div');
    squareElem.classList.add('square');
    // squareElem.textContent = `${i}`;s //for seeing problems with columns and rows
    container.appendChild(squareElem);
    }
}
function resetGrid() {
    squares.forEach(square => container.removeChild(square));
    let userDimensions = prompt("Enter in dimensions of the grid (max 100: ", 16);
    if (userDimensions > 100) userDimensions = 100;
    drawGrid(userDimensions)
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => 
        square.addEventListener("mouseover", () => square.classList.add('black')));
}




