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
  
  if (localStorage.getItem('theme-type') === Theme.DARK) {
      bodyColor.classList.add(Theme.DARK)
      localStorage.setItem('theme-type', Theme.DARK)
      checkbox.setAttribute('checked', true)
  } else {
      bodyColor.classList.add(Theme.LIGHT)
  }  
  
  function clickOnCheckbox() {
      if (bodyColor.classList.value === Theme.LIGHT) {
          bodyColor.classList.toggle(Theme.DARK)
          bodyColor.classList.toggle(Theme.LIGHT)
          localStorage.setItem('theme-type', bodyColor.classList.value)
      } else {
          bodyColor.classList.toggle(Theme.DARK)
          bodyColor.classList.toggle(Theme.LIGHT)
  
          localStorage.setItem('theme-type', bodyColor.classList.value)
      }
  }