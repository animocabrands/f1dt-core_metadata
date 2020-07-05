const GearsByTypes = require('../Gears/ByTypes');
const PartsByTypes = require('../Parts/ByTypes');
const TyresByTypes = require('../Tyres/ByTypes');

const SubTypes = {
    '1,0': { category_name: 'None' }, // Cars
    '2,0': { category_name: 'None' }, // Drivers
    ...PartsByTypes,
    ...GearsByTypes,
    ...TyresByTypes
}

module.exports = SubTypes;

// SubTypes.

// console.dir(module.exports);