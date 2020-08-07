const { createCollectionId } = require('../../../../utils/ids');
const Season = require('../../Season');
const TeamDrivers = require('./TeamDrivers');
const GenericDrivers = require('./GenericDrivers');

const Type = 'Driver';
const TypeId = '2';
const SubType = 'None';
const SubTypeId = '0';
const FullTypeId = '2,0';
const Collection = `${Type} ${Season.season}`;
const CollectionId = createCollectionId(Season.seasonId, TypeId, SubTypeId);

const ByName = {};
const ById = {};
const ByModel = {};
const ByTokenId = {};

for (const teamDriver of TeamDrivers) {
    ById[teamDriver.driverId] = teamDriver;
    ByName[teamDriver.driver] = teamDriver;
}

for (const genericDriver of GenericDrivers) {
    ByModel[genericDriver.model] = genericDriver;
    ByName[genericDriver.driver] = genericDriver;
}

module.exports = {
    All: [...TeamDrivers, ...GenericDrivers],
    TeamDrivers,
    GenericDrivers,
    ByModel,
    ById,
    ByName,
    ByTokenId,
    collection: Collection,
    collectionId: CollectionId,
    typeId: TypeId,
    subType: SubType,
    subTypeId: SubTypeId,
    fullTypeId: FullTypeId,
};
