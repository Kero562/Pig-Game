'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

score0.textContent = 0;
score1.innerHTML = 0;


//another way, using class instead of ids:

/*const score0 = document.querySelectorAll('.score');

for(let i = 0; i < score0.length; i++) {
    score0[i].textContent = 0;
}
*/

const dice = document.querySelector(".dice");
dice.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const diceRoll = document.querySelector(".btn--roll");
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

diceRoll.addEventListener("click", function() {
    if (playing) {
    //let generatedNumber = Math.trunc(Math.random()*7) -> will include 0
    let generatedNumber = Math.trunc(Math.random() *6 ) + 1 // won't include 0

    dice.classList.remove('hidden')
    dice.src = `dice-${generatedNumber}.png`

    if (generatedNumber !== 1) {
        currentScore += generatedNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
}
})

diceHold.addEventListener('click', function() {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        if (score[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            playing = false;
            dice.classList.add('hidden')
        } else {
        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        }
    }
        
})
/*const endGame = document.querySelectorAll('.score')

for (let i = 0; i < endGame.length; i++) {
    if (Number(endGame[i]) >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
}
*/

const newGame = document.querySelector('.btn--new');

newGame.addEventListener('click', function() {
    currentScore = 0;
    score[0] = 0;
    score[1] = 0;

    const scoreAll = document.querySelectorAll('.score');
for(let i = 0; i < scoreAll.length; i++) {
    scoreAll[i].textContent = 0;
}

const CscoreAll = document.querySelectorAll('.current-score');
for(let j = 0; j < CscoreAll.length; j++) {
    CscoreAll[j].textContent = 0;
}

document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
player0El.classList.add('player--active')
player1El.classList.remove('player--active')
activePlayer = 0;
playing = true;
})