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

// Task 1
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
        .finally(() => toggleLoader())
}

// getData();

// Task 2
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
        .catch(error => console.error(error))
        .finally(()=> toggleLoader())
}
// getUsersByIds([5, 6, 2, 1]);

function createImgLi(obj) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');

    li.classList.add('photo-item');
    img.classList.add('photo-item__image');
    img.setAttribute('src', obj.url);
    h3.classList.add('photo-item__title');
    h3.textContent = obj.title;

    li.append(img, h3);

    return li;
}

function getFastestLoadedPhoto(ids) {
    toggleLoader();
    const requestPhotos = ids.map((item) => fetch(`https://jsonplaceholder.typicode.com/photos/${item}`));

    Promise.race(requestPhotos)
        .then(fastestData => {
            return fastestData.json()
        })
        .then(fastest => {
            const fastestLi = createImgLi(fastest);

            container.append(fastestLi)
        })
        .catch(error => console.log(error))
        .finally(() => toggleLoader())
}

getFastestLoadedPhoto([60, 12, 55]);
