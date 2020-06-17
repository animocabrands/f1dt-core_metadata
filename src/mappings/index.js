const Common = require('./Common');
const Season2019 = require('./Season2019');
const Season2020 = require('./Season2020');

module.exports = {
    Common,

    Season2019,
    '2019' : Season2019,

    Season2020,
    '2020' : Season2020,
};

// console.dir(module.exports);