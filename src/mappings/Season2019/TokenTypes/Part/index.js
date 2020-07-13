const Parts = require('./Parts');

const TypeId = '4';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const part of Parts) {
    ByName[part.subType] = part;
    BySubTypeId[part.subTypeId] = part;
    ByFullTypeId[part.fullTypeId] = part;
}

module.exports = {
    All: Parts,
    ByName,
    BySubTypeId,
    ByFullTypeId,
    typeId: TypeId,
};
