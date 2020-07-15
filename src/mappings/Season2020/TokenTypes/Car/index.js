const { createCollectionId } = require('../../../../metadata/utils/collection');
const Season = require('../../Season');
const TeamCars = require('./TeamCars');
const GenericCars = require('./GenericCars');
const UniqueCars = require('./UniqueCars');
const RacingAttributes = require('./RacingAttributes');

const Type = 'Car';
const TypeId = '1';
const SubType = 'None';
const SubTypeId = '0';
const FullTypeId = '1,0';
const Collection = `${Type} ${Season.season}`;
const CollectionId = createCollectionId(Season.seasonId, TypeId, SubTypeId);

const ByName = {};
const ByTeam = {};
const ByModel = {};
const ByTokenId = {};

for (const teamCar of TeamCars) {
    ByName[teamCar.car] = teamCar;
    ByTeam[teamCar.team] = teamCar;
}

for (const genericCar of GenericCars) {
    ByName[genericCar.car] = genericCar;
    ByModel[genericCar.model] = genericCar;
}

for (const uniqueCar of UniqueCars) {
    ByName[uniqueCar.car] = uniqueCar;
    ByTokenId[uniqueCar.extendedMeta.id] = uniqueCar;
}

module.exports = {
    All: [...TeamCars, ...GenericCars, ...UniqueCars],
    TeamCars,
    GenericCars,
    UniqueCars,
    ByName,
    ByTeam,
    ByModel,
    ByTokenId,
    RacingAttributes,
    collection: Collection,
    collectionId: CollectionId,
    type: Type,
    typeId: TypeId,
    subType: SubType,
    subTypeId: SubTypeId,
    fullTypeId: FullTypeId,
};
