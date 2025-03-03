/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 * 
 */



function evenNumberOnly(numbers){
    let evenList = [];
    // console.log(numbers);
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log(number);
            evenList.push(number);
        }
    }
    return evenList;
}

const numbers = [54, 74, 433, 64, 69];
// const evens = evenNumberOnly(numbers);
// console.log(evens);


function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}

console.log(sumOfEvenNumbers(numbers));