const forestImage = new Image();
forestImage.src = './images/forest.png';

class Game {
  constructor(canvas, screens) {
    this.canvas = canvas;
    this.screens = screens;
    this.context = canvas.getContext('2d');
    this.running = false;
    this.eggs = [];
    this.enableControls();
  }
  

  displayScreen (name) {
    const screenThatShouldBeDisplayed = this.screens[name];
    const screensThatShouldBeHidden = Object
      .values(this.screens)
      .filter(screen => screen !== screenThatShouldBeDisplayed);
    screenThatShouldBeDisplayed.style.display = '';
    for (const screen of screensThatShouldBeHidden) screen.style.display = 'none';
  }

  start () {
    this.running = true;
    this.score = 200;
    this.chicken = new Chicken(this, 300, 200);
    this.farmer = new Farmer(this, 0, this.canvas.height/2);
    this.eggs.push(new Egg(this));
    this.loop();
    this.displayScreen('playing');
  }

enableControls () { 
window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37:
      this.chicken.x -= 10;
      break;
    case 38:
      this.chicken.y -= 10;
      break;
    case 39:
      this.chicken.x += 10;
      break;
    case 40:
      this.chicken.y += 10;
      break;
  }
})
}
  checkCollisions () {
    const chicken = this.chicken;
    this.eggs.forEach((egg, index) => {
      if (egg.checkIntersection(this.chicken)) {
        this.eggs.splice(index, 1);
        this.score += 1;
        if(this.farmer.direction){
         this.farmer.speedX++;
        } else {
          this.farmer.speedX--;
        }
        setTimeout(() => {
         this.eggs.push(new Egg(this));
        },2000);
      }
    });
    if (this.farmer.checkIntersection (this.chicken)){
      this.score -= 1;
    }
  }

  addEgg () {
    const egg = new Egg(this);
    this.eggs.push(egg);
  }

  
  loop () {
    this.runLogic();
    this.paint();
    if (this.running) {
      window.requestAnimationFrame(() => {
        this.loop();
      });
    }
  }

  runLogic () {
  
    this.farmer.runLogic();
    this.chicken.runLogic();
    for (const egg of this.eggs) {
      egg.runLogic();
    }
    this.checkCollisions();
    this.collectGarbage();
    if (this.score <= 0) {
      this.lose();
    }
  }

  lose () {
    this.running = false;
    this.displayScreen('gameOver');
  }

  collectGarbage () {
    this.eggs.forEach((egg, index) => {
      if (egg.x < 0) {
        this.eggs.splice(index, 1);
      }
    });
  }

  clearScreen () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
 paintBackground () {
    const tileSize = 18;
    for (let row = 0; row < this.canvas.height / tileSize; row++) {
      for (let column = 0; column < this.canvas.width / tileSize; column++) {
        this.context.drawImage(
          forestImage,
          tileSize,
          0,
          tileSize,
          tileSize,
          column * tileSize,
          row * tileSize,
          tileSize,
          tileSize
        );
      }
    }
  }

  paintScore () {
    this.context.font = '30px sans-serif';
    this.context.fillStyle ="navy"
    this.context.fillText(`Score: ${this.score}`, 10, 40);
  }

  paint () {
    this.clearScreen();
    this.paintBackground();
    if (this.running) {
      this.farmer.paint();
      this.chicken.paint();
      for (const egg of this.eggs) {
        egg.paint();
      }
      this.paintScore();
    }
  }
}
