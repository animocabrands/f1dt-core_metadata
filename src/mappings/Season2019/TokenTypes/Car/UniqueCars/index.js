const ApexCars = require('./ApexCars');
const FirstEditions = require('./FirstEditions');
const allApexCars = Object.values(ApexCars);
const allFirstEditions = Object.values(FirstEditions);

module.exports = [...allApexCars, ...allFirstEditions];
