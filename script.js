const container = document.querySelector('#container');
const resetButton = document.getElementById('reset-button');
const initDimensions = 16;
let squares; 
drawGrid(initDimensions)
resetButton.addEventListener("click", resetGrid)

function drawGrid(dimensions) {
    let numOfSquares = Math.pow(dimensions, 2);
    // Declare flexValue = 100/dimensions.toFixed(3);
    let flexValue = 100/dimensions.toFixed(3);
    // Declare flexDeclaration = flexValue + "%"
    let flexDeclaration = flexValue + "%";
    // Declare var squareStyle
    let squareElem
    for (i=1; i <= numOfSquares; i++) {
        squareElem = document.createElement('div');
        squareElem.classList.add('square');
        // declare flex of squareElem to be flexDeclaration
        squareElem.style.flex = flexDeclaration;
        //squareElem.textContent = `${i}`; //for seeing problems with columns and rows
        container.appendChild(squareElem);
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => 
        square.addEventListener("mouseover", () => square.classList.add('black')));
}
function resetGrid() {
    squares.forEach(square => container.removeChild(square));
    let userDimensions = +prompt("Enter in dimensions of the grid (max 100: ", 16);
    if (userDimensions > 100) userDimensions = 100;
    drawGrid(userDimensions)
}




