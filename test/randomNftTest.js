const { getCoreMetadata } = require('../src/utils/metadata');
const { createTokenId } = require('../src/utils/ids');
const { All: allTeams } = require('../src/mappings/Season2020/Attributes/Team');
const { All: allModels } = require('../src/mappings/Season2020/Attributes/Model');
const { All: allParts } = require('../src/mappings/Season2020/TokenTypes/Part');
const { All: allGears } = require('../src/mappings/Season2020/TokenTypes/Gear');
const { All: allTyres } = require('../src/mappings/Season2020/TokenTypes/Tyres');
const { Legendary, Epic1, Epic2 } = require('../src/mappings/Common/Attributes/Rarity/Rarities');
const { Car, Driver, Part, Gear, Tyres } = require('../src/mappings/Common/Attributes/Type/Types');
const testConstants = require('./testConstants');
const assert = require('assert').strict;

const createTestTokenId = (tokenType, rarity, stat1, stat2, stat3, specificId) => {
    let metadata = {
        typeId: tokenType,
        subTypeId: '0',
        seasonId: '3',
        modelId: '0',
        rarity: rarity,
        countryId: '0',
        labelId: '0',
        driverId: '0',
        racing: {
            stat1: stat1,
            stat2: stat2,
            stat3: stat3,
            luck: '0',
            effect: '0',
            special1: '0',
            special2: '0'
        }
    };

    switch (tokenType)
    {
        case Car.typeId:
        case Driver.typeId:
            if (hasTeam(rarity)) {
                metadata.teamId = specificId;
            } else {
                metadata.modelId = specificId;
            }
            break;
        case Part.typeId:
        case Gear.typeId:
        case Tyres.typeId:
            metadata.subTypeId = specificId;
            break;
    }

    return createTokenId(metadata, false);
}

const hasTeam = (rarity) => {
    return rarity == Legendary.rarity || rarity == Epic1.rarity || rarity == Epic2.rarity;
}

const buildTokens = (tokenType, rarity, min, max, specificId) => {
    try {
        const slotCount = max - min + 1;
        var tokens = new Array(slotCount * 3);
        for (let i = 0; i < slotCount; i++) {
            tokens[i] = createTestTokenId(tokenType, rarity, min + i, min, min, specificId);
            tokens[i + slotCount]  = createTestTokenId(tokenType, rarity, min, min + i, min, specificId);
            tokens[i + slotCount * 2]  = createTestTokenId(tokenType, rarity, min, min, min + i, specificId);
        }

        return tokens;
    } catch (e) {
        console.error(e);
    }
}

const verifyStatsNfts = (tokens, min, max) => {
    for (const token of tokens) {
        const metadata = getCoreMetadata(token);
        assert(metadata);
        const racingData = metadata.racing;
        assert(racingData);

        const stat1 = racingData['stat1'];
        assert(stat1 >= min && stat1 <= max);
        const stat2 = racingData['stat2'];
        assert(stat2 >= min && stat2 <= max);
        const stat3 = racingData['stat3'];
        assert(stat3 >= min && stat3 <= max);
    }
}

describe('RandomizedNfts', function() {
    describe('#car', function() {
        describe("Check racing attributes are in range", function() {
            before(function() {
                this.scoresMap = new Map(Object.entries(testConstants.t1Scores));
            });

            it("Build tokens", function() {
                this.scoresMap.forEach((val, key) => {
                    const teamExists = hasTeam(key);
                    for (const id of teamExists ? allTeams : allModels) {
                        const tokens = buildTokens(Car.typeId, key, val.min, val.max, teamExists ? id.teamId : id.modelId);
                        verifyStatsNfts(tokens, val.min, val.max);
                    }
                });
            });
        });
    });

    describe('#driver', function() {
        describe("Check racing attributes are in range", function() {
            before(function() {
                this.scoresMap = new Map(Object.entries(testConstants.t1Scores));
            });

            it("Build tokens", function() {
                this.scoresMap.forEach((val, key) => {
                    const teamExists = hasTeam(key);
                    for (const id of teamExists ? allTeams : allModels) {
                        const tokens = buildTokens(Driver.typeId, key, val.min, val.max, teamExists ? id.teamId : id.modelId);
                        verifyStatsNfts(tokens, val.min, val.max);
                    }
                });
            });
        });
    });

    describe('#part', function() {
        describe("Check racing attributes are in range", function() {
            before(function() {
                this.scoresMap = new Map(Object.entries(testConstants.t1Scores));
            });

            it("Build tokens", function() {
                this.scoresMap.forEach((val, key) => {
                    for (const id of allParts) {
                        const tokens = buildTokens(Part.typeId, key, val.min, val.max, id.subTypeId);
                        verifyStatsNfts(tokens, val.min, val.max);
                    }
                });
            });
        });
    });

    describe('#gear', function() {
        describe("Check racing attributes are in range", function() {
            before(function() {
                this.scoresMap = new Map(Object.entries(testConstants.t1Scores));
            });

            it("Build tokens", function() {
                this.scoresMap.forEach((val, key) => {
                    for (const id of allGears) {
                        const tokens = buildTokens(Gear.typeId, key, val.min, val.max, id.subTypeId);
                        verifyStatsNfts(tokens, val.min, val.max);
                    }
                });
            });
        });
    });

    describe('#tyres', function() {
        describe("Check racing attributes are in range", function() {
            before(function() {
                this.scoresMap = new Map(Object.entries(testConstants.t1Scores));
            });

            it("Build tokens", function() {
                this.scoresMap.forEach((val, key) => {
                    for (const id of allTyres) {
                        const tokens = buildTokens(Tyres.typeId, key, val.min, val.max, id.subTypeId);
                        verifyStatsNfts(tokens, val.min, val.max);
                    }
                });
            });
        });
    });
});
