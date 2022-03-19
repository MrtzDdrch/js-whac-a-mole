const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

function moveMole(){
    
    timerId = setInterval(randomSquare, 700);
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function countDown(){
    currentTime--;
    time.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(time);
        alert('Game Over! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000)

moveMole();