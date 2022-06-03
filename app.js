const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slide = document.getElementsByClassName('project-card');
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;


next.addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

prev.addEventListener('click',() => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if(moveTo >= slide.length) {
    moveTo = 0;
  } if(moveTo < 0) {
    moveTo = slide.length -1;
  }
  slide[currentSlide].classList.toggle('active');
  navlinks[currentSlide].classList.toggle('active');
  slide[moveTo].classList.toggle('active');
  navlinks[moveTo].classList.toggle('active');

  currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((dot,dotIndex) => {
  dot.addEventListener('click',() => {
    if(currentSlide !== dotIndex) {
      changeSlide(dotIndex);
    }
  })
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
