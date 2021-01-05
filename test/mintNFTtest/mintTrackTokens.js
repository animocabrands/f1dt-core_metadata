const { getCoreMetadata, getFullMetadata } = require('../../src/utils/metadata');
const { createTokenId } = require('../../src/utils/ids');
const BigInteger = require('big-integer');

try {
    //Monaco Track 1A
    // const tokenId = '57906645701046769624701038793205201920385629599121490370346791920872332460032';

    //Belgium Track 1A
    const tokenId = createTokenId({
        // using mapped values
        type: 'Track',
        subType: 'None',
        season: '0',
        rarity: '0', // Apex
        country: 'Belgium',
        trackId: '2',
        trackSegment: {
            segmentId: '' + 'A'.charCodeAt(0),
            zoneId: '1',
            earnings: '' + BigInteger(5*10**7)
        },
    });
    console.log(tokenId);
    console.log(JSON.stringify(getFullMetadata(tokenId)));
} catch (e) {
    console.error(e);
}
