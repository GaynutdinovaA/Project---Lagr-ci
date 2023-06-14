const sizeButtons = document.querySelectorAll('.cart__size');
const like = document.querySelector('.cart__like');

const slider = document.querySelector('.slider__container');
const sliderDots = document.querySelectorAll('.slider__dote');
const sliderArrowLeft = document.querySelector('.slider__arrow_type_left');
const sliderArrowRight = document.querySelector('.slider__arrow_type_right');
let sliderFlag = 0;

function renderSliderRight(sliderFlag) {
  slider.style.setProperty('--element-number', sliderFlag);
  if(sliderFlag !== 0) {
    sliderDots[sliderFlag - 1].classList.remove('slider__dote_active');
  } else {
    sliderDots[2].classList.remove('slider__dote_active');
  }
  sliderDots[sliderFlag].classList.add('slider__dote_active');
}

function renderSliderLeft(sliderFlag) {
  slider.style.setProperty('--element-number', sliderFlag);
  if(sliderFlag !== 2) {
    sliderDots[sliderFlag + 1].classList.remove('slider__dote_active');
  } else {
    sliderDots[0].classList.remove('slider__dote_active');
  }
  sliderDots[sliderFlag].classList.add('slider__dote_active');
}

export default function initProduct() {
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(!button.classList.contains('cart__size_checked')) {
        sizeButtons.forEach(button => {
          button.classList.remove('cart__size_checked');
        });
        button.classList.add('cart__size_checked');
      } else {
        button.classList.remove('cart__size_checked');
      }
    });
  });

  like.addEventListener('click', () => {
    like.classList.toggle('cart__like_active');
  });

  sliderArrowRight.addEventListener('click', () => {
    if(sliderFlag < 2) {
      sliderFlag += 1;
      renderSliderRight(sliderFlag);
    } else {
      sliderFlag = 0;
      renderSliderRight(sliderFlag);
    }
  });

  sliderArrowLeft.addEventListener('click', () => {
    if(sliderFlag > 0) {
      sliderFlag -= 1;
      renderSliderLeft(sliderFlag);
    } else {
      sliderFlag = 2;
      renderSliderLeft(sliderFlag);
    }
  });
}