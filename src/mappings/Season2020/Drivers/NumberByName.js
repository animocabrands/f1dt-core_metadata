const ByNumber = require('./ByNumber');

const NumberByName = {};
for (const [number, driver] of Object.entries(ByNumber)) {
    NumberByName[driver.name] = number;
}

module.exports = NumberByName;
