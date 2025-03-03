/**
 * for a given string tell me whether is has even number of characters or not
 * 
 */

function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }else{
        console.log('odd size');
        return false;
    }
    // console.log(size);
}

// evenSizedString('Dhaka');
// evenSizedString('Faka');


function doubleOrTriple(double, doTriple){
    if(doTriple === true){
        const triple = double * 3;
        return triple;
    }else{
        const result = double * 2;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));



function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

// console.log(numberOfElements([3, 53, 5643, 74, 75454, 498]));


function personAge(person){
    const name = person.name;
    const age = person.age;
    return `Name is : ${name} and Age is : ${age}`;
};

const person = {
    name: 'Shakil',
    age: 27
};

console.log(personAge(person));