'use strict';

let name = 'Liliana';

const birthYear = 2007;

const greet = function(username) {
    console.log(`Hello, ${username}!`);
    console.log(`Birth year: ${birthYear}`);
};

module.exports = { 
    name,
    birthYear,
    greet 
};

greet(name);