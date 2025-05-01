'use strict';

function handleNum(num, even, odd) {
	num % 2 === 0 ? even() : odd();
}

function handleEven() {
	console.log('This number is even!');
}

function handleOdd() {
	console.log('This number is odd!');
}

handleNum(6, handleEven, handleOdd);
handleNum(19, handleEven, handleOdd);
