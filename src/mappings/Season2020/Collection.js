const Car = require('./Car');
const Driver = require('./Driver');
const Parts = require('./Part');
const Gears = require('./Gear');
const Tyres = require('./Tyres');

const Collections = [
    {
        collection: Car.collection,
        collectionId: Car.collectionId,
        fullTypeId: Car.fullTypeId,
    },
    {
        collection: Driver.collection,
        collectionId: Driver.collectionId,
        fullTypeId: Driver.fullTypeId,
    },
];

Collections.push(
    [...Parts.All, ...Gears.All, ...Tyres.All].map((subType) => {
        return {
            collection: subType.collection,
            collectionId: subType.collectionId,
            fullTypeId: subType.fullTypeId,
        };
    })
);

const ByName = {};
const ByCollectionId = {};
const ByFullTypeId = {};

for (const collection of Collections) {
    ByName[collection.collection] = collection;
    ByCollectionId[collection.collectionId] = collection;
    ByFullTypeId[collection.fullTypeId] = collection;
}

module.exports = {
    All: Collections,
    ByName,
    ByCollectionId,
    ByFullTypeId,
};
