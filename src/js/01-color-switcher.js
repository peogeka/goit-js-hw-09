function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

  let intervalId = null;

  startBtn.addEventListener('click', function() {
    
    this.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(function() {
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  });

  stopBtn.addEventListener('click', function() {
   
    this.disabled = true;
    startBtn.disabled = false;

    clearInterval(intervalId);
  });
});
