'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 27;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('Please Enter a Number!');
    // document.querySelector('.message').textContent = 'Please Enter a Number!';
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    // document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  }

  // Refactored code for wrong guesses
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Number too big! Choose a smaller one'
          : 'Number too small! Choose a bigger one'
      );
      // document.querySelector('.message').textContent =
      // guess > secretNumber
      //   ? 'Number too big! Choose a smaller one'
      //   : 'Number too small! Choose a bigger one';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Please Enter a Number!');
  // document.querySelector('.message').textContent = 'Please Enter a Number!';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
//When doesn't win, too big

// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'Number too big! Choose a smaller one';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Game Over!';
//     document.querySelector('.score').textContent = 0;
//   }

//When doesn't win, too small

//  else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'Number too small! Choose a bigger one';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Game Over!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });
