const Season = require('../../Season');
const { createCollectionId } = require('../../../../metadata/utils/collection');

const PowerUnit = {
    subType: 'Power Unit',
    subTypeId: '1',
    fullTypeId: '3,1',
    collection: `Power Unit ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '1'),
    extendedMeta: {
        name: 'Power Unit',
        description: 'The modern F1 power unit is a turbocharged four-stroke 1.6 litre V6, able to deliver 15,000 rpm.',
    },
};
const Turbocharger = {
    subType: 'Turbocharger',
    subTypeId: '2',
    fullTypeId: '3,2',
    collection: `Turbocharger ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '2'),
    extendedMeta: {
        name: 'Turbocharger',
        description:
            'A turbine attached to the engine captures exhaust to power a compressor, increasing air density and allowing an engine to punch above its weight.',
    },
};
const FrontWing = {
    subType: 'Front Wing',
    subTypeId: '3',
    fullTypeId: '3,3',
    collection: `Front Wing ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '3'),
    extendedMeta: {
        name: 'Front Wing',
        description:
            'The front wing is used to redirect air flow either beneath the car to create downforce, or around the tires to reduce drag.',
    },
};
const RearWing = {
    subType: 'Rear Wing',
    subTypeId: '4',
    fullTypeId: '3,4',
    collection: `Rear Wing ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '4'),
    extendedMeta: {
        name: 'Rear Wing',
        description:
            'The rear wing provides drag that contributes to downforce, but also houses the DRS, which can be toggled during overtaking to trade drag for top speed.',
    },
};
const EnergyStore = {
    subType: 'Energy Store',
    subTypeId: '5',
    fullTypeId: '3,5',
    collection: `Energy Store ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '5'),
    extendedMeta: {
        name: 'Energy Store',
        description:
            'Part of the ERS [Energy Recovery System], the ES aptly stores energy recovered from braking so that it can be redistributed in the form of significant extra horsepower during acceleration.',
    },
};
const Brakes = {
    subType: 'Brakes',
    subTypeId: '6',
    fullTypeId: '3,6',
    collection: `Brakes ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '6'),
    extendedMeta: {
        name: 'Brakes',
        description:
            'Formula 1 braking systems employ hydraulic disk brakes with redundant reservoirs, and are capable of bringing the car to a full stop, requiring deft handling by the driver.',
    },
};
const Transmission = {
    subType: 'Transmission',
    subTypeId: '7',
    fullTypeId: '3,7',
    collection: `Transmission ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '7'),
    extendedMeta: {
        name: 'Transmission',
        description:
            'Attached directly to the chassis and the engine, the sequential gearbox is electronically controlled and semi-automatic, allowing for seamless gear switching at speed.',
    },
};
const Suspension = {
    subType: 'Suspension',
    subTypeId: '8',
    fullTypeId: '3,8',
    collection: `Suspension ${Season.season}`,
    collectionId: createCollectionId(Season.seasonId, '3', '8'),
    extendedMeta: {
        name: 'Suspension',
        description:
            'Concerned with absorbing and defusing impacts with the track surface, the suspension acts as the platform for translating engine power and downforce into speed.',
    },
};

module.exports = [PowerUnit, Turbocharger, FrontWing, RearWing, EnergyStore, Brakes, Transmission, Suspension];
