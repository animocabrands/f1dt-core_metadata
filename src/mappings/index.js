const Common = require('./CommonAttributes');
const Season2019 = require('./Season2019');
const Season2020 = require('./Season2020');

const BySeason = {
    '2019': Season2019,
    '2020': Season2020,
};

module.exports = {
    Common,
    BySeason,
};
