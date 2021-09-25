// Only change code below this line
function sumFibonacci(num) {
    let fibs = [1, 1];
    let count = 0;
    let fibNums;

    if (num<0) {
        return 0;
    } else {
        while (num > count) {
            fibNums = fibs[count] + fibs[count + 1];
        
            if (fibNums <= num) {
              fibs.push(fibNums);
            }
        
            count++;
          }
        
          return fibs.filter(n => n % 2 !== 0).reduce((a,b) => a + b);
    }
  
    
  
  }
//  Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;