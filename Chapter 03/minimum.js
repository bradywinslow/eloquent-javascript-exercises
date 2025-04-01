export function min(num1, num2) {
    return Math.min(num1, num2);
}

export function min2(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log(min2(5, 17));
console.log(min2(-32, -101));
