const Countries = require('./Countries');
const allCountries = Object.values(Countries);

const ByName = {};
const ById = {};


for (const country of allCountries) {
    ByName[country.country] = country;
    ById[country.countryId] = country;
}

module.exports = {
    All: allCountries,
    ByName,
    ById,
};
