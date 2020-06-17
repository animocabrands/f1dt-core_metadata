const ByNumber = require('../Drivers/ByNumber');
const IdByDriverNumber = require('./IdByDriverNumber');

const IdByDriver = {};
for (const [key, value] of Object.entries(IdByDriverNumber)) {
    IdByDriver[key] = value;
    IdByDriver[ByNumber[key].name] = value;
}

module.exports = IdByDriver;