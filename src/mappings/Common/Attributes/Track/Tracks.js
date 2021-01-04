const Countries = require("../Country/Countries");

const NoTrack = {
    track: 'None',
    trackId: '0',
};

const CircuitdeMonaco = {
    trackId: '1',
    track: 'Circuit de Monaco',
    countryId: Countries.Monaco
};

const CircuitdeBelgian = {
    trackId: '2',
    track: 'Circuit de Belgian',
    countryId: Countries.Belgium
}

module.exports = {
    NoTrack,
    CircuitdeMonaco,
    CircuitdeBelgian
};
