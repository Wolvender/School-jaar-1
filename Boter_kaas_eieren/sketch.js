let  cellWidth = 100
let  cellHeight = 100

let player = "O"
let X = "X"
let O = "O"

let playerO_color = [225, 0 ,0]
let playerX_color = [0, 0 ,225]

let winner = null

let gameEnded ;


// colors of cells
let cell_colors = [
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255]
]

// Board x or o
let Board = [
  null, null, null,
  null, null, null,
  null, null, null
]

//possible win combos
let possible_win = [
  //horizontal
  [0, 1, 2], //top row
  [3, 4, 5], //middle row
  [6, 7, 8], //bottem row

  //vertical
  [0, 3, 6], //left row
  [1, 4, 7], //middle row
  [2, 5, 8], //right row

  //Diagonal
  [0, 4, 8], // left top to right bottem
  [2, 4, 6] // bottem left to top right

]


function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(255);

  //red
  fill("red"), strokeWeight(0), rect(0, 0, 350, 600)

  //blue
  fill("blue"), strokeWeight(0), rect(350, 0, 350, 600)
  
  //Game 3x3
  strokeWeight(5)
  fill(cell_colors[0]), rect(200, 200, cellHeight, cellWidth)//1
  fill(cell_colors[1]), rect(300, 200, cellHeight, cellWidth)//2
  fill(cell_colors[2]), rect(400, 200, cellHeight, cellWidth)//3

  fill(cell_colors[3]), rect(200, 300, cellHeight, cellWidth)//4
  fill(cell_colors[4]), rect(300, 300, cellHeight, cellWidth)//5
  fill(cell_colors[5]), rect(400, 300, cellHeight, cellWidth)//6

  fill(cell_colors[6]), rect(200, 400, cellHeight, cellWidth)//7
  fill(cell_colors[7]), rect(300, 400, cellHeight, cellWidth)//8
  fill(cell_colors[8]), rect(400, 400, cellHeight, cellWidth)//9

  //Player text who's turn
  if (player == O) {
    fill(255), textSize(40), text("Player O", 100, 100)
  }else if (player == X) {
    fill(255), textSize(40), text("Player X", 420, 100)
  }
  textSize(20), text("Press ENTER to reset", 225, 580)

}
  //Loops trough the Board to find a possible win
function CheckWin() {
    for (let combo of possible_win) {
      let [a, b, c] = combo
      if (Board[a] && Board[a] === Board[b] && Board[a] === Board[c]) {
        return Board[a]
      }
    }
    return null

}

function BoardFull() {
  for (let i = 0; i < Board.length; i++){
    if(Board[i] == BoardFull) {
      return false
    }
  }
  return true
}


function mousePressed() {
  //Cell_0 mouse press | top left
  if (mouseX > 200 && mouseX < 200 + cellWidth && mouseY > 200 && mouseY < 200 + cellHeight) {
    if (Board[0] == null) {
      if (player == O) {
        cell_colors[0] = playerO_color
        Board[0] = O
        player = X
      }else if (player == X) {
        cell_colors[0] = playerX_color
        Board[0] = X
        player = O
     }
  } 
}
  //Cell_1 mouse press | top middle
  if (mouseX > 300 && mouseX < 300 + cellWidth && mouseY > 200 && mouseY < 200 + cellHeight) {
    if (Board[1] == null) {
      if (player == O) {
        cell_colors[1] = playerO_color
        Board[1] = O
        player = X
      }else if (player == X) {
        cell_colors[1] = playerX_color
        Board[1] = X
        player = O
    }
  } 
}
  //Cell_2 mouse press | top right
  if (mouseX > 400 && mouseX < 400 + cellWidth && mouseY > 200 && mouseY < 200 + cellHeight) {
    if (Board[2] == null) {
      if (player == O) {
        cell_colors[2] = playerO_color
        Board[2] = O
        player = X
      }else if (player == X) {
        cell_colors[2] = playerX_color
        Board[2] = X
        player = O
    }
  } 
}
  //Cell_3 mouse press | middle left
  if (mouseX > 200 && mouseX < 200 + cellWidth && mouseY > 300 && mouseY < 300 + cellHeight) {
    if (Board[3] == null) {
      if (player == O) {
        cell_colors[3] = playerO_color
        Board[3] = O
        player = X
      }else if (player == X) {
        cell_colors[3] = playerX_color
        Board[3] = X
        player = O
    } 
  }
}
  //Cell_4 mouse press | middle mid
  if (mouseX > 300 && mouseX < 300 + cellWidth && mouseY > 300 && mouseY < 300 + cellHeight) {
    if (Board[4] == null) {
      if (player == O) {
        cell_colors[4] = playerO_color
        Board[4] = O
        player = X
      }else if (player == X) {
        cell_colors[4] = playerX_color
        Board[4] = X
        player = O
    }   
  } 
}
  //Cell_5 mouse press | middle right
  if (mouseX > 400 && mouseX < 400 + cellWidth && mouseY > 300 && mouseY < 300 + cellHeight) {
    if (Board[5] == null) {
      if (player == O) {
        cell_colors[5] = playerO_color
        Board[5] = O
        player = X
      }else if (player == X) {
        cell_colors[5] = playerX_color
        Board[5] = X
        player = O
    }   
  } 
}
  

  //Cell_6 mouse press | bottem left
  if (mouseX > 200 && mouseX < 200 + cellWidth && mouseY > 400 && mouseY < 400 + cellHeight) {
    if (Board[6] == null) {
      if (player == O) {
        cell_colors[6] = playerO_color
        Board[6] = O
        player = X
      }else if (player == X) {
        cell_colors[6] = playerX_color
        Board[6] = X
        player = O
    }   
  } 
}
  

  //Cell_7 mouse press | bottem middle
  if (mouseX > 300 && mouseX < 300 + cellWidth && mouseY > 400 && mouseY < 400 + cellHeight) {
    if (Board[7] == null) {
      if (player == O) {
        cell_colors[7] = playerO_color
        Board[7] = O
        player = X
      }else if (player == X) {
        cell_colors[7] = playerX_color
        Board[7] = X
        player = O
    }   
  } 
}
  

  //Cell_8 mouse press | bottem right
  if (mouseX > 400 && mouseX < 400 + cellWidth && mouseY > 400 && mouseY < 400 + cellHeight) {
    if (Board[8] == null) {
      if (player == O) {
        cell_colors[8] = playerO_color
        Board[8] = O
        player = X
      }else if (player == X) {
        cell_colors[8] = playerX_color
        Board[8] = X
        player = O
    }   
  } 
}

  //Checks winner per cell
  winner = CheckWin()
  if (winner) {
    textSize(50)
    text("Player " + winner + " Is the winner", 135, 150);
    gameEnded = true
    noLoop()
  }

  let draw = BoardFull()
  if (draw) {
    textSize(50)
    text("None won its a draw", 135, 150)
    gameEnded = true
    noLoop()
  }


}

// Resets page
function keyPressed() {
  if (keyCode == ENTER) {
    location.reload()
  }
 }

