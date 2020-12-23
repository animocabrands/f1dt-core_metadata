const { createCollectionId } = require('../../../../utils/ids');
const Season = require('../../Season');
const TeamCars = require('./TeamCars');
const GenericCars = require('./GenericCars');
const UniqueCars = require('./UniqueCars');

const allTeamCars = Object.values(TeamCars);
const allGenericCars = Object.values(GenericCars);
const allUniqueCars = Object.values(UniqueCars);

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

for (const teamCar of allTeamCars) {
    ByName[teamCar.car] = teamCar;
    ByTeam[teamCar.team] = teamCar;
}

for (const genericCar of allGenericCars) {
    ByName[genericCar.car] = genericCar;
    ByModel[genericCar.model] = genericCar;
}

for (const uniqueCar of allUniqueCars) {
    ByName[uniqueCar.car] = uniqueCar;
    ByTokenId[uniqueCar.extendedMetadata.id] = uniqueCar;
}

module.exports = {
    All: [...allTeamCars, ...allGenericCars, ...allUniqueCars],
    allTeamCars,
    allGenericCars,
    allUniqueCars,
    ByName,
    ByTeam,
    ByModel,
    ByTokenId,
    collection: Collection,
    collectionId: CollectionId,
    type: Type,
    typeId: TypeId,
    subType: SubType,
    subTypeId: SubTypeId,
    fullTypeId: FullTypeId,
};
