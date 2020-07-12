const Gloves = {
    category_name: 'Gloves',
    name: 'Gloves',
    description:
        "Made with the same flame-retardant material as the driver's suit, a driver's gloves must protect the drivers whilst also allowing the sensitivity necessary to steer with skill.",
};
const Suit = {
    category_name: 'Suit',
    name: 'Suit',
    description:
        "Making use of multiple layers of lightweight, thermal-resistant fibre, today's racing suits protect drivers from incredible temperatures while remaining breathable.",
};
const Helmet = {
    category_name: 'Helmet',
    name: 'Helmet',
    description:
        'Built to protect the drivers from the extreme elements of racing, the newest helmets are the toughest yet.',
};
const Boots = {
    category_name: 'Boots',
    name: 'Boots',
    description:
        "The driver's fireproof ankle boots are made of soft, cushioned leather with thin rubber soles to provide accurate and slip-free contact with the car's pedals.",
};

const ByTypes = {
    '4,1': Gloves,
    '4,2': Suit,
    '4,3': Helmet,
    '4,4': Boots,
};

module.exports = ByTypes;
