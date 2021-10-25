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

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav__list');
const burgerLink = document.querySelectorAll('.nav__link');
const burgerWrapper = document.querySelector('.nav__list-wrapper');
const body = document.querySelector('body');

burger.addEventListener('click', show);
burgerWrapper.addEventListener('click', show);

burgerLink.forEach(item => {
  item.addEventListener('click', show);
});

function show() {
  burgerMenu.classList.toggle('nav__list--open');
  burger.classList.toggle('btn--burger-active');
  burgerWrapper.classList.toggle('nav__list-wrapper--open');
  body.classList.toggle('dis-scroll');
}

const header = document.querySelector('.header');

window.onscroll = function (e) {
  console.log(window.scrollY);
  if (window.scrollY > 800) {
    header.classList.add('header--active');
    console.log('asd');
  } else {
    header.classList.remove('header--active');
  }
};

const btn1 = document.querySelector('.recall__btn--prev');
const btn2 = document.querySelector('.recall__btn--next');

const sliderList = document.querySelector('.recall__list');
const slideritem = document.querySelectorAll('.recall__item');

let i = 1;

document.addEventListener('DOMContentLoaded', () => {
  const ItemId = document.getElementById(`recall-slide-${i}`);
  ItemId.classList.add('recall__item--active');
  btn1.classList.add('recall__btn--disable');
});

btn2.addEventListener('click', () => {
  if (i < slideritem.length) {
    i++;
    ItemGen();
    btn1.classList.remove('recall__btn--disable');
  }
});

btn1.addEventListener('click', () => {
  if (i > 1) {
    i--;
    ItemGen();
    btn2.classList.remove('recall__btn--disable');
  }
});

function ItemGen() {
  const ItemId = document.getElementById(`recall-slide-${i}`);

  slideritem.forEach(item => {
    item.classList.remove('recall__item--active');
  });

  ItemId.classList.add('recall__item--active');

  if (i >= slideritem.length) {
    btn2.classList.add('recall__btn--disable');
  } else if (i <= 1) {
    btn1.classList.add('recall__btn--disable');
  }
}
