/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice, currentPlayer, scores, roundScore;
scores = [0, 0];
dice = Math.floor(Math.random()*6)+1;
activePlayer = 1;
roundScore = 0;
console.log(dice);

document.querySelector('#current-'+activePlayer).textContent = dice;

//Practice adding the roundScore, or just dice, to Player1's global score..
scores[activePlayer]+=dice;
document.querySelector('#score-'+activePlayer).textContent = ''+scores[activePlayer];
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
  //This is an anonymous function, I could have put the name of this function here, and defined it elsewhere to be reused,
  //but in our case, we only need it here, so why skip naming it, and just put it here?
  //1. Random number
  dice = Math.floor(Math.random()*6)+1;
  //2. Display the result.
  document.querySelector('#current-'+activePlayer).textContent = dice;
  //3. Update the roundScore IF the rolled number was not a 1.
  if (dice!==1){
    roundScore += dice;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;

  } else {
    scores[activePlayer] = 0;
    document.querySelector('#score-'+activePlayer).textContent = '0';
  }







})
