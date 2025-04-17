'use strict'

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]

if (numbersList.length === 0) {
    console.log('The array is empty');
} else {
    const average = numbersList.reduce((acc, num) => acc + num, 0) / numbersList.length;
    console.log('The average is:', average);
};
