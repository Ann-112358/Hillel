'use strict'

function devide(numerator, denominator) {

    if (denominator === 0) {
        throw new Error('Denominator cannot be zero');
    }
   
    if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error('Numerator and denominator must be valid numbers');
    }

    return numerator / denominator;

}

try {
    console.log(devide(50, 2));
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('Execution completed');
}

try {
    console.log(devide(50, 0));
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('Execution completed');
}

try {
    console.log(devide(50, 'two'));
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('Execution completed');
}
