'use strict';

const average = function(a, b) {
    return (a + b) / 2;
};

const square = function(x) {
    return x * x;
};

const cube = function(x) {
    return x * x * x;
};

const calculate = function() {
    const results = [];
    
    for (let i = 0; i < 10; i++) {
        const squareResult = square(i);
        const cubeResult = cube(i);
        
        const avg = average(squareResult, cubeResult);
        
        results.push(avg);
    }
    
    return results;
};

const results = calculate();
console.log('Results:', results);

module.exports = {
    average,
    square,
    cube,
    calculate
};
