
const farmerImg = new Image();
farmerImg.src = './images/farmer.png';

class Farmer {
  constructor (game, x, y) {
    this.game = game;
    this.y = y;
    this.x = x;
    this.width = 60;
    this.height = 80;
    this.speedX = 1;
    this.speedY = 1;
    this.direction = 1;
  }

  runLogic () {
    this.x += this.speedX;
     if(this.x >=this.game.canvas.width -this.width){
        this.direction= 0;
        this.speedX *= -1;
     }
     else if(this.x < 0 ){
        this.direction = 1;
        this.speedX *= -1;

     }
  }

  checkIntersection (element) {
    return (
      element.x + element.width / 2 >= this.x - this.width / 2 &&
      element.x - element.width / 2 <= this.x + this.width / 2 &&
      element.y + element.height / 2 >= this.y - this.height / 2 &&
      element.y - element.height / 2 <= this.y + this.height / 2
    );
  }

  paint () {
    const context = this.game.context;
    context.save();
    context.drawImage(
      farmerImg,
      0,
      10,
      160,
      240,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.restore();
  }
}
