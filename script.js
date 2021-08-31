const container = document.querySelector('#container');
const resetButton = document.getElementById('reset-button');
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
}

function resetGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => container.removeChild(square));
    let userDimensions = +prompt("Enter in dimensions of the grid (max 100: ", 16);
    if (userDimensions > 100) userDimensions = 100;
    drawGrid(userDimensions)
}




