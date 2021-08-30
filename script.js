const container = document.querySelector('#container');
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

