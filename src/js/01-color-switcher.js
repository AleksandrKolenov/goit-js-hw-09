const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.btnStart.addEventListener('click', colorBtnStart);
refs.btnStop.addEventListener('click', colorBtnStop);

refs.btnStop.setAttribute('disabled', true);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function colorBtnStart () {
refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');
  
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};


function colorBtnStop() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }