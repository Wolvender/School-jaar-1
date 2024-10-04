
let Yoda_grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2],
  [0, 1, 3, 3, 3, 2, 1, 2, 0, 4, 1, 1, 1, 0, 4, 2, 3, 3, 1, 0],
  [0, 0, 1, 1, 1, 2, 1, 1, 4, 4, 1, 1, 1, 4, 4, 2, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 2, 2, 1, 1, 1, 1, 1, 2, 3, 3, 0, 0, 0],
  [0, 0, 0, 0, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0],
  [0, 0, 0, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0],
  [0, 0, 5, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 5, 0],
  [0, 0, 5, 5, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 0],
  [0, 0, 5, 1, 5, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 5, 1, 5, 0],
  [0, 0, 0, 0, 5, 3, 5, 1, 5, 3, 3, 5, 3, 3, 5, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 1, 1, 1, 5, 3, 5, 3, 5, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 1, 5, 5, 5, 5, 5, 1, 1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
]


let Yoda_grid_2 = [
  [2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2],
  [0, 1, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 0],
  [0, 1, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 3, 1, 0],
  [0, 0, 1, 1, 3, 2, 1, 2, 0, 4, 1, 1, 1, 0, 4, 2, 3, 1, 0, 0],
  [0, 0, 0, 0, 1, 2, 1, 1, 4, 4, 1, 1, 1, 4, 4, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 2, 2, 1, 1, 1, 1, 1, 2, 3, 3, 0, 0, 0],
  [1, 5, 0, 0, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0],
  [1, 1, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0],
  [0, 5, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 5, 0],
  [0, 0, 5, 5, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 0],
  [0, 0, 0, 0, 5, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 5, 1, 5, 0],
  [0, 0, 0, 0, 5, 3, 5, 1, 5, 3, 3, 5, 3, 3, 5, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 1, 1, 1, 5, 3, 5, 3, 5, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 1, 5, 5, 5, 5, 5, 1, 1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
]

let Pikachu = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0],
  [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 2, 2, 0, 0, 2, 2, 3, 3, 3, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 3, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 2, 4, 2, 2, 2, 2, 4, 2, 2, 0, 3, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 6, 2, 0, 3, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 2, 2, 7, 2, 2, 2, 5, 0, 2, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 2, 1, 1, 2, 2, 2, 5, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 2, 3, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 3, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let Pikachu_2 = [
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 3, 3, 2, 3, 2, 0, 2, 1, 2, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 2, 4, 2, 2, 2, 2, 4, 2, 2, 0, 0, 0, 2, 1, 1, 1, 0],
  [0, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 6, 2, 0, 0, 3, 2, 1, 0, 0, 0],
  [0, 1, 3, 0, 3, 2, 2, 7, 7, 2, 2, 2, 5, 0, 3, 3, 2, 0, 0, 0, 0],
  [0, 0, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 2, 5, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 2, 1, 1, 2, 2, 2, 3, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let Colors_yoda = {
  //White
  0: [255],
  //Green
  1: [154, 209, 71],
  //Dark green
  2: [23, 79, 17],
  //Beige
  3: [201, 194, 123],
  //Black
  4: [0],
  //Brown
  5: [64, 40, 11]

}


let Colors_Pickachu = {
  //white
  0: [255],
  //Light  Yellow
  1: [230, 183, 73],
  //Middle Yellow
  2: [227, 171, 41],
  //Dark Yellow
  3: [179, 140, 50],
  //Black
  4: [0],
  //Brown
  5: [64, 40, 11],
  //red
  6: [200, 0, 0],
  //Mouth color
  7: [92, 69, 17]
}

let current_grid = 1
let Active_art = "Yoda"

let Button ;


function setup() {
  createCanvas(640, 480);
  background(255)
  DrawPixelArt_yoda1(Yoda_grid, Colors_yoda)

  Button = createButton("Switch Art")
  Button.position(190, 340)

  Button.mousePressed(Switch_between_art)
}

function draw() {
  frameRate(2)
  background(255)
  if (Active_art == "Yoda") {
    if (current_grid === 1) {
      DrawPixelArt_yoda2(Yoda_grid_2, Colors_yoda)
      current_grid = 2
    }else {
      DrawPixelArt_yoda1(Yoda_grid, Colors_yoda)
      current_grid = 1
    }
  }else {
    if (current_grid === 1){
      DrawPixelArt_Pikachu2(Pikachu_2, Colors_Pickachu)
      current_grid = 2
    }else {
      DrawPixelArt_Pikachu1(Pikachu, Colors_Pickachu)
      current_grid = 1
    }
  }
}

function Switch_between_art() {
  if (Active_art == "Yoda") {
    Active_art = "Pikachu"
  }else if (Active_art == "Pikachu"){
    Active_art = "Yoda"
  }
}


function DrawPixelArt_yoda1(Yoda_grid, Colors_yoda) {
  for(let x = 0; x < Yoda_grid.length; x++){
    for(let y = 0; y < Yoda_grid[x].length; y ++) {
      let Color_index = Yoda_grid[x][y]
      let color = Colors_yoda[Color_index]

      if (color.length == 3) {
      fill(color[0], color[1], color[2])

       }else if (color.length == 5) {
       fill(color[3], color[4], color[5])

       }else {
        fill(color)
       }
       strokeWeight(1)
      rect(y * 20, x * 20, 20, 20)
    }
  }
} 

function DrawPixelArt_yoda2(Yoda_grid_2, Colors_yoda) {
  for(let x = 0; x < Yoda_grid_2.length; x++){
    for(let y = 0; y < Yoda_grid_2[x].length; y ++) {
      let Color_index = Yoda_grid_2[x][y]
      let color = Colors_yoda[Color_index]

      if (color.length == 3) {
      fill(color[0], color[1], color[2])

       }else if (color.length == 5) {
       fill(color[3], color[4], color[5])

       }else {
        fill(color)
       }
       strokeWeight(1)
      rect(y * 20, x * 20, 20, 20)
      
    }
  }
} 

function DrawPixelArt_Pikachu1(Pikachu, Colors_Pickachu) {
  for(let x = 0; x < Pikachu.length; x++){
    for(let y = 0; y < Pikachu[x].length; y ++) {
      let Color_index = Pikachu[x][y]
      let color = Colors_Pickachu[Color_index]

      if (color.length == 3) {
        fill(color[0], color[1], color[2])
  
         }else if (color.length == 6) {
         fill(color[3], color[4], color[5])
  
         }else {
          fill(color)
         }
        rect(y * 20, x * 20, 20, 20)
    }
  }
}

function DrawPixelArt_Pikachu2(Pikachu_2, Colors_Pickachu) {
  for(let x = 0; x < Pikachu_2.length; x++){
    for(let y = 0; y < Pikachu_2[x].length; y ++) {
      let Color_index = Pikachu_2[x][y]
      let color = Colors_Pickachu[Color_index]

      if (color.length == 3) {
        fill(color[0], color[1], color[2])
  
         }else if (color.length == 6) {
         fill(color[3], color[4], color[5])
  
         }else {
          fill(color)
         }
        rect(y * 20, x * 20, 20, 20)
    }
  }
}






