// PROMISE

// const developer = {
//     name: 'Maxim',
//     isDeveloper: true,
// }

// const promise = new Promise(function(resolve, reject) {
//     if (developer.isDeveloper) {
//         setTimeout(() => {
//             resolve(`${developer.name} - JS dev`)
//         }, 3000)
//     } else {
//         reject(`${developer.name} - not JS dev`)
//     }
// })

// promise
//     .then((sussessMessage) => console.log('sussessMessage', sussessMessage))
//     .catch((errorMessage) => console.log('error', errorMessage))
//     .finally(() => console.log('fin', promise));


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const dataContainer = document.querySelector('#data-container');

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAncor = document.createElement('a');
    todoElementAncor.href = '#';
    todoElementAncor.textContent = text;

    todoElement.append(todoElementAncor);

    return todoElement
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');

    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }

}

const getAllTodos = () => {
    toggleLoader();
    const result = fetch (TODOS_URL, {
        method: 'GET',
    });
    
    result
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then((todos) => {
            todos.forEach(element => {
                const todoHTML = createTodoElement(element.title);
                dataContainer.append(todoHTML);
            });
        })
        .catch((err) => console.log('err1', err))
        .finally(()=> toggleLoader())
}

//Promise.all

const idList = [1, 55, 8, 29];
function getTodosById (ids) {
    const requests = ids.map((item) => fetch(`${TODOS_URL}/${item}`));

    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((item) => item.json());
            return Promise.all(dataResults)
        })
        .then((results) => {
            console.log(results)
            results.forEach((item) => {
                const newTodo = createTodoElement(item.title)
                dataContainer.append(newTodo);
            })
        })
        .catch((err) => console.log(err))
}

// getTodosById(idList)

// Promise.rase

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(x => alert(x)); // 1