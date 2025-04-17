'use strict'

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [60, 70, 80, 90, 100];

const newArr = firstArr.concat(secondArr);
const newArr2 = [...firstArr, ...secondArr];

console.log(newArr);
console.log(newArr2);