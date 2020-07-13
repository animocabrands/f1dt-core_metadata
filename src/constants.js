const CollectionMaskLength = 32;

const TokenBitsLayout = [
    //            COLLECTION ID            //
    { name: 'nfFlag', bits: 1 }, //        255
    { name: 'padding1', bits: 7 }, //      248
    { name: 'typeId', bits: 8 }, //        240
    { name: 'subTypeId', bits: 8 }, //     232
    { name: 'seasonId', bits: 8 }, //      224
    //           OTHER ATTRIBUTES          //
    { name: 'padding2', bits: 24 }, //     200
    { name: 'modelId', bits: 8 }, //       192
    { name: 'teamId', bits: 8 }, //        184
    { name: 'rarity', bits: 8 }, //        176
    { name: 'trackId', bits: 8 }, //       168
    { name: 'labelId', bits: 16 }, //      152
    { name: 'driverId', bits: 16 }, // 136
    { name: 'stat1', bits: 16 }, //        120
    { name: 'stat2', bits: 16 }, //        104
    { name: 'stat3', bits: 16 }, //        88
    { name: 'luck', bits: 16 }, //         72
    { name: 'effect', bits: 8 }, //        64
    { name: 'special1', bits: 8 }, //      56
    { name: 'special2', bits: 8 }, //      48
    { name: 'counter', bits: 48 }, //      0
].reverse();

const CollectionEncodingBitsLayout = [
    { name: 'nfFlag', bits: 1 }, //        255
    { name: 'padding1', bits: 7 }, //      248
    { name: 'typeId', bits: 8 }, //        240
    { name: 'subTypeId', bits: 8 }, //     232
    { name: 'seasonId', bits: 8 }, //      224
    { name: '_', bits: 256 - CollectionMaskLength },
].reverse();

const CollectionDecodingBitsLayout = [
    { name: 'collectionId', bits: CollectionMaskLength },
    { name: '_', bits: 256 - CollectionMaskLength },
].reverse();

module.exports = {
    CollectionMaskLength,
    TokenBitsLayout,
    CollectionDecodingBitsLayout,
    CollectionEncodingBitsLayout,
    // Old APIs
    NFCollectionMaskLength: CollectionMaskLength,
    BitsLayout: TokenBitsLayout,
};
