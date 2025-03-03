/**
 * Objective: write a function to give me the sum of all mumbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called property
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 */

function sumOfNumbers(numbers){
    // console.log(numbers);
    let total = 0;
    for(const number of numbers){
        // console.log(number);
        total = total + number;
    }
    return total;
}

const nums = [453, 64, 6, 49, 499];
const sum = sumOfNumbers(nums);
console.log('Sum of numbers is:', sum);