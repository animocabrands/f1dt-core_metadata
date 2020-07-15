const BigInteger = require('big-integer');
const { encode } = require('bits.js');
const { validateCoreMetadata } = require('./validation');

const constants = require('../constants');

function createCollectionId(seasonId, typeId, subTypeId) {
    return encode(constants.CollectionEncodingBitsLayout, {
        nfFlag: BigInteger(1),
        padding1: BigInteger(0),
        typeId: BigInteger(typeId),
        subTypeId: BigInteger(subTypeId),
        seasonId: BigInteger(seasonId),
        _: BigInteger(0),
    }).toString(10);
}

function createTokenId(metadata) {
    validateCoreMetadata(metadata);

    const fieldsToEncode = {
        nfFlag: BigInteger(1),
        padding1: BigInteger(),
        typeId: metadata.typeId ? BigInteger(metadata.typeId) : BigInteger(),
        subTypeId: metadata.subTypeId ? BigInteger(metadata.subTypeId) : BigInteger(),
        seasonId: metadata.seasonId ? BigInteger(metadata.seasonId) : BigInteger(),
        padding2: BigInteger(),
        modelId: metadata.modelId ? BigInteger(metadata.modelId) : BigInteger(),
        teamId: metadata.teamId ? BigInteger(metadata.teamId) : BigInteger(),
        rarity: metadata.rarity ? BigInteger(metadata.rarity) : BigInteger(),
        trackId: metadata.trackId ? BigInteger(metadata.trackId) : BigInteger(),
        labelId: metadata.labelId ? BigInteger(metadata.labelId) : BigInteger(),
        driverId: metadata.driverId ? BigInteger(metadata.driverId) : BigInteger(),
        stat1: metadata.stat1 ? BigInteger(metadata.stat1) : BigInteger(),
        stat2: metadata.stat2 ? BigInteger(metadata.stat2) : BigInteger(),
        stat3: metadata.stat3 ? BigInteger(metadata.stat3) : BigInteger(),
        luck: metadata.luck ? BigInteger(metadata.luck) : BigInteger(),
        effect: metadata.effect ? BigInteger(metadata.effect) : BigInteger(),
        special1: metadata.special1 ? BigInteger(metadata.special1) : BigInteger(),
        special2: metadata.special2 ? BigInteger(metadata.special2) : BigInteger(),
        counter: metadata.counter ? BigInteger(metadata.counter) : BigInteger(),
    };

    return encode(constants.TokenBitsLayout, fieldsToEncode).toString(10);
}

module.exports = {
    createCollectionId,
    createTokenId,
};
