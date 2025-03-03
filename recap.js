
function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const vat = 5;
const meat = 80;
const bill = add(vat, meat);

// console.log(bill);


function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum + diff;
    const result = multiply / 2;
    return result;
}