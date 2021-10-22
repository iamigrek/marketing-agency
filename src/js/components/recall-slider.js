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
