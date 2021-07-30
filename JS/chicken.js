const chickenImg = new Image();
chickenImg.src = "./images/chicken.png"
// CHICKEN CLASS
class Chicken{
    constructor(game, x, y){
    this.game= game;
    this.x= x;
    this.y = y;
    this.width =128;
    this.height = 128;
    
    }

    runLogic(){
        
    }

    paint(){
        const context= this.game.context;
        context.save();
        context.drawImage(
            chickenImg,
            this.x,
            this.y,
            this.width,
            this.height
            );
            context.restore();
    }

}



/* setInterval(() => {
    
    const chickenW = 30;
    //const chickenH = 30;
    const chickenh = 0.1;
    //const chickenw = 1;
    
    context.clearRect(0, 0, 600, 400)


    chickenImg.addEventListener("load", e => {
        context.save();
        context.drawImage(
            chickenImg,
            chickenh,
            chickenh,
            chickenW,
            chickenW,
            0,
            340,
            60,
            60,
            );
            context.restore();
        });
        
    }, 1000/ 60); */
    

