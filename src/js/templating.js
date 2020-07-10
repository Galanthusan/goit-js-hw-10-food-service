import itemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';
import '../styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
};

function createMenu(array) {
  const markup = array.map(item => itemsTemplate(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

createMenu(menu);
