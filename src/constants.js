
const BitsLayout = [
    ///////////////// TOKEN ID /////////////////
    { name: "counter", bits: 48 },         // 48
    { name: "special2", bits: 8 },         // 56
    { name: "special1", bits: 8 },         // 64
    { name: "effect", bits: 8 },           // 72
    { name: "luck", bits: 16 },            // 88
    { name: "stat3", bits: 16 },           // 104
    { name: "stat2", bits: 16 },           // 120
    { name: "stat1", bits: 16 },           // 136
    { name: "driverNumber", bits: 16 },    // 152
    { name: "label", bits: 16 },           // 168
    { name: "track", bits: 8 },            // 176
    { name: "rarity", bits: 8 },           // 184
    { name: "team", bits: 8 },             // 192
    { name: "model", bits: 8 },            // 200
    { name: "padding2", bits: 24 },        // 224
    ///////////////// COLLECTION ID /////////////
    { name: "season", bits: 8 },           // 232
    { name: "subType", bits: 8 },          // 240
    { name: "type", bits: 8 },             // 248
    { name: "padding1", bits: 7 },         // 255
    { name: "nfFlag", bits: 1 }            // 256 
];

const NFCollectionMaskLength = 32;


module.exports = {
    BitsLayout,
    NFCollectionMaskLength
};
