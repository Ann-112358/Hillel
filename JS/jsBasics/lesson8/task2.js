'use strict';

const firstArr = [1, 2, 3, 4, 5];

const secondArr = firstArr.map((item) => item * firstArr.indexOf(item));

console.log(secondArr);
