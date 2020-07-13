const { encode } = require('bits.js');
const BigInteger = require('big-integer');
const constants = require('../../constants');

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

module.exports = {
    createCollectionId,
};
