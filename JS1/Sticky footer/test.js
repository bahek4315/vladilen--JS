const capitals = (str) => {
	return str.split('').reduce((result, letter, index) => {
        if (letter === letter.toUpperCase()) {
            result.push(index);
        }
        return result
    }, [])
}

console.log(capitals('CodEWaRs'));

const x = document.getElementsByTagName('p');
console.dir(x);
Array.prototype.forEach(x, (item) => {
    item.style.color = 'green';
})


const allP = document.querySelectorAll('p');
console.dir(allP)
allP.forEach((item) => {
    item.style.color = 'pink';
})