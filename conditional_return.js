function isEven(number){
    if(number % 2 === 0){
        return `this number is even ${number}`;
    }
    return `this number is not even ${number}`;
}

const even = isEven(33);
const even1 = isEven(64);
console.log(even);
console.log(even1);