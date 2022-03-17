const Seasons = require('./Seasons');
const allSeasons = Object.values(Seasons);

const ById = {};
const ByName = {};

for (const season of allSeasons) {
  ByName[season.season] = season;
  ById[season.seasonId] = season;
}

module.exports = {
  All: allSeasons,
  ById,
  ByName,
};
