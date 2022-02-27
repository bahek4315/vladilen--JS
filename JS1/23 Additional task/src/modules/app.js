import {recountMoney} from '../core/utils';
import {DonateBlock} from './donate-block';

export class App {
    #donateBlock;

    constructor() {
        this.#donateBlock = new DonateBlock();
    }

    run() {
        const formHTML = document.querySelector('.donate-form');

        formHTML.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputHTML = formHTML.querySelector('.donate-form__donate-input');
            const donateContainerHTML = document.querySelector('.donates-container__donates');

            const newMessage = this.#donateBlock.render();

            donateContainerHTML.appendChild(newMessage);
            inputHTML.value = '';
            recountMoney();
        })
    }
}