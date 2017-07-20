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

// some quoted that will be automatically generated on the page when the restart button is pressed
var quotes = [
  '“ Good judgement is the result of experience and experience the result of bad judgement. ” - Mark Twain',
  '" Insanity: doing the same thing over and over again and expecting different results. " - Albert Einstein',
  '" When written in Chinese, the word "crisis" is composed of two characters. One represents danger, the other opportunity. " - John F. Kennedy',
  '“ Be the change that you wish to see in the world. ” - Mahatma Gandhi',
  '“ If debugging is the process of removing software bugs, then programming must be the process of putting them in.” - Edsger Dijkstra',
  '“ Java is to JavaScript what Car is to Carpet. ” - Chris Heilmann',
  '“ Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ” - Martin Fowler',
  '“ First, solve the problem. Then, write the code. ” - John Johnson',
  '“ Be nice to nerds. Chances are you’ll end up working for one. ” — Bill Gates',
  '“ Try not. Do, or do not. There is no try. ” – Yoda, The Empire Strikes Back'
];

for (var i = 0; i < input.length; i++) {
  // console.log(i);
  for (var j = 0; j < input.length; j++) {
    console.log(j);
  }
}

var rand = Math.floor(Math.random()*(quotes.length-0)+0);
result.textContent = quotes[rand];

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
  var ran = Math.floor(Math.random()*(quotes.length-0)+0);
  result.textContent = quotes[ran];
  var squares = document.querySelectorAll('#board div');
  for (var i = 0; i < squares.length; i++) {
    squares[i].className = 'inputDiv';
  }
});

// a functuon to check which sign won then increasing the score by 1 then updating the DOM
function scoreboard() {
  if (sign === 'X') {
    scoreX ++;
    scoreXDiv.textContent = 'X: ' + '[' + scoreX + ']';
  } else {
    scoreO ++;
    scoreODiv.textContent = 'O: ' + '[' + scoreO + ']';
  }
}
