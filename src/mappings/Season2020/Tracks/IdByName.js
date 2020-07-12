const reverseMapping = require('../../utils/reverseMapping');
const NameById = require('./NameById');
const IdByName = reverseMapping(NameById);

module.exports = IdByName;
