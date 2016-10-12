// writing variables on top


var input = [
  [00,01,02],
  [10,11,12],
  [20,21,22]
];

var playerTurn = 0;

var sign = '';

// variance to link each div from DOM
var boardDiv = document.getElementById('board');

console.log(input);

function ticTacToe() {
  // declare a winner when 3
  if (input[0][0] === input[1][1] && input[1][1] === input[2][2]) {
    console.log('WINNER');
  } else if(input[0][2] === input[1][1] && input[1][1] === input[2][0]) {
    console.log('WINNER');
  } else if(input[0][0] === input[1][0] && input[1][0] === input[2][0]) {
    console.log('WINNER');
  } else if(input[0][1] === input[1][1] && input[1][1] === input[2][1]) {
    console.log('WINNER');
  } else if(input[0][2] === input[1][2] && input[1][2] === input[2][2]) {
    console.log('WINNER');
  } else if(input[0][0] === input[0][1] && input[0][1] === input[0][2]) {
    console.log('WINNER');
  } else if(input[1][0] === input[1][1] && input[1][1] === input[1][2]) {
    console.log('WINNER');
  } else if(input[2][0] === input[2][1] && input[2][1] === input[2][2]) {
    console.log('WINNER');
  } else {
    console.log('NOWINNER');
  }
}




boardDiv.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV' ) {
    playerTurn ++;
    switchPlay();
    if (sign === 'X') {
      event.target.style.backgroundImage= 'url("images/Xicon.png")';
    } else {
      event.target.style.backgroundImage= 'url("images/O.png")';
    }
    var dataRow = parseInt( event.target.getAttribute('data-row'), 10);
    var dataCol = parseInt( event.target.getAttribute('data-column'), 10);
    input[dataRow][dataCol] = sign;
    ticTacToe();
  }
});




function switchPlay() {
  if (playerTurn%2 !== 0) {
    sign = 'X';
  } else {
    sign = 'O';
  }
}
