const assert = require('assert');
const isEqual = require('lodash.isequal');
const { getCoreMetadata, getFullMetadata } = require('../src/utils/metadata');

const tokenIds = [
    '57897811519642769433138067471762254623735906850517137802921006713614358282351', // the 1-1-1
    '57897811519642769449248426845109202255470907643272514279524697661152711147530', // crate content
    '57901379722504060151894746502873436596150635022721073061159222569367836295189', // crate content
    '57904892711394576548862646574578639720139642486097561241600186772244377108769', // crate content
    '57899578366707547846132213613383306701917508869241355999935957264509760963035', // crate content
];

for (const tokenId of tokenIds) {
    const coreMetadata = getCoreMetadata(tokenId);
    console.log(coreMetadata);
    const fullMetadata = getFullMetadata(tokenId);
    console.log(fullMetadata);
}

const { createTokenId } = require('../src/utils/ids');

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
