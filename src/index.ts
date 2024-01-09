class App {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById('worldCanvas') as HTMLCanvasElement;
    this.canvas.width = 600;
    this.canvas.height = 500;

    this.ctx = this.canvas.getContext('2d');
  }

  save() {

  }

  clear() {

  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#save').addEventListener('click', () => app.save());
  document.querySelector('#clear').addEventListener('click', () => app.clear());
});
