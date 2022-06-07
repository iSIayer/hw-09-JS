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

function createPromisesOnClickBtn(amount) {
  if (amount == 0) {
    alert("Amount can't be empty");
  } else {
    for (let i = 1; i <= amount; i += 1) {
      createPromise(i, refs.delay.value)
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
