const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;

// function: randomly assign #mole to one of the .square
// assign an image along with the class
// add event listener
// it will be timed
// points need to be given for successful click


function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });
}


