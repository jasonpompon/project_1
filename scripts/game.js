// a nested array to hold the value of x or o when user register a click
var input = [
  [00,01,02],
  [10,11,12],
  [20,21,22]
];

var playerTurn = 0;
var sign = '';
var gameState = true;
var scoreO = 0;
var scoreX = 0;

// variance to link each div from DOM
var boardDiv = document.querySelector('#board');
var result = document.querySelector('#resultDiv');
var restartBtn = document.querySelector('#restart-btn');
var scoreODiv = document.querySelector('#oScore');
var scoreXDiv = document.querySelector('#xScore');

// function to determine who won
function ticTacToe() {
  // declare a winner when 3cosecutive sign is found
  if (input[0][0] === input[1][1] && input[1][1] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[0][2] === input[1][1] && input[1][1] === input[2][0]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[0][0] === input[1][0] && input[1][0] === input[2][0]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[0][1] === input[1][1] && input[1][1] === input[2][1]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[0][2] === input[1][2] && input[1][2] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[0][0] === input[0][1] && input[0][1] === input[0][2]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[1][0] === input[1][1] && input[1][1] === input[1][2]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if(input[2][0] === input[2][1] && input[2][1] === input[2][2]) {
    result.textContent = sign + ' is the WINNER!';
    scoreboard();
    gameState = false;
  } else if (playerTurn >= 9)  {
    result.textContent = 'DRAW!';
    gameState = false;
  }
}



// adding an even listener on the board div then using event.target to target individual divs in the playing area
boardDiv.addEventListener('click', function(event) {
  if (gameState === true) {
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

// adding an event listener to the restart button so that it reset all the variables and the boad's display
restartBtn.addEventListener('click', function() {
  input = [
    [00,01,02],
    [10,11,12],
    [20,21,22]
  ];
  playerTurn = 0;
  sign = '';
  gameState = true;
  result.textContent = '“Be the change that you wish to see in the world.” - Mahatma Gandhi';
  var squares = document.querySelectorAll('#board div');
  for (var i = 0; i < squares.length; i++) {
    squares[i].className = 'inputDiv';
  }
});

// a functuon to check which sign won then increasing the score by 1 then updating the DOM
function scoreboard() {
  if (sign === 'X') {
    scoreX ++;
    scoreXDiv.textContent = 'X: ' + scoreX;
  } else {
    scoreO ++;
    scoreODiv.textContent = 'O: ' + scoreO;
  }
}

// fix the scoreboard function

// *** bonus set a function/variable that randomly generate a quote from list of quotes from my facebook profile ***
// when they click on restart
