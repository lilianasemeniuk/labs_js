'use strict';

const inc = function(n) {
    return n + 1;
};

const incRef = function(num) {
    num.n += 1;
};

const a = 5;
const b = inc(a);
console.dir({ a, b });

const obj = { n: 5 };
incRef(obj);
console.dir(obj); 

module.exports = { inc, incRef };
