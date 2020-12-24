const { getCoreMetadata } = require('./src/utils/metadata');
const { createTokenId } = require('./src/utils/ids');
const assert = require('assert').strict;

const scores = {
    '0': {
        min: 900,
        max: 1001,
    },
    '1': {
        min: 800,
        max: 900,
    },
    '2': {
        min: 750,
        max: 810,
    },
    '3': {
        min: 700,
        max: 780,
    },
    '4': {
        min: 650,
        max: 710,
    },
    '5': {
        min: 600,
        max: 680,
    },
    '6': {
        min: 560,
        max: 620,
    },
    '7': {
        min: 520,
        max: 570,
    },
    '8': {
        min: 500,
        max: 530,
    },
    '9': {
        min: 450,
        max: 510,
    },
};

const buildTokens = (tokenType, rarity) => {
    try {
        const min = scores[rarity].min;
        const max = scores[rarity].max;
        const slotCount = max - min + 1;
        const squaredSlotCount = slotCount * slotCount;
        var tokens = new Array(squaredSlotCount * slotCount);
        for (let i = 0; i < slotCount; i++) {
            for (let j = 0; j < slotCount; j++) {
                for (let k = 0; k < slotCount; k++) {
                    const t = createTokenId({
                        type: tokenType,
                        subType: 'None',
                        season: '2019',
                        team: 'Alfa Romeo Racing',
                        rarity: rarity,
                        racing: {
                            stat1: min + i,
                            stat2: min + j,
                            stat3: min + k,
                        }
                    });
                    tokens[i * squaredSlotCount + j * slotCount + k] = t;
                }
            }
        }

        return tokens;
    } catch (e) {
        console.error(e);
    }
}

describe('RandomizedNfts', function() {
    describe.only('#car', function() {
        it("Check racing attributes are in range", function() {
            this.timeout(1000 * 60 * 60 * 3);

            const scoresMap = new Map(Object.entries(scores));
            scoresMap.forEach((val, key) => {
                console.log("Testing rarity " + key);

                const min = val.min;
                const max = val.max;
                const tokens = buildTokens('Car', key);
                console.log("Created "+ tokens.length + " tokens for " + key);
                for (const t of tokens) {
                    const metadata = getCoreMetadata(t);
                    assert(metadata);
                    const racingData = metadata.racing;
                    assert(racingData);

                    const stat1 = racingData['Top Speed'];
                    assert(stat1 >= min && stat1 <= max);
                    const stat2 = racingData['Acceleration'];
                    assert(stat2 >= min && stat2 <= max);
                    const stat3 = racingData['Grip'];
                    assert(stat3 >= min && stat3 <= max);
                }
            });
        });
    });
});
