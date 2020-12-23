const Models = require('../../Attributes/Model/Models');

const SatsumaDriver = {
    driver: 'Satsuma Driver',
    model: Models.SatsumaModel.model,
    extendedMetadata: {
        name: 'Satsuma Driver',
        description:
            'The Satsuma driver never appears to be under pressure, racing with a calm head and never rushing to make a move.',
    },
};
const CarbonDriver = {
    driver: 'Carbon Driver',
    model: Models.CarbonModel.model,
    extendedMetadata: {
        name: 'Carbon Driver',
        description:
            '"Attack" is the word of the Carbon driver. They\'ll never miss an opportunity to try and overtake, regardless of risk.',
    },
};
const JetDriver = {
    driver: 'Jet Driver',
    model: Models.JetModel.model,
    extendedMetadata: {
        name: 'Jet Driver',
        description:
            'Jet drives with their heart on their sleeve. It can lead to recklessness as much as it can to glory.',
    },
};
const TiburonDriver = {
    driver: 'Tiburon Driver',
    model: Models.TiburonModel.model,
    extendedMetadata: {
        name: 'Tiburon Driver',
        description:
            'You will always see a Tiburon driver putting in quick times, qualifying well, and grabbing podiums.',
    },
};
const CloverDriver = {
    driver: 'Clover Driver',
    model: Models.CloverModel.model,
    extendedMetadata: {
        name: 'Clover Driver',
        description:
            'Regardless of the season, weather or car, the Clover driver sets the benchmark for speed. Tearing through the warm-up sessions, and constantly setting record splits.',
    },
};
const RayDriver = {
    driver: 'Ray Driver',
    model: Models.RayModel.model,
    extendedMetadata: {
        name: 'Ray Driver',
        description:
            "The Ray driver is a qualifying specialist. Always assured to deliver quick times and high grid placement, especially when the car is set-up with hot tyres and a lap's worth of fuel.",
    },
};
const PlumeDriver = {
    driver: 'Plume Driver',
    model: Models.PlumeModel.model,
    extendedMetadata: {
        name: 'Plume Driver',
        description:
            'When the skies open, the Plume driver is in their element. This driver relishes a change in the weather mid-race.',
    },
};
const SparkDriver = {
    driver: 'Spark Driver',
    model: Models.SparkModel.model,
    extendedMetadata: {
        name: 'Spark Driver',
        description:
            "The Spark driver relishes a track stacked with turns. Throw them a chicane or hairpin, and they'll be sure to take it on with the aggression that some would only show a straight.",
    },
};
const CharDriver = {
    driver: 'Char Driver',
    model: Models.CharModel.model,
    extendedMetadata: {
        name: 'Char Driver',
        description:
            'Few are as complete and skilled as the Char driver. Composed, but not reserved. They attack, but do so without danger ever being present.',
    },
};
const FossilDriver = {
    driver: 'Fossil Driver',
    model: Models.FossilModel.model,
    extendedMetadata: {
        name: 'Fossil Driver',
        description:
            'They have the tools to become great. The Fossil driver is always fast and knows when to be aggressive. Experience is the only thing they lack, but it rarely shows.',
    },
};

module.exports = {
    SatsumaDriver,
    CarbonDriver,
    JetDriver,
    TiburonDriver,
    CloverDriver,
    RayDriver,
    PlumeDriver,
    SparkDriver,
    CharDriver,
    FossilDriver,
};
