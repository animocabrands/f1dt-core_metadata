const Tyres = require('./Tyres');
const allTyres = Object.values(Tyres);

const TypeId = '5';

const ByName = {};
const BySubTypeId = {};
const ByFullTypeId = {};

for (const tyres of allTyres) {
    ByName[tyres.subType] = tyres;
    BySubTypeId[tyres.subTypeId] = tyres;
    ByFullTypeId[tyres.fullTypeId] = tyres;
}

module.exports = {
    All: allTyres,
    ByName,
    BySubTypeId,
    ByFullTypeId,
    typeId: TypeId,
};
