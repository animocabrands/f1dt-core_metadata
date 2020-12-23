const Teams = require('./Teams');
const allTeams = Object.values(Teams);

const ById = {};
const ByName = {};

for (const team of allTeams) {
    ById[team.teamId] = team;
    ByName[team.team] = team;
}

module.exports = {
    All: allTeams,
    ById,
    ByName,
};
