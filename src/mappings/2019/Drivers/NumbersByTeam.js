const TeamNameById = require('../Teams/NameById');
const NumbersByTeamId = require('./NumbersByTeamId');

const NumbersByTeam = {};
for (const [key, values] of Object.entries(NumbersByTeamId)) {
    NumbersByTeam[key] = values;
    NumbersByTeam[TeamNameById[key]] = values;
}

module.exports = NumbersByTeam;