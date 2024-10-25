let Crafting_board = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

let Crafting_recipes = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

let random_item = ["wax", "honey", "honey block"]
let randomAmount = 8

//Stats Bee
let D_Hunger = 100
let D_Energy = 100
let D_Health = 100
let D_Happyness = 100
let D_Clean = 50

let Name;
let Showname = false

let Emeralds = 64

let y_bar = 500
let Bar_witdh = 30
let Bar_length = 100
let Circle_bar = 10

let sound_playedHunger = false
let sound_playedDied = false

let dead_colorscreen = [255, 0, 0]
let Esapce_screen = [100]

let ShowAngryBee = false
let ShowBee = true
let ShowHappy = false
let ShowPollen = false

let Shows_nest = true
let BeeInNest = false

let TimerIsRunning = true
let GamePause = false
let Trading = false
let Crafting = false

let Villager = false

let Showinventory = false
let AlliumFlowerCount = 16
let AlliumFlowerCount2 = 0
let SpongeCount = 4
let Diamondcount = 1

let score = 0

//Imgs
let Bee_normal; 
let Sprite_bars;
let Angry_Bee;
let Background
let Bee_nest;
let hunger_icon
let Sleep_icon
let luck_icon
let HappyBee
let Bee_nothealthy
let Sponge
let Inventory_img
let Allium
let VillagerInventory
let ShowVillager
let Emerald_img
let StatsScreen
let Background_night
let Diamonds_img
//Sounds
let Villagerhappy
let hungry_sound;
let Bee_died
let Sound_sleep
let Eating_sound
//fonts
let Dead_title;

function preload() {
  //imgs
  Bee_normal = loadImage("./Imgs/Bee.gif")
  Angry_Bee = loadImage("./Imgs/AngryBee.gif")
  Sprite_bars = loadImage("./Imgs/Hardcore.png")
  Background_day = loadImage("./Imgs/backgroundday.png")
  Background_night = loadImage("./Imgs/backgroundnight1.png")
  Bee_nest = loadImage("./Imgs/bee_nest.webp")
  hunger_icon = loadImage("./Imgs/Hunger.png")
  Sleep_icon = loadImage("./Imgs/Bed.webp")
  luck_icon = loadImage("./Imgs/Lucky_block.webp")
  HappyBee = loadImage("./Imgs/Happybee.gif")
  Bee_nothealthy = loadImage("./Imgs/NotHealthyBee.gif")
  Sponge = loadImage("./Imgs/Sponge.png")
  Inventory_img = loadImage("./Imgs/Inventory.png")
  Allium = loadImage("./Imgs/Allium_flower.webp")
  VillagerInventory = loadImage("./Imgs/VillagerGUIEmpty.png")
  ShowVillager = loadImage("./Imgs/Villager.webp")
  Emerald_img = loadImage("./Imgs/Emerald.webp")
  angry_villager = loadImage("./Imgs/Villager_refusing.gif")
  Allium = loadImage("./Imgs/Allium_flower.webp")
  StatsScreen = loadImage("./Imgs/StatsBackground.webp")
  Crafting_img = loadImage("./Imgs/Crafting_table_GUI.webp")
  Diamonds_img = loadImage("./Imgs/Diamonds.webp")
  //sounds  
  hungry_sound = loadSound("./Sounds/Angry_bee.mp3")
  Bee_died = loadSound("./Sounds/BeeDied.mp3")
  Eating_sound = loadSound("./Sounds/Eating.mp3")
  Villagerhappy = loadSound("./Sounds/VillagerHappy.mp3")
  BeeEnters = loadSound("./Sounds/BeeEnters.mp3")

  //Fonts
  Dead_title = loadFont("./Fonts/MinecraftRegular-Bmg3.otf")
}

