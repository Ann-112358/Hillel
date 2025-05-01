'use strict';

//function declaration
function getRectangleArea1(width, height) {
	return width * height;
}

//function expression
const getRectangleArea2 = function (width, height) {
	return width * height;
};

//arrow function
const getRectangleArea3 = (width, height) => {
	return width * height;
};

console.log(getRectangleArea1(5, 10));
console.log(getRectangleArea2(5, 10));
console.log(getRectangleArea3(5, 10));
