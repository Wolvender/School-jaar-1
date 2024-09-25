// array for random colors
let colors = ["red", "green", "blue", "purple", "yellow"]
// shapes get stored in this array
let Shapes = []



function draw() {
  createCanvas(800, 400);
  background(255);
  //draws the shapes on the screen with a loop
  for(let i = 0; i < Shapes.length; i++) {
    let ShapesData = Shapes[i]
    //gets the data from the keypressed function for the random pos
    strokeWeight(0)
    fill(ShapesData.color)
    circle(ShapesData.x, ShapesData.y, ShapesData.size)
    rect(ShapesData.x, ShapesData.y, ShapesData.size)

  }
} 


function keyPressed() {
  //Checks if the player pressed backspace
  if (keyCode == BACKSPACE) {
    // checks if the shapes array is empty
    if (Shapes.length == 0) {
      //loops over the random x , y , size , colors
      for(let i = 0; i < 100; i++){
        let NewShapes = {
          x: random(800),
          y: random(400),
          size: random(100, 250),
          color: random(colors)
        };
        //Sends the shapes to the array
        Shapes.push(NewShapes)
      }
      
    }else {
      //clears the array after
      Shapes = []
    }
  }
}



  
