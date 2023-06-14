const openButtons = document.querySelectorAll('.inform__button');

export default function initInformation() {
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const block = button.closest('.inform__blok');
      if(!button.classList.contains('inform__button_close')) {
        block.style = 'max-height: unset;';
        block.querySelector('.inform__text').classList.add('inform__text_type_open');
        button.classList.add('inform__button_close');
      } else {
        block.style = 'max-height: 60px;';
        block.querySelector('.inform__text').classList.remove('inform__text_type_open');
        button.classList.remove('inform__button_close');
      }
    });
  });
}