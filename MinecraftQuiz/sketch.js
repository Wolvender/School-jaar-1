//all the options on buttons
let Buttons = [
  ["Muddy mangrove roots", "Muddy roots", "Mangrove roots "],
  ["Turtle shell", "Raw fish", "Sea grass"],
  ["Lava,Ice,Sand", "Lava,BlueIce,SoulSoil", "Water,Soulsand,Ice"],
  ["Zombie pigman", "Zombified pig", "Pig Zombie"],
  ["Cow", "Warden", "Piston"]
]

//all the questions
let Questions = [
  ["Question 1: What is the name of this Block?"],
  ["Question 2: What does this mob drop if killed?"],
  ["Question 3: How to generate Basalt?"],
  ["Question 4: What were Zombified piglins first called?"],
  ["Question 5: Guess The sound"],
  ["You have Finished"]
]

//all the correrct awnsers 
let Correct_Awnser = ["Muddy mangrove roots", "Sea grass", "Lava,BlueIce,SoulSoil", "Zombie pigman", "Cow"]

//checks score
let Score = 0

//Checks what question were on
let CurrentQuestion = null

//selected awnser on buttons
let selectedAwnser = null

//timer start
let Timer = 100

//Buttons
let Start_Button;
let Button2;
let Button3;

let Sound_button;

//checks if start button is pressed
let StartButton_pressed = "null"

//checks if sound is played
let soundPlayed = false

//variabales img/sound/font 
let background_img;
let Guess_block;
let Guess_mobdrop;
let Howtomake;
let Guess_name
let NoteBlock;

let font_titel;

let Sound_Buttons;
let Sound_good;
let Sound_bad;
let Guess_sound;

//preloads the img/sound/fonts
function preload() {
  //imgs
  Guess_block = loadImage("./Imgs/Guess_Block.webp")
  background_img = loadImage("./Imgs/Background_theme.png")
  Guess_mobdrop = loadImage("./Imgs/Turtle.webp")
  Howtomake = loadImage("./Imgs/Basalt.png")
  Guess_name = loadImage("./Imgs/Zombified_Piglin_JE9.webp")
  NoteBlock = loadImage("./Imgs/Note_block.webp")
  //fonts
  font_titel = loadFont("./Fonts/MinecraftTen-VGORe.ttf")
  //sounds
  Sound_Buttons = loadSound("./Sounds/minecraft_click2.mp3")
  Sound_good = loadSound("./Sounds/Orb.mp3")
  Sound_bad = loadSound("./Sounds/Villager_hit2.mp3")
  Guess_sound = loadSound("./Sounds/Cow_idle2.mp3")
  
}

function setup() {
  createCanvas(800, 400)
  background(255, 255, 255)

//Makes button to start and button1
  Start_Button = createButton("Start Quiz")
  Start_Button.style('color:White')
  Start_Button.style('background:gray')
  Start_Button.size(200, 20)
  Start_Button.position(310, 130)

//makes button 2
  Button2 = createButton()
  Button2.style('color:White')
  Button2.style('background:gray')
  Button2.size(200, 20)
  Button2.position(300, 200)
  Button2.hide()

//makes button 3
  Button3 = createButton()
  Button3.style('color:White')
  Button3.style('background:gray')
  Button3.size(200, 20)
  Button3.position(500, 200)
  Button3.hide()

//Makes sound button
  Button_sound = createButton("Play the Sound")
  Button_sound.style('color:White')
  Button_sound.style('background:gray')
  Button_sound.size(200, 20)
  Button_sound.position(300, 300)
  Button_sound.mousePressed(playSound)
  Button_sound.hide()

//Reload button
  tryAgain = createButton("Try Again")
  tryAgain.style('color:White')
  tryAgain.style('background:gray')
  tryAgain.size(190, 20)
  tryAgain.position(300, 270)
  tryAgain.mousePressed(reload)
  tryAgain.hide()

//If start button is pressed other buttons show

  Start_Button.mousePressed(ChangeButtons)
  
}

function draw() {
//loading in the background img
  image(background_img, 0, 0, 800, 400)

//Title text
  textFont(font_titel)
  strokeWeight(2)
  stroke(0)
  textSize(50)
  Main_col = fill(150, 141, 141)
  textAlign(CENTER)
  text("Minecraft knowledge", 400, 80)

//Timer
  if (StartButton_pressed == "Pressed"){
    Questions_show(Questions)
    Timer -= deltaTime * 0.001
    textSize(40)
    text(round(Timer), 50, 350)
    //If times hits 0 game ends
    if (Timer <= 0) {
      Timer = 0
      textSize(50)
      text("Time is up", 410, 240)
      Start_Button.hide()
      Button2.hide()
      Button3.hide()
    }

    textSize(30)
    text("Score: " + Score, 650, 350)
  }

}