function setup() {
  createCanvas(800, 600)
  //Gets Iitems
  D_Hunger = getItem("Hunger_bar") ?? 100;
  D_Energy = getItem("Energy_bar") ?? 100;
  D_Health = getItem("Health_bar") ?? 100;
  D_Happyness = getItem("Happy_bar") ?? 100;
  score = getItem("Score") ?? 0;
  D_Clean = getItem("Pollen") ?? 50;
  Emeralds = getItem("Emeralds") ?? 1
  AlliumFlowerCount = getItem("Allium") ?? 16
  AlliumFlowerCount2 = getItem("Allium2") ?? 0
  SpongeCount = getItem("Sponge") ?? 4
  Name = getItem("Name") ?? ""

  Sleep_Button = createButton("Sleep")
  Sleep_Button.style('color:White')
  Sleep_Button.style('background:gray')
  Sleep_Button.position(240, 540)
  Sleep_Button.size(100, 20)

  Respawn_button = createButton("Respawn")
  Respawn_button.style('color:White')
  Respawn_button.style('background:gray')
  Respawn_button.size(200, 20)
  Respawn_button.position(300, 300)
  Respawn_button.hide()

  Pet_button = createButton("Pet")
  Pet_button.style('color:White')
  Pet_button.style('background:gray')
  Pet_button.size(100, 20)
  Pet_button.position(640, 540)

  clean_button = createButton("Clean")
  clean_button.style('color:White')
  clean_button.style('background:gray')
  clean_button.size(100, 20)
  clean_button.position(440, 540)
  clean_button.hide()

  Flower_Craft = createImg('./Imgs/Allium_flower.webp', 'Allium Flower');
  Flower_Craft.position(160, 420)
  Flower_Craft.size(60, 60) 

  Flower2_Craft = createImg('./Imgs/Allium_flower.webp', 'Allium Flower');
  Flower2_Craft.position(160 + 50, 420)
  Flower2_Craft.size(60, 60) 

  //Trading buttons
  Allium_trade = createImg('./Imgs/Allium_flower.webp', 'Allium Flower')
  Allium_trade.position(210, 175)
  Allium_trade.size(50, 50)
  Allium_trade.hide()

  SpongeUse = createImg("./Imgs/Sponge.png")
  SpongeUse.position(170 + 102, 435)
  SpongeUse.size(30, 30)
  SpongeUse.hide()

  Sponge_trade = createImg("./Imgs/Sponge.png")
  Sponge_trade.position(210, 230)
  Sponge_trade.size(40, 40)
  Sponge_trade.hide()
  
  Name_bee = createInput("")
  Name_bee.attribute('placeholder', 'Name')
  Name_bee.position(310, 570)
  Name_bee.style('background:gray')

  Diamond_trade = createImg("./Imgs/Diamonds.webp")
  Diamond_trade.position(210, 280)
  Diamond_trade.size(40, 40)
  Diamond_trade.hide()

  Diamond_Use = createImg("./Imgs/Diamonds.webp")
  Diamond_Use.position(570, 435)
  Diamond_Use.size(40, 40)
  Diamond_Use.hide()
}


function draw() {
  background(Background_day)
  Timer_Bars()
  Draw_bars()
  Buttons_functions()

  if (TimerIsRunning) {
    score += deltaTime * 0.001
    Emeralds += deltaTime * 0.0001
  }

  if (Showname) {
    textFont(Dead_title), textSize(25), fill("white"), strokeWeight(1), stroke("black")
    text(Name, 360, 380)
    storeItem("Name", Name)
  }
  
  if (ShowPollen) {
    image(Bee_nothealthy, 300, 200);  // Show unhealthy bee when dirty
  }
  if (ShowBee && Bee_normal) {
    image(Bee_normal, 250, 200);  // Show normal bee if not dirty
  }
  if (ShowAngryBee && Angry_Bee) {
    image(Angry_Bee, 295, 200);  // Show angry bee
  }
  if (ShowHappy && HappyBee) {
    image(HappyBee, 260, 160, 250, 250);  // Show happy bee
  }

  ButtonsPause()
  Inventory()
  TradingMenu()
  crafting_UI()
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    GamePause = !GamePause 
    Trading = false
    Crafting = false
  }else {
    GamePause = false
  }
  if (keyCode == 69) {
    Showinventory = !Showinventory
  }else {
    Showinventory = false 
  }
  if (keyCode == ENTER) {
    Name = Name_bee.value()
    storeItem("Name", Name)
    Showname = true
  }
}

function Draw_bars () {
    //Bars stats
    strokeWeight()
    fill(0)
    rect(55, y_bar, Bar_length, Bar_witdh, 10)  //hunger empty
    rect(240, y_bar, Bar_length, Bar_witdh, 10) //Energy Empty
    rect(440, y_bar, Bar_length, Bar_witdh, 10) //Health Empty
    rect(640, y_bar, Bar_length, Bar_witdh, 10) //Happyness empty
  
  
    fill(122, 70, 23)
    rect(55, y_bar, D_Hunger, Bar_witdh, Circle_bar) //Fill hunger
    fill("Blue")
    rect(240, y_bar, D_Energy, Bar_witdh, Circle_bar) //Fill Energy
    fill("red")
    rect(440, y_bar, D_Health, Bar_witdh, Circle_bar) //fill health
    fill(209, 163, 10)
    rect(640, y_bar, D_Happyness, Bar_witdh, Circle_bar) //Fill hapyness

    //Icons on bars
    image(Sprite_bars,435, 490, 20, 20)
    image(hunger_icon, 45, 490, 25, 25)
    image(Sleep_icon, 235, 490, 25, 25)
    image(luck_icon, 630, 490, 25, 25)

}

