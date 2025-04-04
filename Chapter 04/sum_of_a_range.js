// Function with 2 parameters that returns an array containing all numbers from 1st parameter to 2nd parameter.
const range = (start, end) => {
    const array1 = [];
    for (let i = start; i <= end; i++) {
        array1.push(i);
    }
    return array1;
}

console.log(range(1, 10));


// Sum function that takes an array of numbers and returns the sum of those numbers.
const sum = arr => {
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArray += arr[i];
    }
    return sumOfArray
}

console.log(sum(range(1, 10)));


// Bonus assignment: Modified range function with optional third parameter that controls the increment/decrement step value.
const rangePlusStep = (start, end, step = 1) => {
    const arr2 = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr2.push(i);
        }
        return arr2;
    } else if (step < 0) {
        for (let i = start; i >= end; i -= (step * -1)) {
            arr2.push(i);
        }
        return arr2;
    } 
} 

console.log(rangePlusStep(1, 10, 2));
console.log(rangePlusStep(5, 2, -1));
