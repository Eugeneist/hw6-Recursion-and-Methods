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