'use strict'

const person = {
    firstName: 'Lesia',
    lastName: 'Ukrainka',
    age: 25,
}

person.email = 'lesiunia@gmail.com';
delete person.age;

console.log(person);
