'use strict'

const number = 7;

console.log("Using 'For' loop")

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`)
}

console.log('-----------------');

console.log("Using 'While' loop")

let i = 1;

while (i <= 10) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    i++;
}