function Buttons_functions() {
  //Button Sleep
  Sleep_Button.mousePressed(() => {
    BeeEnters.play()
    ShowBee = false
    ShowAngryBee = false
    BeeInNest = true
    ShowPollen = false

})

  //Pet Button
  Pet_button.mousePressed(() => {
    ShowHappy = true
    ShowAngryBee = false
    ShowBee = false
    ShowPollen = false
    D_Happyness += 15
    D_Energy -= 5
    setTimeout(() => {
      ShowHappy = false
      ShowBee = true
    }, 2000)
  })

  SpongeUse.mousePressed(() => {
    if (SpongeCount > 0){
    SpongeCount -= 1
    D_Health += 5
    D_Clean = 50
    ShowBee = true
    ShowPollen = true
    }
  })

  Flower_Craft.mousePressed(() => {
    if (AlliumFlowerCount > 0){
    AlliumFlowerCount -= 1
    D_Hunger +=8
    D_Energy += 2
    D_Happyness += 2
    ShowAngryBee = false
    sound_playedHunger = false
    setTimeout(() => {
      Eating_sound.play()
    }, 100)
    }
    if(D_Hunger >= 100) {
      D_Health -= 10
    }
  })

  Flower2_Craft.mousePressed(() => {
    if (AlliumFlowerCount2 > 0){
    AlliumFlowerCount2 -= 1
    D_Hunger +=8
    D_Energy += 2
    D_Happyness += 2
    ShowAngryBee = false
    sound_playedHunger = false
    setTimeout(() => {
      Eating_sound.play()
    }, 100)
    }
    if(D_Hunger >= 100) {
      D_Health -= 10
    }
  })

  Allium_trade.mousePressed(() => {
    if (Emeralds >= 4 && AlliumFlowerCount < 64 && AlliumFlowerCount2 < 64) {
      Emeralds -= 2
      AlliumFlowerCount += 8
      Villagerhappy.play()
    }
    if (AlliumFlowerCount >= 64) {
      AlliumFlowerCount2 += 8
    } 
  })

  Sponge_trade.mousePressed(() => {
    if (Emeralds >= 4 && SpongeCount < 64)   {
    SpongeCount += 8
    Emeralds -= 2
    Villagerhappy.play()
    }
  })

  Diamond_trade.mousePressed(() => {
    if (Emeralds >= 2 && Diamondcount < 64) {
      Diamondcount += 1
      Emeralds -= 2
    }
  })



  storeItem("Hunger_bar", D_Hunger)
  storeItem("Energy_bar", D_Energy)
  storeItem("Health_bar", D_Health)
  storeItem("Happy_bar", D_Happyness)
  storeItem("Score", score)
  storeItem("Pollen", D_Clean)
  storeItem("Emeralds", Emeralds)
  storeItem("Allium", AlliumFlowerCount)
  storeItem("Allium2", AlliumFlowerCount2)
  storeItem("Sponge", SpongeCount)

}

