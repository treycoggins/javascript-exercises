const p1 = {
  score: 0,
  button: document.querySelector('#p1button'),
  display: document.querySelector('#p1DisplayScore'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2button'),
  display: document.querySelector('#p2DisplayScore')
};


const winningScoreSelect = document.querySelector('select');
const resetButton = document.querySelector('#reset');
let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent) {
  if(!isGameOver) {
    player.score += 1;
      if(player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('win');
        opponent.display.classList.add('lose');
        player.button.disabled = true;
        opponent.button.disabled = true;
      }

      player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function() {
   winningScore = parseInt(this.value);
   reset();
});

resetButton.addEventListener('click', reset) 

function reset() {
  isGameOver = false;
  for(let p of [p1,p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('win', 'lose');
    p.button.disabled = false;
  }

// moved code below into the loop above
// ------------------------------------
//   p1.score = 0;
//   p2.score = 0;
//   p1.displayScore.textContent = 0;
//   p2.displayScore.textContent = 0;
//   p1DisplayScore.classList.remove('win', 'lose');
//   p2DisplayScore.classList.remove('win', 'lose');
//   p1.button.disabled = false;
//   p1.button.disabled = false;

}