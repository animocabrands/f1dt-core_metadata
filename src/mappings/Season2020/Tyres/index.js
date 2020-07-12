const Tyres = require('./Tyres');

const TypeId = '5';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const tyres of Tyres) {
    ByName[tyres.subType] = tyres;
    BySubTypeId[tyres.subTypeId] = tyres;
    ByFullTypeId[tyres.fullTypeId] = tyres;
}

module.exports = {
    All: Tyres,
    ByName,
    BySubTypeId,
    ByFullTypeId,
    typeId: TypeId,
}
