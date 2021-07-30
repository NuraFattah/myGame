const eggImg= new Image();
eggImg.src = "./images/egg.png";

class Egg{
    constructor(game, x, y){
        this.game = game;
        this.x = x;
        this.y = y;
    }

    runLogic(){
    }
    
        addEgg(){
            const egg= new Egg(game, Math.random(), Math.random());
            this.game.egg.push(egg);
    
        }
    paint(){
        const context = this.game.context;
        eggImg.addEventListener("load", e=>{
            context.save();
            context.drawImage(
                eggImg,
                this.x,
                this.y,
                100,
                100,
            );
            context.restore();
        })
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