const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('textbox');

const imageMode = function (color) {
  image1.src = `./img/undraw_proud_coder_${color}.svg`;
  image2.src = `./img/undraw_feeling_proud_${color}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
};
const darkMode = function () {
  document.documentElement.setAttribute('data-theme', 'dark');
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');

  imageMode('dark');
};

const lightMode = function () {
  document.documentElement.setAttribute('data-theme', 'light');
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');

  imageMode('light');
};

const changeTheme = function (e) {
  console.log(e.target.checked);
  if (e.target.checked) {
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    localStorage.setItem('theme', 'light');
    lightMode();
  }
};

toggleSwitch.addEventListener('change', changeTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  } else if (currentTheme === 'light') {
    toggleSwitch.checked = false;
    lightMode();
  }
}
