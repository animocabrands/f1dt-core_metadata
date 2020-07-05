const mappings = require('../mappings');
const { Common, Season2020 } = mappings;
const { encodeCollectionId, subTypeCollectionsByType } = require('./Common');

const SeasonName = '2020';

const CarRacingAttributes = Season2020.Cars.RacingAttributes;
const DriverRacingAttributes = Season2020.Drivers.RacingAttributes;

const CarRacingAttributesLayout = [
    { name: CarRacingAttributes.core[0], length: 16, index: 120 },
    { name: CarRacingAttributes.core[1], length: 16, index: 104 },
    { name: CarRacingAttributes.core[2], length: 16, index: 88 },
];

const DriverRacingAttributesLayout = [
    { name: DriverRacingAttributes.core[0], length: 16, index: 120 },
    { name: DriverRacingAttributes.core[1], length: 16, index: 104 },
    { name: DriverRacingAttributes.core[2], length: 16, index: 88 },
];

const Car = {
    name: `Car ${SeasonName}`,
    id: encodeCollectionId(Common.Seasons.IdByName[SeasonName], Common.Types.IdByName['Car'], 0),
    layout: [
        { name: "Rarity", length: 8, index: 176 },
        { name: "Team", length: 8, index: 184 },
        { name: "Model", length: 8, index: 192 },
        { name: "Track", length: 16, index: 168 },
        { name: "Label", length: 16, index: 152 },
        ...CarRacingAttributesLayout,
        { name: "Luck", length: 16, index: 72 },
        { name: "Effect", length: 8, index: 64 },
        { name: "Special1", length: 8, index: 56 },
        { name: "Special2", length: 8, index: 48 },
        { name: "Counter", length: 48, index: 0 },
    ]
};

const PartsLayout = [
    { name: "Rarity", length: 8, index: 176 },
    { name: "Label", length: 16, index: 152 },
    ...CarRacingAttributesLayout,
    { name: "Luck", length: 16, index: 72 },
    { name: "Counter", length: 48, index: 0 },
];

const Parts = subTypeCollectionsByType(SeasonName, 'Parts', PartsLayout);

const TyresLayout = [
    { name: "Rarity", length: 8, index: 176 },
    { name: "Label", length: 16, index: 152 },
    ...CarRacingAttributesLayout,
    { name: "Luck", length: 16, index: 72 },
    { name: "Counter", length: 48, index: 0 },
];

const Tyres = subTypeCollectionsByType(SeasonName, 'Tyres', TyresLayout);

const Driver = {
    name: `Drivers ${SeasonName}`,
    id: encodeCollectionId(Common.Seasons.IdByName[SeasonName], Common.Types.IdByName['Driver'], 0),
    layout: [
        { name: "Rarity", length: 8, index: 176 },
        { name: "Team", length: 8, index: 184 },
        { name: "DriverNumber", length: 16, index: 136 },
        { name: "Model", length: 8, index: 192 },
        { name: "Label", length: 16, index: 152 },
        ...DriverRacingAttributesLayout,
        { name: "Luck", length: 16, index: 72 },
        { name: "Effect", length: 8, index: 64 },
        { name: "Special1", length: 8, index: 56 },
        { name: "Special2", length: 8, index: 48 },
        { name: "Counter", length: 48, index: 0 },
    ]
};

const GearsLayout = [
    { name: "Rarity", length: 8, index: 176 },
    { name: "Label", length: 16, index: 152 },
    ...DriverRacingAttributesLayout,
    { name: "Luck", length: 16, index: 72 },
    { name: "Counter", length: 48, index: 0 },
];

const Gears = subTypeCollectionsByType(SeasonName, 'Gears', GearsLayout);

const Collections = [
    Car,
    ...Parts,
    Driver,
    ...Gears,
    ...Tyres,
];

module.exports = Collections;
