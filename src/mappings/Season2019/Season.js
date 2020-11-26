const Season = require('../CommonAttributes/Season');

const _Season = '2019';
const SeasonId = Season.ByName[_Season].seasonId;

module.exports = {
    season: _Season,
    seasonId: SeasonId,
};
