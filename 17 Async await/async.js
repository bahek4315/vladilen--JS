const USEERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

fetch(USEERS_URL)
    .then((responses) => responses.json())
    .then(users => {
        const firstUser = users[0]?.id;
        fetch(`${TODOS_URL}?userId=${firstUser}`)
            .then(response => response.json())
            // .then(todos => console.log(todos)) //работает, 20 todo
            .catch(err => console.log(new Error(err)))
    })
    .catch(err => console.log(new Error(err)))

// Проблема: код растет вправо с каждым fetch
// Поэтому придумали async await

// ключевое слово async - исп для ф-ций. Async делает так, что ф-я возвращает промис

const todosWithUserData1 = async () => {
    const response = await fetch(USEERS_URL); // если ф-я асинхр, надо добавить await, код будет ждать выполнения
    const users = await response.json();
    console.log(users);
    const firstUser = users[0]?.id;
    const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUser}`);
    const todos = await todosResponse.json();
    console.log(todos);
}

// для отработки ошибок исп try catch finally, ток так, без catch/finally будет ошибка

// try {

// } catch(error) {
//     console.log('err', error)
// } finally {
//     console.log('finally')
// }

// переделаем нашу ф-ю, также на то, что при неправильном url выполнение продолжается

const todosWithUserData = async () => {
    try {
        const response = await fetch(USEERS_URL); // если ф-я асинхр, надо добавить await, код будет ждать выполнения
        if (!response.ok) {
            throw new Error('Ошибка в получении данных пользователя')
        }
        const users = await response.json();
        console.log(users);
        const firstUser = users[0]?.id;
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUser}`);
        if (!todosResponse.ok) {
            throw new Error('Ошибка в получении данных задач');
        }
        const todos = await todosResponse.json();
        console.log(todos);
    } catch(err) {
        console.log('err', err)
    } finally {
        console.log('finally')
    }
}

todosWithUserData();