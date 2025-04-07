'use strict'

let numArray = [34.5, 56.2, 11, 13];

let arr = [];

for (let i = 0; i < numArray.length; i++) {
   
    let result = Math.round(numArray[i] / 5) * 5;
    arr.push(result);
}

console.log(arr);


