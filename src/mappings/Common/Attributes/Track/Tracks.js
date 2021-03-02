const Countries = require("../Country/Countries");

const NoTrack = {
    track: 'None',
    trackId: '0',
};

const CircuitdeMonaco = {
    trackId: '1',
    track: 'Circuit de Monaco',
    countryId: Countries.Monaco.countryId
};

const CircuitdeBelgian = {
    trackId: '2',
    track: 'Circuit de Spa-Francorchamps',
    countryId: Countries.Belgium.countryId
}

const CircuitSilverstone = {
    trackId: '3',
    track: 'Silverstone',
    countryId: Countries.GreatBritain.countryId
}

const CircuitMonza = {
    trackId: '4',
    track: 'Autodromo Nazionale di Monza',
    countryId: Countries.Italy.countryId
}

const CircuitShanghai = {
    trackId: '5',
    track: 'Shanghai International Circuit',
    countryId: Countries.China.countryId
}

module.exports = {
    NoTrack,
    CircuitdeMonaco,
    CircuitdeBelgian,
    CircuitSilverstone,
    CircuitMonza,
    CircuitShanghai,
};
