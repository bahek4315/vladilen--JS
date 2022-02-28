class CustomSelect {
    #id;
    #options;
    #currentSelectedOption;
    constructor(id, options) {
        this.#id = id;
        this.#options = options;
        this.#currentSelectedOption = {};
    }

    get selectedValue() {
        return this.#currentSelectedOption;
    }
    
    render(container) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        const span = document.createElement('span');
        const ul = document.createElement('ul');

        div.classList.add('select-dropdown', `select-dropdown--${this.#id}`);
        button.classList.add('select-dropdown__button', `select-dropdown__button--${this.#id}`);
        span.classList.add('select-dropdown', `select-dropdown--${this.#id}`);
        span.textContent = 'Выберите элемент';
        ul.classList.add('select-dropdown__list', `select-dropdown__list--${this.#id}`);
        

        this.#options.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('select-dropdown__list-item');
            li.dataset.value = item.value;
            li.textContent = item.text;

            ul.append(li)
        });

        button.append(span);
        div.append(button);
        div.append(ul);
        container.append(div);

        document.querySelector('.select-dropdown__button').addEventListener('click', () => {
            ul.classList.toggle('active');
        })

        document.querySelector('.select-dropdown__list').addEventListener('click', (evt) => {
            const {target} = evt;
            const allListItems = document.querySelectorAll('.select-dropdown__list-item')
            if (target.classList.contains(`select-dropdown__list-item`)) {
                this.#currentSelectedOption = this.#options[target.dataset.value - 1];
                allListItems.forEach((item) => item.classList.remove('selected'));
                target.classList.add('selected');
                document.querySelector('span.select-dropdown').textContent = target.textContent;
            }
        })
    }
}

{/* <div class="select-dropdown select-dropdown--123">
    <button class="select-dropdown__button select-dropdown__button--123"> 
        <span class="select-dropdown select-dropdown--123">Выберите элемент</span>
    </button>
    <ul class="select-dropdown__list select-dropdown__list--123"> 
        <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
        <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
        <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
        <li class="select-dropdown__list-item" data-value="4">HTML</li>
        <li class="select-dropdown__list-item" data-value="5">CSS</li> 
        </ul> 
</div> */}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);