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

getData();
