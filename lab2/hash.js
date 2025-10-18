'use strict';

const phoneBook = function() {
    const contacts = [
        { name: 'Marcus Aurelius', phone: '+380445554433' },
        { name: 'Plato', phone: '+380442227788' },
        { name: 'Socrates', phone: '+380441234567' },
        { name: 'Aristotle', phone: '+380449876543' },
        { name: 'Pythagoras', phone: '+380445555555' }
    ];

    const findPhoneByName = function(name) {
        for (const contact of contacts) {
            if (contact.name === name) {
                return contact.phone;
            }
        }
        return 'Phone not found';
    };

    console.log('Array implementation:');
    console.log('Marcus Aurelius phone:', findPhoneByName('Marcus Aurelius'));
    console.log('Unknown phone:', findPhoneByName('Unknown'));

    const contactsHash = {
        'Marcus Aurelius': '+380445554433',
        'Plato': '+380442227788',
        'Socrates': '+380441234567',
        'Aristotle': '+380449876543',
        'Pythagoras': '+380445555555'
    };

    const findPhoneByNameHash = function(name) {
        return contactsHash[name] || 'Phone not found';
    };

    console.log('\nHash implementation:');
    console.log('Marcus Aurelius phone:', findPhoneByNameHash('Marcus Aurelius'));
    console.log('Unknown phone:', findPhoneByNameHash('Unknown'));

    return {
        findPhoneByName,
        findPhoneByNameHash
    };
};

module.exports = { phoneBook };

phoneBook();