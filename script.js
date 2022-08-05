const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = getElementID('nav');
const toggleIcon = getElementID('toggle-icon');
const toggleText = getElementID('toggle-text');
const image1 = getElementID('image1');
const image2 = getElementID('image2');
const image3 = getElementID('image3');
const textBox = getElementID('textbox');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function getElementID(id) {
  return document.getElementById(id);
}

const imageMode = function (theme) {
  image1.src = `./img/undraw_proud_coder_${theme}.svg`;
  image2.src = `./img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${theme}.svg`;
};
const toggleDarkLightMode = function (theme) {
  nav.style.backgroundColor =
    theme === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';

  textBox.style.backgroundColor =
    theme === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  toggleIcon.children[0].textContent =
    theme === DARK_THEME ? 'Dark Mode' : 'Light Mode';

  theme === DARK_THEME
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  theme === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
};

const setTheme = function (theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleDarkLightMode(theme);
};

const changeTheme = function (e) {
  e.target.checked ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME);
};

toggleSwitch.addEventListener('change', changeTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  } else if (currentTheme === LIGHT_THEME) {
    toggleSwitch.checked = false;
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Responsive
window.addEventListener('resize', function () {
  if (window.innerWidth <= 1000) {
    toggleText.hidden = true;
  } else {
    toggleText.hidden = false;
  }
});

if (window.innerWidth <= 1000) {
  toggleText.hidden = true;
} else {
  toggleText.hidden = false;
}
