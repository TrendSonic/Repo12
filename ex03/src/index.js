// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
     return [];
    } else {
     const numbers = rangeOfNumbers(startN + 1, endN);    
     numbers.unshift(startN);
     return numbers;
    }
   };
//  Only change code above this line

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
