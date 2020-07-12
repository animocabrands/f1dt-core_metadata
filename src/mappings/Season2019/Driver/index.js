const { createCollectionId } = require('../../../metadata/utils');
const Season = require('../Season');
const TeamDrivers = require('./TeamDrivers');
const GenericDrivers = require('./GenericDrivers');
const RacingAttributes = require('./RacingAttributes');

const Type = 'Driver';
const TypeId = '2';
const SubType = 'None';
const SubTypeId = '0';
const FullTypeId = '2,0';
const Collection = `${Type} ${Season.season}`;
const CollectionId = createCollectionId(Season.seasonId, TypeId, SubTypeId);

const ByName = {};
const ByNumber = {};
const ByModel = {};

for (const teamDriver of TeamDrivers) {
    ByNumber[teamDriver.driverNumber] = teamDriver;
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
    ByNumber,
    ByName,
    RacingAttributes,
    collection: Collection,
    collectionId: CollectionId,
    typeId: TypeId,
    subType: SubType,
    subTypeId: SubTypeId,
    fullTypeId: FullTypeId,
};
