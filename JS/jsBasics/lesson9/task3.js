'use strict'


const car1 = {
    brand: 'Lexus',
    model: 'RX350',
    year: 2025,
    owner: 'Toyota'
}

const car2 = {
    brand: 'Mazda',
    model: 'Mazda6',
    year: 2024
}


const car3 = { ...car1, ...car2 };

console.log(car3);