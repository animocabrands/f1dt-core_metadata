const Models = require('../../Attributes/Model/Models');

const RiptideCar = {
    car: 'Riptide',
    model: Models.RiptideModel.model,
    extendedMetadata: {
        name: 'Riptide',
        description:
            'As the Riptide name and livery would suggest, this car is known for its ferocity and water-like pliability.'
    },
};
const SaberCar = {
    car: 'Saber',
    model: Models.SaberModel.model,
    extendedMetadata: {
        name: 'Saber',
        description:
            'The Saber car lives up to the name, with aerodynamics that allow it to cut through the air, maximising downforce along the way.'
    },
};
const CosmoCar = {
    car: 'Cosmo',
    model: Models.CosmoModel.model,
    extendedMetadata: {
        name: 'Cosmo',
        description:
            'Cutting edge engineering, with performance to match, the Cosmo car represents an evolution in sporting technology.'
    },
};
const SpecterCar = {
    car: 'Specter',
    model: Models.SpecterModel.model,
    extendedMetadata: {
        name: 'Specter',
        description:
            'Agile and flexible, the Specter makes tight corners and overtaking opportunities an easy task.'
    },
};
const PythonCar = {
    car: 'Python',
    model: Models.PythonModel.model,
    extendedMetadata: {
        name: 'Python',
        description:
            'Raw power and high downforce - the Python sticks to the track like no other.'
    },
};
const HornetCar = {
    car: 'Hornet',
    model: Models.HornetModel.model,
    extendedMetadata: {
        name: 'Hornet',
        description:
            'Blistering acceleration and ferocious corner exits are hallmarks of the Hornet.'
    },
};
const ShutdownCar = {
    car: 'Shutdown',
    model: Models.ShutdownModel.model,
    extendedMetadata: {
        name: 'Shutdown',
        description:
            'Contrary to what its name may suggest, the almost rugged Shutdown car is reliable, sturdy and masterfully machined.'
    },
};
const EmpressCar = {
    car: 'Empress',
    model: Models.EmpressModel.model,
    extendedMetadata: {
        name: 'Empress',
        description:
            "Regal and commanding, the Empress car's presence on the track is not to be ignored, or you may find yourself quickly behind it."
    },
};
const TalonCar = {
    car: 'Talon',
    model: Models.TalonModel.model,
    extendedMetadata: {
        name: 'Talon',
        description:
            'Focused on speed and running tight lines, the Talon is able to stick to the quickest racing line with ease regardless of surface condition.'
    },
};
const WrathCar = {
    car: 'Wrath',
    model: Models.WrathModel.model,
    extendedMetadata: {
        name: 'Wrath',
        description:
            "Air flow superiority makes the Wrath convert every stream into an efficient force."
    },
};

module.exports = {
    RiptideCar, 
    SaberCar, 
    CosmoCar, 
    SpecterCar,
    PythonCar,
    HornetCar,
    ShutdownCar,
    EmpressCar,
    TalonCar,
    WrathCar
};

