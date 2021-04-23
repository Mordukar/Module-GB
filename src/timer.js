import Sound from "./init.js";

export default class Timer {
  constructor(form, input, start, stop, result) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.start = document.querySelector(start);
    this.stop = document.querySelector(stop);
    this.result = document.querySelector(result);
    this.result.innerHTML = "";
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.startTimer();
    });
    this.stop.addEventListener("click", () => {
      this.stopTimer();
    });
  }
  startTimer() {
    let timeValue = this.input.value;
    let current = 0;
    this.timer = setInterval(() => {
      let timeLeft = timeValue - current;
      this.result.innerHTML = `Таймер запущен, осталось ${timeLeft} секунд`;
      if (current == timeValue) {
        this.stopTimer();
      }
      current++;
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
    Sound();
    this.result.innerHTML = "Таймер остановлен";
  }
}
