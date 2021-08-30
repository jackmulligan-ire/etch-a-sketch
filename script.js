const container = document.querySelector('#container');
const squareElem = document.createElement('div');
squareElem.classList.add('square');
squareElem.addEventListener("mouseover", () => squareElem.classList.add('black'))
container.appendChild(squareElem);