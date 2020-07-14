const Teams = require('./Teams');

const ById = {};
const ByName = {};
const ByDriver = {};

for (const team of Teams) {
    ById[team.teamId] = team;
    ByName[team.team] = team;
    for (const driver of team.drivers) {
        ByDriver[driver] = team;
    }
}

module.exports = {
    All: Teams,
    ById,
    ByName,
    ByDriver,
};
