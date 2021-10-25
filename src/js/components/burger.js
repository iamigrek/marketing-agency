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
