// Menu
import markup from '../templates/markup.hbs';
import menuItems from '../menu.json';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', markup(menuItems))

// Theme

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const bodyColor = document.querySelector('body');
  const checkbox = document.querySelector('#theme-switch-toggle');
  
  checkbox.addEventListener('change', clickOnCheckbox)

  const theme = localStorage.getItem('theme-type') || Theme.LIGHT;
  bodyColor.classList.add(theme);
  checkbox.checked = theme === Theme.DARK;
  
  function clickOnCheckbox() {
          bodyColor.classList.toggle(Theme.DARK)
          bodyColor.classList.toggle(Theme.LIGHT)
          localStorage.setItem('theme-type', bodyColor.classList.value)
  }