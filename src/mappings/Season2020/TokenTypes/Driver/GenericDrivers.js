const Models = require('../../Attributes/Model/Models');

const RiptideDriver = {
    driver: Models.RiptideModel.model + " Driver",
    model: Models.RiptideModel.model,
    extendedMetadata: {
        name: Models.RiptideModel.model + " Driver",
        description:
            "A Riptide driver will not be forced into error, and not through caution, but through pure race intelligence."
    },
};
const SaberDriver = {
    driver: Models.SaberModel.model + " Driver",
    model: Models.SaberModel.model,
    extendedMetadata: {
        name: Models.SaberModel.model + " Driver",
        description:
            "Defensive specialists who are able to cover the line. Saber drivers are going to be one of the fastest on the track."
    },
};
const CosmoDriver = {
    driver: Models.CosmoModel.model + " Driver",
    model: Models.CosmoModel.model,
    extendedMetadata: {
        name: Models.CosmoModel.model + " Driver",
        description:
            "Driving intelligence and positional sense give Cosmo drivers an awareness of every part of the circuit during a race."
    },
};
const SpecterDriver = {
    driver: Models.SpecterModel.model + " Driver",
    model: Models.SpecterModel.model,
    extendedMetadata: {
        name: Models.SpecterModel.model + " Driver",
        description:
            "There one minute, gone the next - Specter drivers come with speed. They'll always challenge to increase their position in the race."
    },
};
const PythonDriver = {
    driver: Models.PythonModel.model + " Driver",
    model: Models.PythonModel.model,
    extendedMetadata: {
        name: Models.PythonModel.model + " Driver",
        description:
            "Never one to be challenged by the car they're driving, the Python driver adapts with ease and can make any car faster."
    },
};
const HornetDriver = {
    driver: Models.HornetModel.model + " Driver",
    model: Models.HornetModel.model,
    extendedMetadata: {
        name: Models.HornetModel.model + " Driver",
        description:
            "Aggressive drivers with a ruthless streak. Never let your guard down around a Hornet, or be prepared to lose your place to them."
    },
};
const ShutdownDriver = {
    driver: Models.ShutdownModel.model + " Driver",
    model: Models.ShutdownModel.model,
    extendedMetadata: {
        name: Models.ShutdownModel.model + " Driver",
        description:
            "In tune with their car, adaptable to changes, Shutdown drivers aren't phased by what a race may throw at them."
    },
};
const EmpressDriver = {
    driver: Models.EmpressModel.model + " Driver",
    model: Models.EmpressModel.model,
    extendedMetadata: {
        name: Models.EmpressModel.model + " Driver",
        description:
            "Steely, impossible to face. It doesn't matter if it's the first lap, or the last, the Empress driver will be ready to move."
    },
};
const TalonDriver = {
    driver: Models.TalonModel.model + " Driver",
    model: Models.TalonModel.model,
    extendedMetadata: {
        name: Models.TalonModel.model + " Driver",
        description:
            'Few are as complete and skilled as the Char driver. Composed, but not reserved. They attack, but do so without danger ever being present.',
    },
};
const WrathDriver = {
    driver: Models.WrathModel.model + " Driver",
    model: Models.WrathModel.model,
    extendedMetadata: {
        name: Models.WrathModel.model + " Driver",
        description:
            "Fast in practice, fast in qualifying, fast during the race. Whatever the situation, they're going to be on the pace."
    },
};

module.exports = {
    RiptideDriver,
    SaberDriver,
    CosmoDriver,
    SpecterDriver,
    PythonDriver,
    HornetDriver,
    ShutdownDriver,
    EmpressDriver,
    TalonDriver,
    WrathDriver
};
