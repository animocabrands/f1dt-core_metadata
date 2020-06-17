const ModelNameById = require('../Models/NameById');

const SatsumaDriver = {
    name: "Satsuma Driver",
    description: "The Satsuma driver never appears to be under pressure, racing with a calm head and never rushing to make a move.",
};
const CarbonDriver = {
    name: "Carbon Driver",
    description: "\"Attack\" is the word of the Carbon driver. They'll never miss an opportunity to try and overtake, regardless of risk."
};
const JetDriver = {
    name: "Jet Driver",
    description: "Jet drives with their heart on their sleeve. It can lead to recklessness as much as it can to glory."
};
const TiburonDriver = {
    name: "Tiburon Driver",
    description: "You will always see a Tiburon driver putting in quick times, qualitfying well, and grabbing podiums."
};
const CloverDriver = {
    name: "Clover Driver",
    description: "Regardless of the season, weather or Driver, the Clover driver sets the benchmark for speed. Tearing throught the warm-up sessions, and constantly setting record splits."
};
const RayDriver = {
    name: "Ray Driver",
    description: "The Ray driver is a qualifying specialist. Always assured to deliver quick times and high grid placement, especially when the Driver is set-up with hot tyres and a lap's worth of fuel."
};
const PlumeDriver = {
    name: "Plume Driver",
    description: "When the skies open, the Plume driver is in their element. This driver relishes a change in the weather mid-race."
};
const SparkDriver = {
    name: "Spark Driver",
    description: "The Spark driver relishes a track stacked with turns. Throw them a chicane or hairpin, and they'll be sure to take it on with the aggression that some would only show a straight."
};
const CharDriver = {
    name: "Char Driver",
    description: "Few are as complete and skilled as the Char driver. Composed, but not reserved. They attack, but do so without danger ever being present."
};
const FossilDriver = {
    name: "Fossil Driver",
    description: "They have the tools to become great. The Fossil driver is always fast and knows when to be aggressive. Experience is the only thing they lack, but it rarely shows."
};

const ByModel = {
    '1': SatsumaDriver,
    '2': CarbonDriver,
    '3': JetDriver,
    '4': TiburonDriver,
    '5': CloverDriver,
    '6': RayDriver,
    '7': PlumeDriver,
    '8': SparkDriver,
    '9': CharDriver,
    '10': FossilDriver,
};

for (const [id, model] of Object.entries(ByModel)) {
    ByModel[ModelNameById[id]] = model
}

module.exports = ByModel;