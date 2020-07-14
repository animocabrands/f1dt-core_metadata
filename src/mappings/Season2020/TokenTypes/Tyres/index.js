const Tyres = require('./Tyres');

const TypeId = '5';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};
const ByTokenId = {};

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
    ByTokenId,
    typeId: TypeId,
}
