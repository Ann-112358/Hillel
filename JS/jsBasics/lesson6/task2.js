'use strict';

function isAdult(age) {
	if (age >= 18) {
		return true;
	}
	return false;
}

console.log(`Is user adult? - ` + isAdult(25));
console.log(`Is user adult? - ` + isAdult(15));
