class Controls {
    constructor(game) {
      this.game = game; 
    }
    Controls() {
      window.addEventListener('keydown', (event) => {
        const key = event.code;
        switch (key) {
          case 'ArrowUp':
            this.game.chicken.speed += 1;
            break;
          case 'ArrowDown':
            this.game.chicken.y += 10;
            this.game.chicken.speed -= 1;
            break;
          case 'ArrowRight':
            this.game.chicken.x += 10;
            break;
          case 'ArrowLeft':
            this.game.chicken.x -= 10;
            break;
          case 'Space':
            break;
        }
      });
    }
  }
  