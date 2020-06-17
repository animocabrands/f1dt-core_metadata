const { encode } = require('bits.js');
const BigInteger = require('big-integer');
const mappings = require('../mappings');

const CollectionBitsLayout = [
    { name: "tokenId", bits: 224 },
    { name: "season", bits: 8 },
    { name: "subType", bits: 8 },
    { name: "type", bits: 8 },
    { name: "padding1", bits: 7 },
    { name: "nfFlag", bits: 1 }
];

function encodeCollectionId(season, type, subType) {
    return encode(CollectionBitsLayout, {
        tokenId: BigInteger(0),
        season: BigInteger(season),
        subType: BigInteger(subType),
        type: BigInteger(type),
        padding1: BigInteger(0),
        nfFlag: BigInteger(1),
    }).toString(10)
}

function subTypeCollectionsByType(seasonName, typeName, layout) {
    return Object.entries(mappings[seasonName][typeName].ByTypes)
        .map(([typeIds, meta]) => {
            return {
                name: `${meta.name} ${seasonName}`,
                id: encodeCollectionId(
                    mappings.Common.Seasons.IdByName[seasonName],
                    typeIds.split(',')[0],
                    typeIds.split(',')[1]
                ),
                layout
            }
        });
}

module.exports = {
    CollectionBitsLayout,
    encodeCollectionId,
    subTypeCollectionsByType
}