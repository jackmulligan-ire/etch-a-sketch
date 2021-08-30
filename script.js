const container = document.querySelector('#container');
// Get the button element and store in a const resetButton
const resetButton = document.getElementById('reset-button');
const numOfSquares = 256;

let squareElem;
for (i=1; i <= numOfSquares; i++) {
    squareElem = document.createElement('div');
    squareElem.classList.add('square');
    container.appendChild(squareElem);
}
const squares = document.querySelectorAll('.square');
squares.forEach((square) => 
    square.addEventListener("mouseover", () => square.classList.add('black')))

// Write an eventListener onto the button for click
resetButton.addEventListener("click", () => 
    // On click, foreach square in squares, run square.ClassList.remove('black)
    squares.forEach(square => square.classList.remove('black')))



