const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = getElement('nav');
const toggleIcon = getElement('toggle-icon');
const image1 = getElement('image1');
const image2 = getElement('image2');
const image3 = getElement('image3');
const textBox = getElement('textbox');

function getElement(id) {
  return document.getElementById(id);
}

const imageMode = function (color) {
  image1.src = `./img/undraw_proud_coder_${color}.svg`;
  image2.src = `./img/undraw_feeling_proud_${color}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
};
const toggleDarkLightMode = function (isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';

  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';

  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';

  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  isDark ? imageMode('dark') : imageMode('light');
};

const setTheme = function (mode, isDark) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  toggleDarkLightMode(isDark);
};

const changeTheme = function (e) {
  if (e.target.checked) {
    setTheme('dark', true);
  } else {
    setTheme('light', false);
  }
};

toggleSwitch.addEventListener('change', changeTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  } else if (currentTheme === 'light') {
    toggleSwitch.checked = false;
    toggleDarkLightMode(false);
  }
}
