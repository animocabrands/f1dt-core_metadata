const Gears = require('./Gears');
const allGears = Object.values(Gears);

const TypeId = '3';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const gear of allGears) {
  ByName[gear.subType] = gear;
  BySubTypeId[gear.subTypeId] = gear;
  ByFullTypeId[gear.fullTypeId] = gear;
}

module.exports = {
  All: allGears,
  ByName,
  BySubTypeId,
  ByFullTypeId,
  typeId: TypeId,
};
