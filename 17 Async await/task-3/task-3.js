
const container = document.querySelector('.data-container');
const loader = document.querySelector('#loader');

const URL = 'https://jsonplaceholder.typicode.com/albums';

function createLi(obj) {
    const li = document.createElement('li');
    li.textContent = obj.title;

    container.append(li)
}

function loading() {
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden')
    } else {
        loader.setAttribute('hidden', '')
    }
}

async function renderAlbums() {
    loading();
    try {
        const request = await fetch(URL);
        const allAlbums = await request.json();
        allAlbums.forEach(element => {
            createLi(element)
        });
    } catch(err) {
        container.textContent = 'Произошла ошибка в получении данных об альбомах...';
    } finally {
        loading()
    }
}

renderAlbums();