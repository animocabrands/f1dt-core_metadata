const Season = require('../Common/Attributes/Season');

const _Season = '2020';
const SeasonId = Season.ByName[_Season].seasonId;

module.exports = {
    season: _Season,
    seasonId: SeasonId,
};
