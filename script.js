const container = document.querySelector('#container');
const resetButton = document.getElementById('reset-button');
// Store the new dimension-count and square-count in two consts
const dimensionDiv = document.getElementById('dimension-count');
const squareDiv = document.getElementById('square-count');
const initDimensions = 16;

drawGrid(initDimensions)
resetButton.addEventListener("click", resetGrid)

function drawGrid(dimensions) {
    let numOfSquares = Math.pow(dimensions, 2);
    let flexValue = 100/dimensions.toFixed(3);
    let flexDeclaration = flexValue + "%";
    let square
    for (i=1; i <= numOfSquares; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = flexDeclaration;
        square.addEventListener("mouseover", (e) => e.target.classList.add('black'));
        container.appendChild(square);
    }
    //textContent of dimension-count div to be “Dimensions: ${dimensions} x ${dimensions}
    dimensionDiv.textContent = `Dimensions: ${dimensions} x ${dimensions}`;
    // textContent of squares-count to be “No. of squares: ${numOfSquares} 
    squareDiv.textContent = `No. of Squares: ${numOfSquares}`;
}

function resetGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => container.removeChild(square));
    let userDimensions = +prompt("Enter in dimensions of the grid (max 100): ", 16);
    if (userDimensions > 100) userDimensions = 100;
    drawGrid(userDimensions)
}




