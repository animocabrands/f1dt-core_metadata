const Tracks = require('./Tracks');
const allTracks = Object.values(Tracks);

const ByName = {};
const ById = {};
const ByCountryId = {}

for (const track of allTracks) {
    ByName[track.track] = track;
    ById[track.trackId] = track;
    if (ByCountryId[track.countryId]) {
        ByCountryId[track.countryId] = [...ByCountryId[track.countryId], track];
    }
    else {
        ByCountryId[track.countryId] = [track];
    }
}

module.exports = {
    All: allTracks,
    ByName,
    ById,
    ByCountryId,
};
