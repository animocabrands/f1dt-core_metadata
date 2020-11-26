const Season = require('../CommonAttributes/Season');

const _Season = '2020';
const SeasonId = Season.ByName[_Season].seasonId;

module.exports = {
    season: _Season,
    seasonId: SeasonId,
};
