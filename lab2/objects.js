'use strict';

const fn = function() {
    const person1 = { name: 'Marcus' };
    console.log('1. Initial constant object:', person1);

    let person2 = { name: 'Aurelius' };
    console.log('2. Initial variable object:', person2);

    person1.name = 'Marcus Aurelius';  
    person2.name = 'Marcus Aurelius';  
    console.log('3. After changing names:');
    console.log('   person1:', person1);
    console.log('   person2:', person2);

    try {
        person1 = { name: 'New Person' };
    } catch (e) {
        console.log('4. Cannot reassign constant object:', e.message);
    }

    person2 = { name: 'New Person' };console.log('5. After reassignment:');
    console.log('   person1:', person1);
    console.log('   person2:', person2);

    console.log('\nBehavior explanation:');
    console.log('- const prevents reassignment of the variable');
    console.log('- const does NOT prevent modification of object properties');
    console.log('- let allows both reassignment and property modification');
};

const createUser = function(name, city) {
    return { name, city };
};

console.log('\nTest createUser function:');
console.log(createUser('Marcus Aurelius', 'Roma'));

module.exports = { fn, createUser };
