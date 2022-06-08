import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

refs.submitBtn.addEventListener('click', evt => {
  evt.preventDefault();
  createPromisesOnClickBtn(refs.amount.value);
});

// Создаем промис
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Создаем промисы и вызываем их по очереди
function createPromisesOnClickBtn(amount) {
  let timeout;
  let step = parseInt(refs.step.value);
  let firstDelay = parseInt(refs.delay.value);
  if (amount == 0) {
    alert("Amount can't be empty");
  } else {
    for (let i = 1; i <= amount; i += 1) {
      i > 1 ? (timeout = firstDelay += step) : (timeout = firstDelay);
      createPromise(i, timeout)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
}
