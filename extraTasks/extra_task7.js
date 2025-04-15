'use strict'

const numberList = [19, 5, 42, 2, 77, -5, 7.8]

const positiveNumbers = numberList.filter(item => item > 0 && Number.isInteger(item));
positiveNumbers.sort((a, b) => a - b);

console.log(positiveNumbers);
console.log(positiveNumbers[0] + positiveNumbers[1]);