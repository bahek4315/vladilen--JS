import JS_IMG from './assets/js.png';

const bodyHTML = document.querySelector('body');
const greeting = document.createElement('h1');
greeting.textContent = 'I love JavaScript';
bodyHTML.append(greeting);

const imgHTML = document.createElement('img');
imgHTML.alt = 'JS logo';
imgHTML.src = JS_IMG;
bodyHTML.append(imgHTML);

