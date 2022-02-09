"use strict"

// ЗАДАЧА 1

const sumTo = (n) => {
    if (n === 1) {
        return n; 
      } else {
        return n + sumTo(n - 1); 
      }
}

console.log(sumTo(5));
console.log(sumTo(4));
console.log(sumTo(3));

// короткая версия:

const sumToShort = (n) => (n === 1) ? n : n + sumToShort(n - 1);

console.log(sumToShort(4));
console.log(sumToShort(3));


// ЗАДАЧА 2

const findShort = (string) => string.split(" ").reduce((a, b) => a.length <= b.length ? a : b);

console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));
