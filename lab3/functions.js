'use strict';

const random = function(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateKey = function(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = random(0, characters.length - 1);
        key += characters[index];
    }
    return key;
};

const ipToInt = function(ip = '127.0.0.1') {
    return ip.split('.')
        .reduce((result, octet, index) => {
            return result + (Number(octet) << ((3 - index) * 8));
        }, 0);
};

const introspect = function(iface) {
    return Object.entries(iface)
        .filter(([_, value]) => typeof value === 'function')
        .map(([name, func]) => [name, func.length]);
};

const testCases = function() {
    console.log('Random tests:');
    console.log('random(10):', random(10));
    console.log('random(5, 10):', random(5, 10));

    console.log('\nGenerate key test:');
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    console.log('generateKey(16, characters):', generateKey(16, characters));

    console.log('\nIP conversion tests:');
    console.log('127.0.0.1 ->', ipToInt('127.0.0.1'));
    console.log('10.0.0.1 ->', ipToInt('10.0.0.1'));
    console.log('192.168.1.10 ->', ipToInt('192.168.1.10'));
    console.log('Default IP ->', ipToInt());

    console.log('\nIntrospection test:');
    const testObj = {
        m1: x => [x],
        m2: function(x, y) { return [x, y]; },
        m3(x, y, z) { return [x, y, z]; }
    };
    console.log('Introspection result:', introspect(testObj));
};

module.exports = {
    random,
    generateKey,
    ipToInt,
    introspect,
    testCases
};

testCases();
