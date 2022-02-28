const creatrPromise = async () => {
    const currentDate = new Date();
    console.log('I am promise')
    try {
        const promise = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await promise.json();
        console.log(result);
    } catch(err) {
        console.log('error: ', err)
    } finally {
        console.log('promise is done', ((new Date()) - currentDate))
    }
    
}

console.log('Begin');

setTimeout(()=> console.log('Im setTimeout 1sec'), 1000);


setTimeout(()=> console.log('Im setTimeout 2sec'), 2000);

creatrPromise();

console.log('End');