function Timer_Bars () {  
  //timers for the bars

  //If bee not in nest energy drains
  if (!BeeInNest){
    D_Energy -= deltaTime / 1000
  }

  D_Hunger -= deltaTime / 1500
  D_Happyness -= deltaTime / 1500
  D_Clean -= deltaTime / 500


  
  //plays hunger sound if less then 21 
  if (D_Hunger <= 21 && !sound_playedHunger) {
    hungry_sound.play();
    sound_playedHunger = true;
    ShowAngryBee = true;
    ShowBee = false
    //drains health and happyness if less then 1 hunger
  }else if (D_Hunger <= 1){
    D_Health -= deltaTime / 500
    D_Happyness -= deltaTime / 500
  }

  // if health is less then 5 a sound plays
  if(D_Health <= 5 && !sound_playedDied) {
    Bee_died.play()
    sound_playedDied = true
  } 

  //if the bee is getting dirty if clean is 0
  if(D_Clean <= 0){
    D_Health -= 0.03
    ShowPollen = true
    ShowBee = false
  }else {
    ShowPollen = false
  }

  //if energy is more then 100 is sets it to 100
  if (D_Energy >= 100) {
    D_Energy = 100
    //gets bee angry if hunger is less then 21
    if (D_Hunger <= 21){
      ShowAngryBee = true
      BeeInNest = false
    }else {
      ShowBee = true
      BeeInNest = false
    }
    //if enery is less then 5 health is slowily drainging
  }else if (D_Energy <= 5) {
    D_Health -= deltaTime / 500
  }

  //if happyness is 0 health slowly drains
  if (D_Happyness <= 0) {
    D_Health -= deltaTime / 1000
  }

  //Checks if Bee Sleep
  if (BeeInNest == true) {
    ShowPollen = false
    ShowBee = false
    D_Energy += 0.5
    D_Health += 0.5
  }

  //Health bar check
  if (D_Health <= 0){
    Pet_button.hide()
    Sleep_Button.hide()
    clean_button.hide()

    //dead screen
    noStroke()
    fill(255, 0, 0, 128)
    rect(0, 0, 800, 600)

    textAlign(CENTER)
    textSize(50)
    fill("White")
    textFont(Dead_title)
    text("You Died!", 400, 130)

    //score
    textSize(20)
    text("Score: " +round(score), 400, 165)
    text(Name + " Died!", 400, 200)
    ShowAngryBee = false
    ShowBee = false
    TimerIsRunning = false
    ShowPollen = false
    Showinventory = false
    Trading = false
    Showname = false
    noLoop()

    //Try again button
    Respawn_button.show()
    Respawn_button.mousePressed(() => {
      //resets game
      D_Hunger = 100
      D_Energy = 100
      D_Happyness = 100
      D_Health = 100
      D_Clean = 50
      score = 0
      AlliumFlowerCount = 16
      SpongeCount = 4
      Emeralds = 1

      Beedead = false
      ShowBee = true
      ShowAngryBee = false
      BeeInNest = false
      TimerIsRunning = true
      sound_playedHunger = false

      Sleep_Button.show()
      Respawn_button.hide()
      Pet_button.show()
      clean_button.show()
      loop()
    })
  }else if (TimerIsRunning){
    Sleep_Button.show()
    Pet_button.show()

  }
  D_Hunger = constrain(D_Hunger, 0, 100)
  D_Energy = constrain(D_Energy, 0, 100)
  D_Health = constrain(D_Health, 0, 100)
  D_Happyness = constrain(D_Happyness, 0, 100)
  D_Clean = constrain(D_Clean, 0, 100)
  AlliumFlowerCount = constrain(AlliumFlowerCount, 0, 64)
  AlliumFlowerCount2 = constrain(AlliumFlowerCount2, 0, 64)
  SpongeCount = constrain(SpongeCount, 0, 64)
}

function Stoptimer () {
  TimerIsRunning = false
}

function ButtonsPause () {
  if (GamePause) {
    Pet_button.hide()
    noStroke()
    fill(22, 23, 22, 128)
    rect(0, 0, 800, 600)

    Sleep_Button.html("Trading")
    Sleep_Button.position(290, 250)
    Sleep_Button.size(100, 20)

    Sleep_Button.mousePressed(() => {
      Trading = true
    })

    clean_button.html("Crafting")
    clean_button.position(390, 250)
    clean_button.size(100, 20)
    clean_button.show()

    clean_button.mousePressed(() => {
      Crafting = true
    })

  }else {
    Pet_button.html("Pet")
    Pet_button.size(100, 20)
    Pet_button.position(640, 540)

    Sleep_Button.html("Sleep")
    Sleep_Button.position(240, 540)
    Sleep_Button.size(100, 20)

    clean_button.html("Clean")
    clean_button.size(100, 20)
    clean_button.position(440, 540)
    clean_button.hide()
    loop()
  }
}

function Inventory () {
  if (Showinventory) {
    noStroke()
    fill(22, 23, 22, 128)
    rect(0, 0, 800, 600)
    
    image(Inventory_img, 120, 0, 550, 550)
    textFont(Dead_title), textSize(15), fill("white"), strokeWeight(1), stroke("black")
    text(AlliumFlowerCount, 200, 475)
    text(AlliumFlowerCount2, 250, 475)
    text(SpongeCount, 312, 475)
    text(Diamondcount, 600, 475)
    
    Flower_Craft.show()
    Flower2_Craft.show()
    SpongeUse.show()
    Diamond_Use.show()
    image(Bee_normal, 170, 80)


    Pet_button.hide()
    Sleep_Button.hide()
    clean_button.hide()

  }else {
      Flower_Craft.hide()
      Flower2_Craft.hide()
      SpongeUse.hide()
      Diamond_Use.hide()
  }
}

