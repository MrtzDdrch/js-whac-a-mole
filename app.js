const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;

// function: randomly assign #mole to one of the .square
// assign an image along with the class
// add event listener
// it will be timed
// points need to be given for successful click


function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

squares.forEach(square => {
    square.addEventListener('mousedown' () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});


moveMole();