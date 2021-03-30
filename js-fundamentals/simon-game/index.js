const celeste = document.getElementById("celeste");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.selectColor = this.selectColor.bind(this);
    this.initialize();
    this.generateSequence();
    this.nextLevel();
  }

  initialize() {
    btnStart.classList.add('hide');
    this.level = 1;
    this.colors = {
      celeste,
      violet,
      orange,
      green
    }
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.lightSequence();
    this.addClickEvents();
  }

  transformNumberToColor(number) {
    switch(number) {
      case 0:
        return 'celeste'
      case 1: 
        return 'violet'
      case 2: 
        return 'orange'
      case 3:
        return 'green'
    }
  }

  lightSequence() {
    for(let i = 0; i < this.level; i++) {
      const color = this.transformNumberToColor(this.sequence[i]);
      setTimeout(() => this.lightColor(color), 1000 * i);
    }
  }

  lightColor(color) {
    this.colors[color].classList.add('light');
    setTimeout(() => this.turnOffColor(color), 350);
  }

  turnOffColor(color) {
    this.colors[color].classList.remove('light');
  }

  addClickEvents() {
    this.colors.celeste.addEventListener('click', this.selectColor);
    this.colors.violet.addEventListener('click', this.selectColor);
    this.colors.orange.addEventListener('click', this.selectColor);
    this.colors.green.addEventListener('click', this.selectColor);
  }

  selectColor(ev) {
    console.log(this);
  }
}

const startGame = () => {
  window.game = new Game();
};
