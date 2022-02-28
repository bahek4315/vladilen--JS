import "../webpack.css";
import JS_IMAGE from '../assets/js.png';

console.log('Hello there');

const jsImageHTML = document.createElement('img');
jsImageHTML.classList.add('js-image');
jsImageHTML.src = JS_IMAGE;
document.body.append(jsImageHTML);