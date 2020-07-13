const Tracks = require('./Tracks');

const ByName = {};
const ById = {};

for (const track of Tracks) {
    ByName[track.track] = track;
    ById[track.trackId] = track;
}

module.exports = {
    All: Tracks,
    ByName,
    ById,
};
