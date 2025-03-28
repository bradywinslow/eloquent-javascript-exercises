for (let fizzBuzz = 1; fizzBuzz < 101; fizzBuzz++) {
    if (fizzBuzz % 3 === 0 && fizzBuzz % 5 !== 0) {
        console.log('Fizz');
    } else if (fizzBuzz % 5 === 0 && fizzBuzz % 3 !== 0) {
        console.log('Buzz');
    } else if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(fizzBuzz);
    } 
};
