const celeste = document.getElementById('celeste');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const LAST_LEVEL = 10;

class Game {
  constructor() {
    this.initialize = this.initialize.bind(this);
    this.initialize();
    this.generateSequence();
    setTimeout(this.nextLevel, 500);
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.toggleBtnStart();
    this.level = 1;
    this.colors = {
      celeste,
      violet,
      orange,
      green,
    };
  }

  toggleBtnStart() {
    btnStart.classList.contains('hide')
      ? btnStart.classList.remove('hide')
      : btnStart.classList.add('hide');
  }

  generateSequence() {
    this.sequence = new Array(LAST_LEVEL)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.subLevel = 0;
    this.lightSequence();
    this.addClickEvents();
  }

  transformNumberToColor(number) {
    switch (number) {
      case 0:
        return 'celeste';
      case 1:
        return 'violet';
      case 2:
        return 'orange';
      case 3:
        return 'green';
    }
  }

  transformColorToNumber(color) {
    switch (color) {
      case 'celeste':
        return 0;
      case 'violet':
        return 1;
      case 'orange':
        return 2;
      case 'green':
        return 3;
    }
  }

  lightSequence() {
    for (let i = 0; i < this.level; i++) {
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

  removeClickEvents() {
    this.colors.celeste.removeEventListener('click', this.selectColor);
    this.colors.violet.removeEventListener('click', this.selectColor);
    this.colors.orange.removeEventListener('click', this.selectColor);
    this.colors.green.removeEventListener('click', this.selectColor);
  }

  selectColor(ev) {
    const colorName = ev.target.dataset.color;
    const colorNumber = this.transformColorToNumber(colorName);
    this.lightColor(colorName);
    if (colorNumber === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeClickEvents();
        if (this.level === LAST_LEVEL + 1) {
          this.wonTheGame();
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      this.lostTheGame();
    }
  }

  wonTheGame() {
    swal('Ganaste el juego!', 'Felicidades :D', 'success')
    .then(this.initialize);
  }

  lostTheGame() {
    swal('Perdiste el juego!', 'Lo lamentamos :(', 'error')
      .then(() => {
        this.removeClickEvents();
        this.initialize();
    });
  }
}

const startGame = () => {
  window.game = new Game();
};
