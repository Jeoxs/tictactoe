function checkWinner (playerMarked) {
  var win = false;
  for (var i = 0; i < 3; i++) {
      if (matrix[i][0] === playerMarked & matrix[i][1] === playerMarked & matrix[i][2] === playerMarked){
          win = true;
          break;
      }

      if (matrix[0][i] === playerMarked & matrix[1][i] === playerMarked & matrix[2][i] === playerMarked) {
          win = true;
          break;
      }
  }
  if (matrix[0][0] === playerMarked & matrix[1][1] === playerMarked & matrix[2][2] === playerMarked) {
      win = true;
  }

  if (matrix[2][0] === playerMarked & matrix[1][1] === playerMarked & matrix[0][2] === playerMarked) {
      win = true;      
  }
  return win;
}
