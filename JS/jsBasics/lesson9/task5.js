'use strict';

const users = [
	{
		name: 'Taras Shevchenko',
		age: 20,
		email: 'vusakozaka@gmail.com',
	},

	{
		name: 'Lesia Ukrainka',
		age: 25,
		email: 'lesiunia@gmail.com',
	},
	{
		name: 'Ivan Franko',
		age: 27,
		email: 'betterthanshevchenko@gmail.com',
	},
];

for (const user of users) {
	const { name, age, email } = user;
	console.log(`Name: ${name}, Age: ${age}, Email: ${email} `);
}
