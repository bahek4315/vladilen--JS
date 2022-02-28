const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// изначальная функция, тут не отрабатывает правильно catch
const getTodosByIds1 = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((data) => data.json());
            return Promise.all(dataResults)
        })
        .then((allTasks) => {
            console.log(allTasks);
        })
        .catch((error) => {
            console.log(error);
        })
}
// getTodosByIds1([43, 21, 55, 100, 10]);


const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const allRequests = await Promise.all(requests);
        allRequests.forEach(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('ошибка');
            }
        })
        const dataResults = await Promise.all(allRequests.map((item) => item.json()));
        console.log(dataResults);
    } catch(error) {
        console.log('error', error);
    }
}

getTodosByIds([43, 21, 55, 100, 10]);