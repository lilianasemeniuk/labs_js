'use strict';

const fn = function() {
    console.log('Type counts:');
    const arr = [
        true,
        'hello',
        42,
        null,
        undefined,
        false,
        'world',
        -123.45,
        Symbol('sym'),
        BigInt(9007199254740991),
        { key: 'value' },
        [1, 2, 3],
        'javascript',
        true,
        0,
        NaN,
        Infinity,
        -Infinity,
        /regex/,
        new Date()
    ];

    const typeCount = {};

    for (const item of arr) {
        const type = typeof item;
        if (!(type in typeCount)) {
            typeCount[type] = 0;
        }
        typeCount[type]++;
    }

    console.log(typeCount);
    return typeCount;
};

fn();

module.exports = { fn };
