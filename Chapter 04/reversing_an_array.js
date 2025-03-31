// Function that takes array as argument and produces a new array that has the same elements in the inverse order.
const reverseArray = arr => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));


// Function that modifies the array given as argument by reversing its elements.
const reverseArrayInPlace = arr => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    return arr;
}

let arrValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrValue);
console.log(arrValue);
