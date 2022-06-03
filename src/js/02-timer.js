// Описан в документации
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Получаем элементы, содержащие компоненты даты
const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btn.addEventListener('click', () => {
  // Получаем значение из инпута
  const inputValue = refs.input.value;
  // Проверяем на пустоту
  if (inputValue === '') {
    return;
  }
  // Проверяем на корректность даты
  const isValidDate = flatpickr.parseDate(inputValue, 'd.m.Y H:i:s').isValid;
  if (!isValidDate) {
    return;
  }
  // Получаем дату из инпута
  const inputDate = flatpickr.parseDate(inputValue, 'd.m.Y H:i:s');
  // Получаем текущую дату
  const currentDate = new Date();
  // Получаем количество миллисекунд между датами
  const diff = inputDate - currentDate;
  // Получаем количество дней между датами
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // Получаем количество часов между датами
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Получаем количество минут между датами
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  // Получаем количество секунд между датами
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // Выводим количество дней в инпуте
  refs.days.textContent = days;
  // Выводим количество часов в инпуте
  refs.hours.textContent = hours;
  // Выводим количество минут в инпуте
  refs.minutes.textContent = minutes;
  // Выводим количество секунд в инпуте
  refs.seconds.textContent = seconds;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(selektor, options);
