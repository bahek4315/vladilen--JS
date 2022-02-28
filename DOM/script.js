//Задание 5 модуль 14

const tasks = [
    {
        id: '1138465078061',
        completed: true,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const taskList = document.querySelector('.tasks-list');

tasks.forEach((item) => {
    const newTask = document.createElement('div');
    const wrapper = document.createElement('div');
    const content = document.createElement('div');
    const button = document.createElement('button');
    const form = document.createElement('form');
    const span = document.createElement('span');
    const input = document.createElement('input');
    const label = document.createElement('label');

    newTask.classList.add('task-item');
    newTask.dataset.taskId = item.id;
    wrapper.classList.add('task-item__main-container');
    content.classList.add('task-item__main-content');
    button.className = 'task-item__delete-button default-button delete-button';
    button.dataset.deleteTaskId = item.id;
    button.textContent = 'Удалить';
    form.classList.add('checkbox-form');
    span.classList.add('task-item__text');
    span.textContent = item.text;
    input.classList.add('checkbox-form__checkbox');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', item.id);
    label.setAttribute('for', item.id);


    if (item.completed) {
        input.checked = true;
    }
    
    taskList.append(newTask);
    newTask.append(wrapper);
    wrapper.append(content);
    wrapper.append(button);
    content.append(form);
    content.append(span);
    form.append(input);
    form.append(label);
    
});

const createTask = document.querySelector('.create-task-block');

createTask.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const createdTasks = document.querySelectorAll('.task-item__text');
    const currentValue = evt.target.querySelector('.create-task-block__input').value;
    const textArr = [];
    createdTasks.forEach((i) => {
        textArr.push(i.textContent)
    })
    if (currentValue === '') {
        if (createTask.querySelector('.error-message-block')) {
            createTask.querySelector('.error-message-block').remove();
        }
        const error = document.createElement('span');
        error.classList.add('error-message-block');
        error.textContent = 'Название задачи не должно быть пустым.'
        createTask.append(error);
    } else if (textArr.includes(currentValue)){
        if (createTask.querySelector('.error-message-block')) {
            createTask.querySelector('.error-message-block').remove();
        }
        const error = document.createElement('span');
        error.classList.add('error-message-block');
        error.textContent = 'Задача с таким названием уже существует.'
        createTask.append(error);
    } else {
        if (createTask.querySelector('.error-message-block')) {
            createTask.querySelector('.error-message-block').remove();
        }
        const newTask = document.createElement('div');
        const wrapper = document.createElement('div');
        const content = document.createElement('div');
        const button = document.createElement('button');
        const form = document.createElement('form');
        const span = document.createElement('span');
        const input = document.createElement('input');
        const label = document.createElement('label');
        
        const id = new Date();

        newTask.classList.add('task-item');
        newTask.dataset.taskId = id;
        wrapper.classList.add('task-item__main-container');
        content.classList.add('task-item__main-content');
        button.className = 'task-item__delete-button default-button delete-button';
        button.dataset.deleteTaskId = id;
        button.textContent = 'Удалить';
        form.classList.add('checkbox-form');
        span.classList.add('task-item__text');
        span.textContent = evt.target.querySelector('.create-task-block__input').value;
        input.classList.add('checkbox-form__checkbox');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', id);
        label.setAttribute('for', id);
        
        taskList.append(newTask);
        newTask.append(wrapper);
        wrapper.append(content);
        wrapper.append(button);
        content.append(form);
        content.append(span);
        form.append(input);
        form.append(label);
    }
});

const modalWindow = document.querySelector('.modal-overlay');
const modalCancel = modalWindow.querySelector('.delete-modal__cancel-button');
const modalDelete = modalWindow.querySelector('.delete-modal__confirm-button');

taskList.addEventListener('click', (evt) => {
    const { target } = evt;
    if (target.classList.contains('delete-button')) {
        modalWindow.classList.remove('modal-overlay_hidden');
        
        modalDelete.addEventListener('click', (evt) => {
            target.closest('.task-item').remove();
            modalWindow.classList.add('modal-overlay_hidden');
        })
    }
})

modalCancel.addEventListener('click', (evt) => {
    modalWindow.classList.add('modal-overlay_hidden');
})

document.addEventListener('keydown', (evt) => {
	if (evt.keyCode === 27) {
        modalWindow.classList.add('modal-overlay_hidden');
    }
})

// реализация светлой/темной темы

const body = document.querySelector('body');
const allTasks = document.querySelectorAll('.task-item');
const allButtons = document.querySelectorAll('button');

function darkTheme() {
    body.style.background = '#24292E';
    allTasks.forEach((item) => item.style.color = '#FFFFFF');
    allButtons.forEach((item) => item.style.border = '1px solid #ffffff');
}

function lightTheme() {
    body.style.background = 'initial';
    allTasks.forEach((item) => item.style.color = 'initial');
    allButtons.forEach((item) => item.style.border = 'none');
}

document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 9) {
        if (body.style.background === 'initial' || body.style.background === '') {
            darkTheme();
        } else {
            lightTheme();
        }
    }
})