const Season = require('../Season');
const { createCollectionId } = require('../../../metadata/utils/collection');

const SoftTyres = {
    subType: 'Soft Tyres',
    subTypeId: '1',
    fullTypeId: '5,1',
    collection: `Soft Tyres ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '5', '1'),
    extendedMeta: {
        name: 'Soft Tyres',
        description:
            'The red-banded soft compounds are for dry conditions, and maximize speed at the expense of durability.',
    },
};
const MediumTyres = {
    subType: 'Medium Tyres',
    subTypeId: '2',
    fullTypeId: '5,2',
    collection: `Medium Tyres ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '5', '2'),
    extendedMeta: {
        name: 'Medium Tyres',
        description:
            'The harder yellow-banded medium compounds are for dry conditions, these tyres present a balanced choice between speed and durability.',
    },
};
const HardTyres = {
    subType: 'Hard Tyres',
    subTypeId: '3',
    fullTypeId: '5,3',
    collection: `Hard Tyres ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '5', '3'),
    extendedMeta: {
        name: 'Hard Tyres',
        description:
            'The hardest tyre is the white-banded medium compound, preferred for its durability on demanding tracks, but slower to get going.',
    },
};
const IntermediateTyres = {
    subType: 'Intermediate Tyres',
    subTypeId: '4',
    fullTypeId: '5,4',
    collection: `Intermediate Tyres ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '5', '4'),
    extendedMeta: {
        name: 'Intermediate Tyres',
        description:
            'The green-banded intermediate tyres are for wet conditions, able to provide grip in light rain thanks to a tread pattern.',
    },
};
const WetTyres = {
    subType: 'Wet Tyres',
    subTypeId: '5',
    fullTypeId: '5,5',
    collection: `Wet Tyres ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '5', '5'),
    extendedMeta: {
        name: 'Wet Tyres',
        description:
            'The blue-banded full wet tyres are for wet conditions, and are built to maximize grip in heavy rain.',
    },
};

module.exports = [SoftTyres, MediumTyres, HardTyres, IntermediateTyres, WetTyres];
