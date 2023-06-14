import initProduct from './product.js';
import initInformation from './information.js';

document.getElementById('search').addEventListener('click', () => {
  const popup = document.querySelector('.popup');
  if(popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});

initProduct();
initInformation();