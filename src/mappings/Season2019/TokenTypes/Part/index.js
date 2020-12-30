const Parts = require('./Parts');
const allParts = Object.values(Parts);

const TypeId = '4';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const part of allParts) {
    ByName[part.subType] = part;
    BySubTypeId[part.subTypeId] = part;
    ByFullTypeId[part.fullTypeId] = part;
}

module.exports = {
    All: allParts,
    ByName,
    BySubTypeId,
    ByFullTypeId,
    typeId: TypeId,
};
