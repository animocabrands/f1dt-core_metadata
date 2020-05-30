const PowerUnit = {
    category_name: "Power Unit",
    name: "Power Unit",
    description: "The modern F1 power unit is a turbocharged four-stroke 1.6 litre V6, able to deliver 15,000 rpm."
};
const Turbocharger = {
    category_name: "Turbocharger",
    name: "Turbocharger",
    description: "A turbine attached to the engine captures exhaust to power a compressor, increasing air density and allowing an engine to punch above its weight."
};
const FrontWing = {
    category_name: "Front Wing",
    name: "Front Wing",
    description: "The front wing is used to redirect air flow either beneath the car to create downforce, or around the tires to reduce drag."
};
const RearWing = {
    category_name: "Rear Wing",
    name: "Rear Wing",
    description: "The rear wing provides drag that contributes to downforce, but also houses the DRS, which can be toggled during overtaking to trade drag for top speed."
};
const EnergyStore = {
    category_name: "Energy Store",
    name: "Energy Store",
    description: "Part of the ERS [Energy Recovery System], the ES aptly stores energy recovered from braking so that it can be redistributed in the form of significant extra horsepower during acceleration."
};
const Brakes = {
    category_name: "Brakes",
    name: "Brakes",
    description: "Formula 1 braking systems employ hydraulic disk brakes with redundant reservoirs, and are capable of bringing the car to a full stop, requiring deft handling by the driver."
};
const Transmission = {
    category_name: "Transmission",
    name: "Transmission",
    description: "Attached directly to the chassis and the engine, the sequential gearbox is electronically controlled and semi-automatic, allowing for seamless gear switching at speed."
};
const Suspension = {
    category_name: "Suspension",
    name: "Suspension",
    description: "Concerned with absorbing and defusing impacts with the track surface, the suspension acts as the platform for translating engine power and downforce into speed."
};

const ByTypes = {
    '3,1': PowerUnit,
    '3,2': Turbocharger,
    '3,3': FrontWing,
    '3,4': RearWing,
    '3,5': EnergyStore,
    '3,6': Brakes,
    '3,7': Transmission,
    '3,8': Suspension,
}

module.exports = ByTypes;