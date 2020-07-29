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

function createTokenId(coreMetadata) {
    validateCoreMetadata(coreMetadata);

    coreMetadata.stat1 = coreMetadata.stat1 || coreMetadata.racing.stat1;
    coreMetadata.stat2 = coreMetadata.stat2 || coreMetadata.racing.stat2;
    coreMetadata.stat3 = coreMetadata.stat3 || coreMetadata.racing.stat3;
    coreMetadata.luck = coreMetadata.luck || coreMetadata.racing.luck;
    coreMetadata.effect = coreMetadata.effect || coreMetadata.racing.effect;
    coreMetadata.special1 = coreMetadata.special1 || coreMetadata.racing.special1;
    coreMetadata.special2 = coreMetadata.special2 || coreMetadata.racing.special2;

    const fieldsToEncode = {
        nfFlag: BigInteger(1),
        padding1: BigInteger(),
        typeId: coreMetadata.typeId ? BigInteger(coreMetadata.typeId) : BigInteger(),
        subTypeId: coreMetadata.subTypeId ? BigInteger(coreMetadata.subTypeId) : BigInteger(),
        seasonId: coreMetadata.seasonId ? BigInteger(coreMetadata.seasonId) : BigInteger(),
        padding2: BigInteger(),
        modelId: coreMetadata.modelId ? BigInteger(coreMetadata.modelId) : BigInteger(),
        teamId: coreMetadata.teamId ? BigInteger(coreMetadata.teamId) : BigInteger(),
        rarity: coreMetadata.rarity ? BigInteger(coreMetadata.rarity) : BigInteger(),
        trackId: coreMetadata.trackId ? BigInteger(coreMetadata.trackId) : BigInteger(),
        labelId: coreMetadata.labelId ? BigInteger(coreMetadata.labelId) : BigInteger(),
        driverId: coreMetadata.driverId ? BigInteger(coreMetadata.driverId) : BigInteger(),
        stat1: coreMetadata.stat1 ? BigInteger(coreMetadata.stat1) : BigInteger(),
        stat2: coreMetadata.stat2 ? BigInteger(coreMetadata.stat2) : BigInteger(),
        stat3: coreMetadata.stat3 ? BigInteger(coreMetadata.stat3) : BigInteger(),
        luck: coreMetadata.luck ? BigInteger(coreMetadata.luck) : BigInteger(),
        effect: coreMetadata.effect ? BigInteger(coreMetadata.effect) : BigInteger(),
        special1: coreMetadata.special1 ? BigInteger(coreMetadata.special1) : BigInteger(),
        special2: coreMetadata.special2 ? BigInteger(coreMetadata.special2) : BigInteger(),
        counter: coreMetadata.counter ? BigInteger(coreMetadata.counter) : BigInteger(),
    };

    return encode(constants.TokenBitsLayout, fieldsToEncode).toString(10);
}

module.exports = {
    createCollectionId,
    createTokenId,
};
