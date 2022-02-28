const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

// изначальная функция, тут не отрабатывает правильно catch
const createNewPost1 = () => {
isLoading = true;
fetch(POSTS_URL, {
    method: 'POST',
})
    .then((response) => response.json())
    .then((result) => {
        console.log('result', result)
    })
    .catch((error) => {
        console.log('error', error)
    })
    .finally(() => {
        isLoading = false;
    });
};

createNewPost1();


// переделанная функция, catch отрабатывается
const createNewPost = async () => {
    isLoading = true;

    try {
        const response = await fetch(POSTS_URL, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Ошибка в получении')
        }
        const data = await response.json();
        console.log('result', data)
    } catch(error) {
        console.log('error', error)
    } finally {
        isLoading = false;
    }
};

createNewPost();