

const Season2019Collections = require('./Season2019');
const Season2020Collections = require('./Season2020');

module.exports = {
    '2019': Season2019Collections,
    Season2019: Season2019Collections,

    '2020': Season2020Collections,
    Season2020: Season2020Collections,

    All: [
        ...Season2019Collections,
        ...Season2020Collections,
    ],
}
