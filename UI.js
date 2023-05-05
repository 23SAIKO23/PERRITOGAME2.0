export class UI {
    constructor(game) {
      this.game = game;
      this.fontSize = 30;
      this.fontFamily = 'Algerian';

    }
  
    draw(context) {
      context.font = `${this.fontSize}px ${this.fontFamily}`;
      context.textAlign = 'left';
      context.fillStyle = this.game.fontColor;
  
      // Dibuja el puntaje en la pantalla
      context.fillText(`Score: ${this.game.score}`, 20, 50);
    }
  }