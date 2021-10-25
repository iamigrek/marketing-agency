const item = document.querySelectorAll('.blog__item');
const sliderLine = document.querySelector('.blog__list');
let count = 0;
let width;

function init() {
  width = document.querySelector('.blog__slider').offsetWidth;
  sliderLine.style.width = width * item.length + 'px';

  if (width < 400) {
    item.forEach(item => {
      item.style.width = width - 20 + 'px';
      item.style.height = 'auto';
    });
  } else {
    item.forEach(item => {
      item.style.width = width / 2 - 20 + 'px';
      item.style.height = 'auto';
    });
  }
  rollSlider();
}

init();
window.addEventListener('resize', init);

document
  .querySelector('.blog__btn--next')
  .addEventListener('click', function () {
    count++;
    if (width < 400) {
      if (count >= item.length) {
        count = 0;
      }
    } else {
      if (count >= item.length / 2) {
        count = 0;
      }
    }
    rollSlider();
  });

document
  .querySelector('.blog__btn--prev')
  .addEventListener('click', function () {
    count--;
    if (width < 400) {
      if (count < 0) {
        count = Math.round(item.length - 1);
      }
    } else {
      if (count < 0) {
        count = Math.round(item.length / 2 - 1);
      }
    }
    rollSlider();
  });

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