function TradingMenu () {
  if (Trading) {
    noStroke()
    fill(22, 23, 22, 128)
    rect(0, 0, 800, 600)
    GamePause = false
    Pet_button.hide()
    Sleep_Button.hide()
    clean_button.hide()

    image(VillagerInventory, 80, 140)
    image(ShowVillager, 610, 140)
        
    Allium_trade.show()
    Sponge_trade.show()
    Diamond_trade.show()

    //Trade Emerald allium
    stroke("Black"), strokeWeight(1), fill("lightgray"), rect(90, 175, 175, 50)
    fill("gray"), strokeWeight(0), rect(150, 195, 40, 10)

    stroke("Black"), strokeWeight(1), fill("lightgray"), rect(90, 225, 175, 50)
    fill("gray"), strokeWeight(0), rect(150, 245, 40, 10)

    stroke("Black"), strokeWeight(1), fill("lightgray"), rect(90, 275, 175, 50)
    fill("gray"), strokeWeight(0), rect(150, 295, 40, 10)

    //Costs of emeralds in trading
    image(Emerald_img, 90, 180, 40, 40)
    image(Emerald_img, 90, 230, 40, 40)
    image(Emerald_img, 90, 280, 40, 40)

    strokeWeight(1), fill(255), textSize(15), text("4", 118, 220), text("4", 118, 270), text("2", 118, 320)
    //inventory in Villager GUI
    text("8",250, 220)
    text("8",250, 270)
    text("1",250, 320)

    text(AlliumFlowerCount, 315, 450)
    text(AlliumFlowerCount2, 355, 450)
    text(SpongeCount, 399, 450)

    Flower_Craft.position(280, 405)
    Flower2_Craft.position(320, 405)
    Diamond_Use.position(110, 110)

    Diamond_Use.show()
    Flower_Craft.show()
    Flower2_Craft.show()


    SpongeUse.size(30, 30)
    SpongeUse.position(365, 422)
    SpongeUse.show()

    //ememrald counter
    image(Emerald_img, 650, 50, 80, 80)
    textFont(Dead_title), textSize(25) ,fill("white") ,text(round(Emeralds),710, 120)

  }else {
    SpongeUse.size(40, 40)
    SpongeUse.position(170 + 102, 435)
    Allium_trade.hide()
    Sponge_trade.hide()
    Flower2_Craft.position(160 + 50, 420)
    Flower_Craft.position(160, 420)
    Diamond_Use.position(570, 435)
    Diamond_trade.hide()
  }

  storeItem("Hunger_bar", D_Hunger)
  storeItem("Energy_bar", D_Energy)
  storeItem("Health_bar", D_Health)
  storeItem("Happy_bar", D_Happyness)
  storeItem("Score", score)
  storeItem("Pollen", D_Clean)
  storeItem("Emeralds", Emeralds)
  storeItem("Allium", AlliumFlowerCount)
  storeItem("Allium2", AlliumFlowerCount2)
  storeItem("Sponge", SpongeCount)
  storeItem("Name", Name)
}

function crafting_UI () {
  if (Crafting) {
    GamePause = false
    noStroke()
    fill(22, 23, 22, 128)
    rect(0, 0, 800, 600)
    Sleep_Button.hide()
    Pet_button.hide()
    Name_bee.hide()

    image(Crafting_img, 180, 100, 400, 400)
    textFont(Dead_title), textSize(15), fill("white"), strokeWeight(1), stroke("black")
    text(AlliumFlowerCount, 220, 475)
    text(AlliumFlowerCount2, 270, 475)
    text(SpongeCount, 312, 475)
    text(Diamondcount, 550, 475)

    Flower_Craft.position(185, 430)
    Flower2_Craft.position(230, 430)
    SpongeUse.position(282, 445)
    SpongeUse.size(30, 30)
    Diamond_Use.position(520, 435)

    Flower_Craft.show()
    Flower2_Craft.show()
    SpongeUse.show()
    Diamond_Use.show()

  }else {
    Name_bee.show()
    Diamond_Use.position(570, 435)
  }
}



