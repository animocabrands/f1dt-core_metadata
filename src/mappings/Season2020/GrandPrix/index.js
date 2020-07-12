const GrandPrix = require('./GrandPrix');

const ByName = {};
const ById = {};

for (const grandPrix of GrandPrix) {
    ByName[grandPrix.track] = grandPrix;
    ById[grandPrix.trackId] = grandPrix;
}

module.exports = {
    All: GrandPrix,
    ByName,
    ById,
};
