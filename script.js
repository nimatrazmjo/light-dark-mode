const switchStatement = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const textBox = document.getElementById('text-box');
const toggleIcon = document.getElementById('toggle-icon');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
function imageMode(color) {
    image1.src = `svg/Coding_${color}.svg`;
     image2.src = `svg/Freelancer_${color}.svg`;
     image3.src = `svg/open_source_${color}.svg`;
}

function darkMode() {
    nav.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)';
     toggleIcon.children[0].textContent = 'Dark Mode';
     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
     imageMode('dark');
}

function lightMode() {
    nav.style.backgroundColor= 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

switchStatement.addEventListener('change', switchTheme);

const selectedTheme = localStorage.getItem('theme');
if (selectedTheme) {
    document.documentElement.setAttribute('data-theme',selectedTheme);
    if (selectedTheme === 'dark') {
        switchStatement.checked = true;
        darkMode();
    } else {
        switchStatement.checked = false;
        lightMode();
    }
}