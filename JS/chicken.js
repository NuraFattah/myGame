const chickenImg = new Image();
chickenImg.src = './images/chicken.png';

class Chicken {
  constructor (game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speedX = 0;
    this.speedY = 0;
  }

  runLogic () {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  paint () {
    const context = this.game.context;
    context.save();
    context.drawImage(
      chickenImg,
      2,
      2,
      30,
      30,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.restore();
  }
}
    

