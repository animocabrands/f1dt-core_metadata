const Seasons = require('../Common/Season');

const Season = '2019';
const SeasonId = Seasons.ByName[Season].seasonId;

module.exports = {
    season: Season,
    seasonId: SeasonId,
};
