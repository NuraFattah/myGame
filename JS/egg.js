const eggImg = new Image();
eggImg.src = './images/egg.png';

class Egg {
  constructor (game) {
    this.game = game;
    this.x = Math.random() * this.game.canvas.width;
    this.y = Math.random() * this.game.canvas.height;
    this.width = 20;
    this.height = 30;
    //this.frame = 0;
  }
 runLogic(){
 }

  checkIntersection (element) {
    return (
      // If right edge of element is over left edge of enemy
      element.x + element.width / 2 >= this.x - this.width / 2 &&
      // If left edge of element is below right edge of enemy
      element.x - element.width / 2 <= this.x + this.width / 2 &&
      // If bottom edge of element is over top edge of enemy
      element.y + element.height / 2 >= this.y - this.height / 2 &&
      // If top edge of element is below bottom edge of enemy
      element.y - element.height / 2 <= this.y + this.height / 2
    );
  }


  paint () {
    const context = this.game.context;
    context.save();
    context.drawImage(
      eggImg,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.restore();
    //this.frame++;
    //this.frame %= 70;
    
  }
}
 
/*   setInterval(()=>{
     this.game.context.clearRect(0, 0, 600, 400)
     const eggImg= new Image();
     eggImg.src = "./images/egg.png";
     eggImg.addEventListener("load", e =>{
         context.save();
         context.drawImage(
             eggImg,
             10,
             10,
             10,
             10,


         );
         context.restore();
     });
    },1000/600);
*/