const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener('click', e => {
  intervalId = setInterval(changeColor, 1000);
  e.target.disabled = true;
  stopBtn.disabled = false;
});
stopBtn.addEventListener('click', e => {
  clearInterval(intervalId);
  e.target.disabled = true;
  startBtn.disabled = false;
});

// ==========Styles button==========
document.body.style.transition = 'all 2s ease-in-out';
startBtn.style.display = 'block';
stopBtn.style.display = 'block';
startBtn.style.margin = '0 auto';
stopBtn.style.margin = '0 auto';
startBtn.style.backgroundColor = '#34F5C9';
stopBtn.style.backgroundColor = '#E74F79';
startBtn.style.border = '2px solid #000';
stopBtn.style.border = '2px solid #000';
startBtn.style.padding = '20px 60px';
stopBtn.style.padding = '20px 60px';
startBtn.style.fontSize = '30px';
stopBtn.style.fontSize = '30px';
startBtn.style.cursor = 'pointer';
stopBtn.style.cursor = 'pointer';
startBtn.style.borderRadius = '5px';
stopBtn.style.borderRadius = '5px';
startBtn.style.marginTop = '20px';
stopBtn.style.marginTop = '20px';
startBtn.style.marginBottom = '20px';
stopBtn.style.marginBottom = '20px';
startBtn.style.textAlign = 'center';
stopBtn.style.textAlign = 'center';
