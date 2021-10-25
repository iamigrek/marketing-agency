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
