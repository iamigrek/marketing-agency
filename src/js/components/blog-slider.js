const blogBtn1 = document.querySelector('.blog__btn--prev');
const blogBtn2 = document.querySelector('.blog__btn--next');

const blogSlideritem = document.querySelectorAll('.blog__item');

let j = 1;

document.addEventListener('DOMContentLoaded', () => {
  const blogItemId = document.getElementById(`blog-slide-${j}`);
  const blogItemId2 = document.getElementById(`blog-slide-${j + 1}`);
  blogItemId.classList.add('blog__item--active');
  blogItemId2.classList.add('blog__item--active');
  blogBtn1.classList.add('blog__btn--disable');
});

blogBtn2.addEventListener('click', () => {
  if (j < blogSlideritem.length) {
    j++;
    BlogItemGen();
    blogBtn1.classList.remove('blog__btn--disable');
  }
});

blogBtn1.addEventListener('click', () => {
  if (j > 1) {
    j--;
    BlogItemGen();
    blogBtn2.classList.remove('blog__btn--disable');
  }
});

function BlogItemGen() {
  const blogItemId = document.getElementById(`blog-slide-${j}`);
  console.log(blogItemId);
  const blogItemId2 = document.getElementById(`blog-slide-${j + 1}`);
  blogSlideritem.forEach(item => {
    item.classList.remove('blog__item--active');
  });

  blogItemId.classList.add('blog__item--active');
  blogItemId2.classList.add('blog__item--active');

  if (j >= blogSlideritem.length) {
    blogBtn2.classList.add('blog__btn--disable');
  } else if (j <= 1) {
    blogBtn1.classList.add('blog__btn--disable');
  }
}