//Function to show the questions
function Questions_show(Questions) {
//plays the sound if a button is clicked
  if (!soundPlayed) {
    Sound_Buttons.play();
    soundPlayed = true
    CurrentQuestion = 0
  }
  //checks what question its on and puts the img and text on screen
  if (CurrentQuestion == 0) {
    textSize(30)
    textAlign(CENTER)
    text(Questions[0][0], 400, 160)
    image(Guess_block, 320, 250, 150, 150)

  }else if (CurrentQuestion == 1){
    textSize(30)
    text(Questions[1][0], 400, 160)
    image(Guess_mobdrop, 320, 250, 150, 150)

  }else if (CurrentQuestion == 2){
    textSize(30)
    text(Questions[2][0], 400, 160)
    image(Howtomake,  320, 250, 150, 150)

  }else if (CurrentQuestion == 3){
    textSize(26)
    text(Questions[3][0], 370, 160)
    image(Guess_name,  320, 250, 200, 200)

  }else if (CurrentQuestion == 4){
    textSize(30)
    text(Questions[4][0], 380, 160)
    Button_sound.show()
  
  }else if (CurrentQuestion == 5){
    textSize(30)
    text(Questions[5][0], 385, 160)
    tryAgain.show()

    //if score is higher then 3 you won
    if (Score > 3) {
      text("Congrats this was ur score: " +Score, 380, 195)
      text("This was ur time: "+round(Timer), 380, 230)
    //if score is lower then 3 you lose
    }else {
      text("Try again Score: "+Score, 380, 195)
      text("This was ur time: "+round(Timer), 380, 230)
    }
    
  } 
}

//checks if awnser is correct
function CheckAwnser(selectedAwnser){
  let correctAnswer = Correct_Awnser[CurrentQuestion]

  if(selectedAwnser == correctAnswer) {
    CurrentQuestion += 1
    ChangeButtons()
    Score += 1
    //plays a sound if awnser is good
    Sound_good.play()
  }else {
    //plays a sound if awnser is bad
    Sound_bad.play()
    Score -= 1
  }
}


function ChangeButtons() {
  Start_Button.position(100, 200)
  StartButton_pressed = "Pressed"
  Button2.show()
  Button3.show()
//Changes the buttons when questions changes
  if (CurrentQuestion == null){
  Start_Button.html(Buttons[0][0])
  Button2.html(Buttons[0][1])
  Button3.html(Buttons[0][2])

  }else if (CurrentQuestion == 1){
    Start_Button.html(Buttons[1][0])
    Button2.html(Buttons[1][1])
    Button3.html(Buttons[1][2])

  }else if (CurrentQuestion == 2){
    Start_Button.html(Buttons[2][0])
    Button2.html(Buttons[2][1])
    Button3.html(Buttons[2][2])

  }else if (CurrentQuestion == 3){
    Start_Button.html(Buttons[3][0])
    Button2.html(Buttons[3][1])
    Button3.html(Buttons[3][2])

  }else if (CurrentQuestion == 4){
    Start_Button.html(Buttons[4][0])
    Button2.html(Buttons[4][1])
    Button3.html(Buttons[4][2])
//hides the buttons when on final question
  }else if (CurrentQuestion == 5){
    noLoop()
    Start_Button.hide()
    Button2.hide()
    Button3.hide()
    Button_sound.hide()
  }

//Checks when a button is pressed
  Start_Button.mousePressed(() => {
    selectedAwnser = Buttons[CurrentQuestion][0]
    Sound_Buttons.play()
    CheckAwnser(selectedAwnser)

  })
  Button2.mousePressed(() => {
    selectedAwnser = Buttons[CurrentQuestion][1]
    Sound_Buttons.play()
    CheckAwnser(selectedAwnser)
  })
  Button3.mousePressed(() => {
    selectedAwnser = Buttons[CurrentQuestion][2]
    Sound_Buttons.play()
    CheckAwnser(selectedAwnser)
  })

}

//funstion to play the sound in the guess the sound
function playSound() {
  Guess_sound.play()
}

//resets the quiz
function reload() {
  location.reload()
}
