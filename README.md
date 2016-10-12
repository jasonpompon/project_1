
# project_1


<!-- *** this is how to do a nested loop to put some string in a nested array *** -->

function makeArray(x, y) {
  var array = [];
  for(var i = 0; i < y; i++){
    var tempRow = [];
    for(var j = 0; j < x; j++){
      tempRow[j] = "A";
    }
    array[i] = tempRow;
  }
  return array;
}


console.log(makeArray(5,5));
