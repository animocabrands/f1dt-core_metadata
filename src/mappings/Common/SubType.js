const TokenTypes = require('./TokenTypes');

const SubTypes = [
    TokenTypes.Driver,
    TokenTypes.TrackSegments,
    // ...TokenTypes.Part.All,
    // ...TokenTypes.Gear.All,
    // ...TokenTypes.Tyres.All,
];

const ByName = {};
const ByFullTypeId = {};

for (const subType of SubTypes) {
    ByName[subType.subType] = subType;
    ByFullTypeId[subType.fullTypeId] = subType;
}

module.exports = {
    All: SubTypes,
    ByName,
    ByFullTypeId,
};
