const Car = require('./Car');
const Driver = require('./Driver');
const Gear = require('./Gear');
const Part = require('./Part');
const Tyres = require('./Tyres');

const SubTypes = [Car, Driver, ...Part.All, ...Gear.All, ...Tyres.All];

const ByName = {};
const ByFullTypeId = {};

for (const subType of SubTypes) {
    ByName[subType.subType] = subType;
    ByFullTypeId[subType.fullTypeId] = subType;
}

module.exports = {
    All: SubTypes,
    ByName,
    ByFullTypeId,
};
