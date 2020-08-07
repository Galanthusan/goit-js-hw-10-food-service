const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.js-switch-input'),
};

refs.themeSwitch.addEventListener('change', onThemeSwitchHandler);

function onThemeSwitchHandler() {
  const checked = refs.themeSwitch.checked;

  if (checked) {
    onCurrentThemeHandler(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    onCurrentThemeHandler(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  onCurrentThemeHandler(Theme.DARK, Theme.LIGHT);
  refs.themeSwitch.checked = true;
}

function onCurrentThemeHandler(newTheme, oldTheme) {
  refs.body.classList.add(newTheme);
  refs.body.classList.remove(oldTheme);
}
