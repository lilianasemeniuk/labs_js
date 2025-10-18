'use strict';

const range = function(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
};

const rangeOdd = function(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            numbers.push(i);
        }
    }
    return numbers;
};

console.log('All numbers:', range(15, 30));
console.log('Odd numbers:', rangeOdd(15, 30));

module.exports = { range, rangeOdd };
