import '../index.css';
import JS_IMG from '../assets/js.png';

const imgHTML = document.createElement('img');
imgHTML.alt = 'JS logo';
imgHTML.src = JS_IMG;
imgHTML.classList.add('js-image');
document.body.append(imgHTML);