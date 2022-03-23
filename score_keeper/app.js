const playingToVal = document.querySelector('select');
const p1PlusOneBtn = document.querySelector('#p1button');
const p2PlusOneBtn = document.querySelector('#p2button');
const p1DisplayScore = document.querySelector('#p1DisplayScore');
const p2DisplayScore = document.querySelector('#p2DisplayScore');
const resetButton = document.querySelector('#reset');

let isGameOver = false;
let p1score = 0;
let p2score = 0;
let winningScore = 3;

p1PlusOneBtn.addEventListener('click', function() {
    if(!isGameOver) {
    p1score += 1;
    p1DisplayScore.textContent = p1score;
      if(p1score === winningScore) {
        isGameOver = true;
        p1DisplayScore.classList.add('win');
        p2DisplayScore.classList.add('lose');
      }
  }
});

p2PlusOneBtn.addEventListener('click', function() {
    if(!isGameOver) {
    p2score += 1;
    p2DisplayScore.textContent = p2score;
      if(p2score === winningScore) {
        isGameOver = true;
        p2DisplayScore.classList.add('win');
        p1DisplayScore.classList.add('lose');
      }
  }
});

playingToVal.addEventListener('change', function() {
   winningScore = parseInt(this.value);
   reset();
});

resetButton.addEventListener('click', reset) 

function reset() {
  isGameOver = false;
  p1score = 0;
  p2score = 0;
  p1DisplayScore.textContent = 0;
  p2DisplayScore.textContent = 0;
  p1DisplayScore.classList.remove('win', 'lose');
  p2DisplayScore.classList.remove('win', 'lose');
}