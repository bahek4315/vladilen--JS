import moment from "moment";

export class DonateBlock {
    #container;

    render() {
        this.#container = document.createElement('div');
        this.#container.className = 'donate-item';
        const newMoney = document.createElement('b');
        this.#container.textContent = `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')} - `;
        newMoney.textContent = `${document.querySelector('.donate-form__donate-input').value}$`;
        this.#container.append(newMoney);
        
        return this.#container;
    }
}