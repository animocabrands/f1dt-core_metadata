const Gears = require('./Gears');

const TypeId = '3';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const gear of Gears) {
    ByName[gear.subType] = gear;
    BySubTypeId[gear.subTypeId] = gear;
    ByFullTypeId[gear.fullTypeId] = gear;
}

module.exports = {
    All: Gears,
    ByName,
    BySubTypeId,
    ByFullTypeId,
    typeId: TypeId,
};
