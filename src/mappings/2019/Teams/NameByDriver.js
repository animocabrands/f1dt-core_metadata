const IdByDriverNumber = require('./IdByDriverNumber');
const ByNumber = require('../Drivers/ByNumber');
const NameById = require('./NameById');

const NameByDriver = {};
for (const [key, value] of Object.entries(IdByDriverNumber)) {
    NameByDriver[key] = NameById[value];
    NameByDriver[ByNumber[key].name] = NameById[value];
}

module.exports = NameByDriver;
