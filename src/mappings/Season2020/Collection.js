const TokenTypes = require('./TokenTypes');

const Collections = [
  {
    collection: TokenTypes.Car.collection,
    collectionId: TokenTypes.Car.collectionId,
    fullTypeId: TokenTypes.Car.fullTypeId,
  },
  {
    collection: TokenTypes.Driver.collection,
    collectionId: TokenTypes.Driver.collectionId,
    fullTypeId: TokenTypes.Driver.fullTypeId,
  },
];

Collections.push(
  ...[...TokenTypes.Part.All, ...TokenTypes.Gear.All, ...TokenTypes.Tyres.All].map((subType) => {
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
