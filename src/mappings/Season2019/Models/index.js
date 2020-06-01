const NameById = require('./NameById');
const IdByName = require('./IdByName');
const list = require('../../utils/list');

const List = list(NameById);

module.exports = {
    NameById,
    IdByName,
    List
}

// console.dir(module.exports);