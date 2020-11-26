const { validateBitsLayout } = require('../src/utils/layout');

const TokenIdLength         = 256;
const CollectionMaskLength  = 32;

const TokenBitsLayout = [
    //         COLLECTION ID
    { name: 'nfFlag', bits: 1 },                        // 255
    { name: 'padding1', bits: 7 },                      // 248
    { name: 'typeId', bits: 8 },                        // 240
    { name: 'subTypeId', bits: 8 },                     // 232
    { name: 'seasonId', bits: 8 },                      // 224
    //         OTHER ATTRIBUTES
    { name: 'padding2', bits: 24 },                     // 224
    { name: 'modelId', bits: 8 },                       // 192
    { name: 'teamId', bits: 8 },                        // 184
    { name: 'rarity', bits: 8 },                        // 176
    { name: 'countryId', bits: 8 },                     // 168
    { name: 'labelId', bits: 16 },                      // 152
    { name: 'driverId', bits: 16 },                     // 136
    { name: 'racing.stat1', bits: 16 },                 // 120
    { name: 'racing.stat2', bits: 16 },                 // 104
    { name: 'racing.stat3', bits: 16 },                 // 88
    { name: 'racing.luck', bits: 16 },                  // 72
    { name: 'racing.effect', bits: 8 },                 // 64
    { name: 'racing.special1', bits: 8 },               // 56
    { name: 'racing.special2', bits: 8 },               // 48
    { name: 'counter', bits: 48 },                      // 0
].reverse();
Object.freeze(TokenBitsLayout);
validateBitsLayout(TokenBitsLayout);

const TrackSegmentTokenBitsLayout = [
    //         COLLECTION ID
    { name: 'nfFlag', bits: 1 },                        // 255
    { name: 'padding1', bits: 7 },                      // 248
    { name: 'typeId', bits: 8 },                        // 240
    { name: 'subTypeId', bits: 8 },                     // 232
    { name: 'seasonId', bits: 8 },                      // 224

    //         Other Attributes
    { name: 'padding2', bits: 12 },                     // 212
    { name: 'trackId', bits: 12 },                      // 200
    { name: 'modelId', bits: 8 },                       // 192
    { name: 'teamId', bits: 8 },                        // 184
    { name: 'rarity', bits: 8 },                        // 176
    { name: 'countryId', bits: 8 },                     // 168
    { name: 'labelId', bits: 16 },                      // 152
    { name: 'driverId', bits: 16 },                     // 136

    //          Track Attributes
    { name: "trackSegment.zoneId", bits: 8 },                  // 128
    { name: "trackSegment.segmentId", bits: 8},                // 120  
    { name: "trackSegment.earnings", bits: 32},                // 88
    { name: "padding3", bits: 40 },                     // 48
    { name: "counter", bits: 48}                        // 0
 ].reverse();
Object.freeze(TrackSegmentTokenBitsLayout);
validateBitsLayout(TrackSegmentTokenBitsLayout);

const CollectionEncodingBitsLayout = [
    { name: 'nfFlag', bits: 1 },                        // 255
    { name: 'padding1', bits: 7 },                      // 248
    { name: 'typeId', bits: 8 },                        // 240
    { name: 'subTypeId', bits: 8 },                     // 232
    { name: 'seasonId', bits: 8 },                      // 224
    { name: '_', bits: TokenIdLength - CollectionMaskLength }, // 0
].reverse();
Object.freeze(CollectionEncodingBitsLayout);
validateBitsLayout(CollectionEncodingBitsLayout);

const CollectionDecodingBitsLayout = [
    { name: 'collectionId', bits: CollectionMaskLength },       // 224
    { name: '_', bits: TokenIdLength - CollectionMaskLength },  // 0
].reverse();
Object.freeze(CollectionDecodingBitsLayout);
validateBitsLayout(CollectionDecodingBitsLayout);

module.exports = {
    TokenIdLength,
    CollectionMaskLength,
    TokenBitsLayout,
    TrackSegmentTokenBitsLayout,
    CollectionDecodingBitsLayout,
    CollectionEncodingBitsLayout,
};
