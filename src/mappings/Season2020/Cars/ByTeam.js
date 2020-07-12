const TeamNameById = require('../Teams/NameById');

const C38 = {
    name: 'C38',
    description:
        'Powered by a Ferrari engine, a distinctive front wing and nose section make for a unique and intelligent design.',
};
const SF90 = {
    name: 'SF90',
    description:
        'Named for the 90th anniversary of Scuderia Ferrari, this car is lighter and more aerodynamic than ever, with a unique front wing.',
};
const VF19 = {
    name: 'VF-19',
    description:
        'Sporting a radically engineered front wing and improved airflow in general, the VF-19 has taken some insightful notes from Ferrari.',
};
const MCL34 = {
    name: 'MCL34',
    description:
        'Pushing the axle forward and fitting a new front suspension means a new and improved chassis for the MCL34.',
};
const W10 = {
    name: 'W10',
    description:
        'Lighter, more aerodynamic and an improved suspension over its predecessor make for a powerful car with reduced rear tire wear.',
};
const RP19 = {
    name: 'RP19',
    description: "Marking the first Racing Point design, the RP19 remains similar to last year's platform.",
};
const RB15 = {
    name: 'RB15',
    description:
        'A new Honda engine and a re-designed rear end to match mark a welcome addition of power to a competitive chassis.',
};
const RS19 = {
    name: 'R.S.19',
    description:
        'Although similar to the previous model in many ways, the R.S.19 sports a number of subtle aerodynamic improvements.',
};
const STR14 = {
    name: 'STR14',
    description:
        'With a host of aerodynamic changes and a rear end tested by their sister team, the STR14 is a simple but effective platform.',
};
const FW42 = {
    name: 'FW42',
    description:
        'The FW42 has new aerodynamic upgrades compared to its predecessor and is powered by a Mercedes engine.',
};

const ByTeamId = {
    '1': C38,
    '2': SF90,
    '3': VF19,
    '4': MCL34,
    '5': W10,
    '6': RP19,
    '7': RB15,
    '8': RS19,
    '9': STR14,
    '10': FW42,
};

const ByTeam = {};
for (const [key, value] of Object.entries(ByTeamId)) {
    ByTeam[key] = value;
    ByTeam[TeamNameById[key]] = value;
}

module.exports = ByTeam;
