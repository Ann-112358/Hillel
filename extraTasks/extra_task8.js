'use strict'

const numberList = [23, 3, 19, 21, 16];

let minNum = Math.min(...numberList);
let maxNum = Math.max(...numberList);

console.log(maxNum - minNum);