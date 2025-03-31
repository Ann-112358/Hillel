'use strict'

let numberArray = [6, 9, 5, 8, 3, 10, 10];

if (ValidateInput(numberArray)) {

	let min = Math.min(...numberArray);
	let max = Math.max(...numberArray);
	let sum = numberArray.reduce((acc, num) => acc + num, 0);
	let result = sum - max - min;

	console.log(result);
}

function ValidateInput(arr) {

	if (numberArray === null || numberArray.length <= 1 || numberArray == "None" || numberArray == "Nothing") {

		console.log(0);
		return false;

	}
	return true;
}