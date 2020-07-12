const SoftTyres = {
    category_name: 'Soft',
    name: 'Soft Tyres',
    description:
        'The red-banded soft compounds are for dry conditions, and maximize speed at the expense of durability.',
};
const MediumTyres = {
    category_name: 'Medium',
    name: 'Medium Tyres',
    description:
        'The harder yellow-banded medium compounds are for dry conditions, these tyres present a balanced choice between speed and durability.',
};
const HardTyres = {
    category_name: 'Hard',
    name: 'Hard Tyres',
    description:
        'The hardest tyre is the white-banded medium compound, preferred for its durability on demanding tracks, but slower to get going.',
};
const IntermediateTyres = {
    category_name: 'Intermediate',
    name: 'Intermediate Tyres',
    description:
        'The green-banded intermediate tyres are for wet conditions, able to provide grip in light rain thanks to a tread pattern.',
};
const WetTyres = {
    category_name: 'Wet',
    name: 'Wet Tyres',
    description: 'The blue-banded full wet tyres are for wet conditions, and are built to maximize grip in heavy rain.',
};

const ByTypes = {
    '5,1': SoftTyres,
    '5,2': MediumTyres,
    '5,3': HardTyres,
    '5,4': IntermediateTyres,
    '5,5': WetTyres,
};

module.exports = ByTypes;
