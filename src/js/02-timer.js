function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('[data-start]');
  const dateTimePicker = document.getElementById('datetime-picker');
  const daysValue = document.querySelector('[data-days]');
  const hoursValue = document.querySelector('[data-hours]');
  const minutesValue = document.querySelector('[data-minutes]');
  const secondsValue = document.querySelector('[data-seconds]');

  let countdownInterval = null;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];

      if (selectedDate <= new Date()) {
        window.alert("Please choose a date in the future");
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    },
  };

  flatpickr('#datetime-picker', options);

  startBtn.addEventListener('click', function() {
    const selectedDate = new Date(dateTimePicker.value);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      return;
    }

    countdownInterval = setInterval(function() {
      const remainingTime = selectedDate - new Date();
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        daysValue.textContent = '00';
        hoursValue.textContent = '00';
        minutesValue.textContent = '00';
        secondsValue.textContent = '00';
        startBtn.disabled = true;
      } else {
        const { days, hours, minutes, seconds } = convertMs(remainingTime);
        daysValue.textContent = addLeadingZero(days);
        hoursValue.textContent = addLeadingZero(hours);
        minutesValue.textContent = addLeadingZero(minutes);
        secondsValue.textContent = addLeadingZero(seconds);
      }
    }, 1000);
  });
});