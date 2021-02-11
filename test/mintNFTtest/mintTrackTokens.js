const { getCoreMetadata, getFullMetadata } = require('../../src/utils/metadata');
const { ById: TrackById } = require('../../src/mappings/Common/Attributes/Track');
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

const rarityToSegmentIdRangeMap = {
    '1': { // Monaco
        '1': { // Legendary
            min: 'B'.charCodeAt(0),
            max: 'C'.charCodeAt(0),
        },
        '2': { // Epic
            min: 'D'.charCodeAt(0),
            max: 'H'.charCodeAt(0),
        },
        '4': { // Rare
            min: 'I'.charCodeAt(0),
            max: 'P'.charCodeAt(0),
        },
    }
};

const rarityToTrackCountMap = {
    '1': { // Monaco
        '1': 12, // Legendary
        '2': 20, // Epic
        '4': 25, // Rare
    }
};

const rarityToEarningsMap = {
    '1': '' + BigInteger(1*10**7),
    '2': '' + BigInteger(25*10**5),
    '4': '' + BigInteger(125*10**4),
};

const createTrackTokenId = (rarityId, country, trackId, segmentId, zoneId, earnings) => {
    const tokenId = createTokenId({
        type: 'Track',
        subType: 'None',
        season: '0',
        rarity: rarityId,
        country: country,
        trackId: trackId,
        trackSegment: {
            segmentId: segmentId,
            zoneId: zoneId,
            earnings: earnings
        },
    });

    return tokenId;
}

describe('Tracks', function() {
    describe("Generate token IDs", function() {
        it("Build tokens", function() {
            const trackIds = Object.keys(TrackById).filter(key => key !== '0' && key !== '2');
            trackIds.forEach(trackId => {
                const rangeMap = new Map(Object.entries(rarityToSegmentIdRangeMap[trackId]));
                rangeMap.forEach((range, rarity) => {
                    const earnings = rarityToEarningsMap[rarity];
                    for (let i = range.min; i <= range.max; i++) {
                        const segmentId = '' + i;
                        for (let j = 1; j <= rarityToTrackCountMap[trackId][rarity]; j++) {
                            const zoneId = '' + j;
                            const country = TrackById[trackId].countryId.country;
                            const tokenId = createTrackTokenId(rarity, country, trackId, segmentId, zoneId, earnings);
                            console.log(tokenId);
                        }
                    }
                });
            });
        });
    });
});
