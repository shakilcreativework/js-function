function isEven(number){
    if(number % 2 === 0){
        return `this number is even ${number}`;
    }
    return `this number is not even ${number}`;
}

const even = isEven(33);
// console.log(even);
// console.log(isEven(60));


function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(35));
console.log(isOdd(68));