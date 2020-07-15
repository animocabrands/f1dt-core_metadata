const { getCoreMetadata, getFullMetadata } = require('./src/utils/metadata');

const tokenId = '57897811519642769433138067471762254623735906850517137802921006713614358282351'; // the 1-1-1
const coreMetadata = getCoreMetadata(tokenId);
console.log(coreMetadata);
const fullMetadata = getFullMetadata(tokenId);
console.log(fullMetadata);

const { createTokenId } = require('./src/utils/ids');

const tokenId1 = createTokenId({ // using numerical values
    typeId: '1', // Car
    subTypeId: '0', // None
    seasonId: '2', // 2019
    teamId: '1', // Alfa Romeo Racing
    rarity: '0', // Apex
});
const tokenId2 = createTokenId({ // using mapped values
    type: 'Car',
    subType: 'None',
    season: '2019',
    team: 'Alfa Romeo Racing',
    rarity: '0', // Apex
});
console.log(tokenId1, tokenId2, tokenId1 == tokenId2);

const tokenId3 = createTokenId({ // using mapped values
    // type: 'Part',
    // season: '2019',
    // rarity: '0',
}); // should throw
