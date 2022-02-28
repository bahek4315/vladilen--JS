import './index.css';


const cookieButton = document.querySelector('.cookie-consent__button');
const cookieWindow = document.querySelector('.cookie-consent');

const buttonEvent = (evt) => {
    localStorage.setItem('agreed', 'true');
    cookieButton.removeEventListener('click', buttonEvent);
    cookieWindow.remove();
}

if (localStorage.getItem('agreed')) {
    cookieWindow.remove();
} else {
    cookieButton.addEventListener('click', buttonEvent);
}