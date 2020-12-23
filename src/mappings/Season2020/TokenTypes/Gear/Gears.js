const Season = require('../../Season');
const { createCollectionId } = require('../../../../utils/ids');

const Gloves = {
    subType: 'Gloves',
    subTypeId: '1',
    fullTypeId: '4,1',
    collection: `Gloves ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '4', '1'),
    extendedMetadata: {
        name: 'Gloves',
        description:
            "Made with the same flame-retardant material as the driver's suit, a driver's gloves must protect the drivers whilst also allowing the sensitivity necessary to steer with skill.",
    },
};
const Suit = {
    subType: 'Suit',
    subTypeId: '2',
    fullTypeId: '4,2',
    collection: `Suit ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '4', '2'),
    extendedMetadata: {
        name: 'Suit',
        description:
            "Making use of multiple layers of lightweight, thermal-resistant fibre, today's racing suits protect drivers from incredible temperatures while remaining breathable.",
    },
};
const Helmet = {
    subType: 'Helmet',
    subTypeId: '3',
    fullTypeId: '4,3',
    collection: `Helmet ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '4', '3'),
    extendedMetadata: {
        name: 'Helmet',
        description:
            'Built to protect the drivers from the extreme elements of racing, the newest helmets are the toughest yet.',
    },
};
const Boots = {
    subType: 'Boots',
    subTypeId: '4',
    fullTypeId: '4,4',
    collection: `Boots ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '4', '4'),
    extendedMetadata: {
        name: 'Boots',
        description:
            "The driver's fireproof ankle boots are made of soft, cushioned leather with thin rubber soles to provide accurate and slip-free contact with the car's pedals.",
    },
};

module.exports = {Gloves, Suit, Helmet, Boots};
