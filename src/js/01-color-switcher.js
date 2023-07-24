function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function toggleButtons(disabledBtn, enabledBtn) {
  disabledBtn.disabled = true;
  enabledBtn.disabled = false;
}

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

  let intervalId = null;

  startBtn.addEventListener('click', function() {
    toggleButtons(this, stopBtn);

    intervalId = setInterval(function() {
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  });

  stopBtn.addEventListener('click', function() {
    toggleButtons(this, startBtn);

    clearInterval(intervalId);
  });
});