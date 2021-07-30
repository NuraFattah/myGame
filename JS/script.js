const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//Screens
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const screenElements = {
    start:   screen1,
    playing: screen2,
    lose:    screen3,
};

const game = new Game(canvas, screenElements);

//BUTTONS
const startButton = screen1.querySelector("button");
const loseButton = screen3.querySelector("button");

startButton.addEventListener = ("click", () =>{
    game.start();
});

loseButton.addEventListener = ("click", () =>{
    game.start();
});
  