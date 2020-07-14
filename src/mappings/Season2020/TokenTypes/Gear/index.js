const Gears = require('./Gears');

const TypeId = '3';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};
const ByTokenId = {};

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
    ByTokenId,
    typeId: TypeId,
};
