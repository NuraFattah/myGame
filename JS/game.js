// Game part
class Game{
    constructor(canvas, screens){
        this.canvas = canvas;
        this.screens = screens;
        this.context = canvas.getContext("2d");
    }
    displayScreen (name) {
        this.controls = new Controls(this);
        this.controls.enableControls();
        const displayingScreen = this.screens[name];
        const hiddenScreen = Object
          .values(this.screens)
          .filter(screen => screen !== displayingScreen);

          displayingScreen.style.display = '';
        for (const screen of hiddenScreen) screen.style.display = 'none';
    }
    start(){
        this.controls();
        this.chicken= new Chicken(this, 100, this.canvas.width, this.canvas.height);
        this.farmer= new Farmer(this);
        this.egg = [];
        this.addEgg();
        this.loop();
        this.displayScreen('playing');
    }



    chickenTouchFarmer(){
        const chicken= this.chicken;
        for (let farmer of this.farmers){
            //right
            //left
            //bottom
            //top
            if(chicken.x + chicken.width /2 >= farmer.x - farmer.width/2 &&
               chicken.x - chicken.width/2 <= farmer.x - farmer.width /2 &&  
               chicken.y + chicken.height/2 >= farmer.y - farmer.height /2 &&
               chicken.y - chicken.height/2 >= farmer.y - farmer.height /2 
               ){
              // return gameOverScreen
            }
        }
    }

    loop(){
       window.requestAnimationFrame(()=>{
           this.runLogic();
            this.paint();
            this.loop();
        });
    }
    runLogic (){
        //if intersection with chicken => this.addEgg();
        this.chicken.runLogic(); 
        this.farmer.runLogic(); 
        this.egg.runLogic();
        for (const egg of this.eggs){
            egg.runLogic();
        }
        this.deleteEggs();
    }

    deleteEggs(){
        this.eggs.forEach((egg)=>{
            //if intersection with chicken this.egg.splice()
        })
    }

    paint(){
       this.context.clearRect(0, 0, 600, 400);
       this.chicken.paint(); 
       this.farmer.paint(); 
       this.egg.paint();
       for (const egg of this.eggs){
        egg.paint();
       }
    }
}
//context.drawImage(eggImg,);