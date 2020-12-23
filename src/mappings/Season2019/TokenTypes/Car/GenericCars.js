const Models = require('../../Attributes/Model/Models');

const SatsumaCar = {
    car: 'Satsuma Car',
    model: Models.SatsumaModel.model,
    extendedMetadata: {
        name: 'Satsuma Car',
        description:
            'Satsuma cars are backed by some of the best engineers around, crafters of premium machines, with near peerless engines. Every season you can guarantee that a Satsuma will be carrying some of the best technology available.',
    },
};
const CarbonCar = {
    car: 'Carbon Car',
    model: Models.CarbonModel.model,
    extendedMetadata: {
        name: 'Carbon Car',
        description:
            'Carbon cars are known for being tirelessly maintained and tweaked every race, every season. Perfection is the pursuit, and the Carbon car takes steps towards it every season.',
    },
};
const JetCar = {
    car: 'Jet Car',
    model: Models.JetModel.model,
    extendedMetadata: {
        name: 'Jet Car',
        description:
            'Reliability and Jet go hand in hand. Although not the fastest on the grid, you can guarantee that a Jet car will always finish any Grand Prix® it enters.',
    },
};
const TiburonCar = {
    car: 'Tiburon Car',
    model: Models.TiburonModel.model,
    extendedMetadata: {
        name: 'Tiburon Car',
        description:
            'The Tiburon car demonstrates the evolution of aerodynamics. It converts all air flow during a race into an advantage.',
    },
};
const CloverCar = {
    car: 'Clover Car',
    model: Models.CloverModel.model,
    extendedMetadata: {
        name: 'Clover Car',
        description:
            "Clover cars are known for a ruggedness that isn't often associated with the sport. But this moniker is accurate, as a Clover car will perform on any track in any weather and always finish.",
    },
};
const RayCar = {
    car: 'Ray Car',
    model: Models.RayModel.model,
    extendedMetadata: {
        name: 'Ray Car',
        description:
            'New to the grid, Ray cars are making an impression on the grid. They perform consistently with great speed and have a good track record for finishing races.',
    },
};
const PlumeCar = {
    car: 'Plume Car',
    model: Models.PlumeModel.model,
    extendedMetadata: {
        name: 'Plume Car',
        description:
            'Plume are another car known for reliability. Engineered to push boundaries and perform on the limits of racing, they consistently finish races.',
    },
};
const SparkCar = {
    car: 'Spark Car',
    model: Models.SparkModel.model,
    extendedMetadata: {
        name: 'Spark Car',
        description:
            'Not known to have the most innovative engineering, Spark cars are all about speed, especially when it comes to cornering. They race through turns at an unrivalled pace and challenge any car for pace on the straights.',
    },
};
const CharCar = {
    car: 'Char Car',
    model: Models.CharModel.model,
    extendedMetadata: {
        name: 'Char Car',
        description:
            'The chassis of a Char has seen every track many times over. It can be relied upon to consistently deliver speed and results. Fast, agile, and sturdy, it stays around for a reason.',
    },
};
const FossilCar = {
    car: 'Fossil Car',
    model: Models.FossilModel.model,
    extendedMetadata: {
        name: 'Fossil Car',
        description:
            'Drivers say that Fossil cars seem to "behave". They\'re agile and able to dance to the whim of the driver. It\'s easy to look good when behind the wheel of the Fossil.',
    },
};

module.exports = {SatsumaCar, CarbonCar, JetCar, TiburonCar, CloverCar, RayCar, PlumeCar, SparkCar, CharCar, FossilCar};
