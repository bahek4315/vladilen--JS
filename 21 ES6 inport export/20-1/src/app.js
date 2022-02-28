import getRandomColor from './utils';

export default function initApp() {
    const newButtonHTML = document.createElement('button');
    newButtonHTML.classList.add('button');
    newButtonHTML.textContent = 'Изменить цвет страницы';

    newButtonHTML.addEventListener('click', (evt) => {
        const newColor = getRandomColor();
        evt.target.style.backgroundColor = `rgb(${newColor})`;
        document.body.style.backgroundColor = `rgba(${newColor}, 0.7)`;
    })

    document.body.append(newButtonHTML);
}