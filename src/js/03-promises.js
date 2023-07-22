function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = { position, delay };

      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const firstDelay = Number(formData.get('delay'));
    const step = Number(formData.get('step'));
    const amount = Number(formData.get('amount'));

    for (let i = 0; i < amount; i++) {
      const currentDelay = firstDelay + i * step;

      createPromise(i + 1, currentDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });
});