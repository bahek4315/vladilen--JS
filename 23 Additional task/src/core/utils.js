export function recountMoney() {
    const moneyOutput = document.querySelector('#total-amount');
    const allMoney = document.querySelectorAll('b');
    let totalMoney = Array.prototype.map.call(allMoney, (item) => item = parseInt(item.textContent));
    moneyOutput.textContent = `${totalMoney.reduce((a,i) => a+i,0)}$`;
}