const NameById = require('./NameById');
const IdByName = Object.fromEntries(
    Object.entries(NameById)
        .map(([k, v]) => [k, v.category_name])
        .map((_) => _.reverse())
        .filter(([k, v]) => k != 'None')
);
module.exports = IdByName;
