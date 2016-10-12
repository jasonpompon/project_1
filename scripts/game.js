// writing variables on top

var input = [
  [00,01,02],
  [10,11,12],
  [20,21,22]
];

var playerTurn = 0;
var sign = '';
var gameState = true;

// variance to link each div from DOM
var boardDiv = document.getElementById('board');
var result = document.getElementById('resultDiv');


// function to determine who won
function ticTacToe() {
  // declare a winner when 3cosecutive sign is found
  if (input[0][0] === input[1][1] && input[1][1] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[0][2] === input[1][1] && input[1][1] === input[2][0]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[0][0] === input[1][0] && input[1][0] === input[2][0]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[0][1] === input[1][1] && input[1][1] === input[2][1]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[0][2] === input[1][2] && input[1][2] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[0][0] === input[0][1] && input[0][1] === input[0][2]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[1][0] === input[1][1] && input[1][1] === input[1][2]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if(input[2][0] === input[2][1] && input[2][1] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    gameState = false;
  } else if (playerTurn >= 9)  {
    result.textContent = 'DRAW!';
    gameState = false;
  }
}



// adding an even listener on the board div then using event.target to target individual divs in the playing area
boardDiv.addEventListener('click', function(event) {
  if (gameState = true) {
    if (event.target.className !== 'x' && event.target.className !== 'o') {
      if (event.target.tagName === 'DIV') {
      playerTurn ++;
      switchPlay();
      if (sign === 'X') {
        event.target.className = 'x';
      } else {
        event.target.className = 'o';
      }
      var dataRow = parseInt( event.target.getAttribute('data-row'), 10);
      var dataCol = parseInt( event.target.getAttribute('data-column'), 10);
      input[dataRow][dataCol] = sign;
      ticTacToe();
    }
   }
  }
});


// function to alternate between X and O
function switchPlay() {
  if (playerTurn%2 !== 0) {
    sign = 'X';
  } else {
    sign = 'O';
  }
}

// *** gameState not working properly??????? ***

// **** restart button ****
// when clicked on:
// 1) change all div's class to none so that all the images goes away
// reset the input array
// reset playerTurn to 0
// reset sign to ''
// reset gameState to true
// empty resultDiv

// *** need a 2 variable to keep score of x and o wins ***
// then display it on the screen
