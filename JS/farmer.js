
class Farmer{
        constructor(game, x, y){
        this.game= game;
        this.x = x;
        this.y = y;
        this.speedX= speedX;
        }
    
        runLogic(){
            this.x++;

            if(this.x >540 ){
                this.speedX = -1;
            }
            else if(this.x < 0 ){
                this.speedX = 1;
            }
        }
    
        paint(){
            const context= this.game.context;
            context.save();
            context.drawImage(
                farmerImg,
                x,
                y,
                60,
                80
            );
            context.restore();
        }
    
}

//Image 
let x = 0; 
let y = 0; 
let speedX = 1;




/* const action=()=>{

    context.clearRect(0, 0, 600, 400)
    
    x= x + speedX;
    
    const farmerImg = new Image();
    farmerImg.src = "./images/farmer.png";
    farmerImg.addEventListener("load", e => {
        context.save();
        context.drawImage(
            farmerImg,
            x,
            y,
            60,
            80
            );
            context.restore();
        });
}   

action();
*/