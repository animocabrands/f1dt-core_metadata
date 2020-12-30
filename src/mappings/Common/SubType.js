const TokenTypes = require('./TokenTypes');

const SubTypes = [
    TokenTypes.Driver,
    TokenTypes.TrackSegment,
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
