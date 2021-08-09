// varriables
const btnReset = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const numberLabel = document.querySelector('.number');
const guessNum = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
let scoreHolder = 20;
const secretNum = Math.trunc(Math.random() * 20 + 1);
let playing = true;

btnCheck.addEventListener('click',() => {
  const value = Number(guessNum.value);
  guessNum.value = '';
  if (playing) {
    if (!value) {
      message.textContent = "No Number check for bor😏😏";
    } else if (value === secretNum) {
      message.textContent = "Lucky You Bro😎😎";
      numberLabel.textContent = secretNum;
      document.body.style.backgroundColor = '#60be47';
      if (scoreHolder > highScore.textContent) {
        highScore.textContent = scoreHolder;
      }
      playing = false;
      document.getElementById('heading').textContent = "Click Again to Continue Playing";
    } else if (value !== secretNum) {
      if (scoreHolder > 0) {
        message.textContent = value > secretNum ? 'Number Too Big Bro😋😋😋' : 'Number Too Small 🙄😑';
        score.textContent = --scoreHolder;
      } else {
        score.textContent = 0;
      }
    }
  }
});

btnReset.addEventListener('click',() => {
  playing = true;
  message.textContent = "Start guessing...";
  numberLabel.textContent = '?';
  scoreHolder = 20;
  score.textContent = 20;
  highScore.textContent = 0;
  document.body.style.backgroundColor = '#333';
  document.getElementById('heading').textContent = "GUESS MY NUMBER";
})