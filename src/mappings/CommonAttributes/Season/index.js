const Seasons = require('./Seasons');

const ById = {};
const ByName = {};

for (const season of Seasons) {
    ByName[season.season] = season;
    ById[season.seasonId] = season;
}

module.exports = {
    All: Seasons,
    ById,
    ByName,
};
