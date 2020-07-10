const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.js-switch-input'),
};

refs.themeSwitch.addEventListener('change', onThemeHandler);
refs.themeSwitch.addEventListener('change', onLocalStorageHandler);

function onThemeHandler() {
  const checked = refs.themeSwitch.checked;

  if (checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function onLocalStorageHandler() {
  const checked = refs.themeSwitch.checked;

  if (checked) {
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    localStorage.removeItem('theme', Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
}

const savedTheme = localStorage.getItem('theme');

if (JSON.parse(savedTheme) === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
}
