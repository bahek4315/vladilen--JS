const container = document.querySelector('#data-container');
const loader = container.querySelector('#loader')

function toggleLoader() {
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
}

function createLi(text) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    li.append(a);
    return li;
}


function getData() {
    toggleLoader();
    const getData = fetch('https://jsonplaceholder.typicode.com/users');
    getData
        .then(response => {
            if (!response.ok) {
                throw new Error('Ups..')
            } else {
                return response.json();
            }
        })
        .then((array)=>{
            array.forEach((item) => {
                const addedElement = createLi(item.name);
                container.append(addedElement)
            })
        })
        .catch(error => console.error('error!'))
        .finally(()=>toggleLoader())
}


function getUsersByIds(ids) {
    toggleLoader();
    const requests = ids.map((item) => fetch(`https://jsonplaceholder.typicode.com/users/${item}`));

    Promise.all(requests)
        .then((responds) => {
            const dataOfUsers = responds.map((item) => item.json())
            return Promise.all(dataOfUsers)
        })
        .then((users) => {
            users.forEach((item) => {
                const newUser = createLi(item.name);
                container.append(newUser);
            })
        })
        .catch(error => console.log('err', error))
        .finally(()=> toggleLoader())
}
getUsersByIds([5, 6, 2, 1]);


