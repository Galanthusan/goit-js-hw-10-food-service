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
    onCurrentThemeHandler(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    onCurrentThemeHandler(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  onCurrentThemeHandler(Theme.DARK);
  refs.themeSwitch.checked = true;
}

function onCurrentThemeHandler(lightTheme, darkTheme) {
  if (lightTheme === Theme.LIGHT) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  } else if (darkTheme === Theme.Dark) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  }
}
