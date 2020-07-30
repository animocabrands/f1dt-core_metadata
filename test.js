const assert = require('assert');
const isEqual = require('lodash.isequal');
const { getCoreMetadata, getFullMetadata } = require('./src/utils/metadata');

const tokenId = '57897811519642769433138067471762254623735906850517137802921006713614358282351'; // the 1-1-1
const coreMetadata = getCoreMetadata(tokenId);
console.log(coreMetadata);
const fullMetadata = getFullMetadata(tokenId);
console.log(fullMetadata);

const { createTokenId } = require('./src/utils/ids');

let tokenId1, tokenId2;

try {
    tokenId1 = createTokenId({
        // using numerical values
        typeId: '1', // Car
        subTypeId: '0', // None
        seasonId: '2', // 2019
        teamId: '1', // Alfa Romeo Racing
        rarity: '0', // Apex
    });
} catch (e) {
    console.error(e);
}

try {
    tokenId2 = createTokenId({
        // using mapped values
        type: 'Car',
        subType: 'None',
        season: '2019',
        team: 'Alfa Romeo Racing',
        rarity: '0', // Apex
    });
} catch (e) {
    console.error(e);
}

assert(isEqual(tokenId1, tokenId2));

try {
    const tokenId = createTokenId({});
} catch (e) {
    console.error(e);
}

try {
    const tokenId = createTokenId({
        // using mapped values
        type: 'Car',
        subType: 'None',
        season: '2019',
        team: 'Alfa Romeo Racing',
        rarity: '0', // Apex
        racing: {
            stat1: 1002,
        },
    });
} catch (e) {
    console.error(e);
}
