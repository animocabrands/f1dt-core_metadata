const Types = require('./Types');
const allTypes = Object.values(Types);

const ByName = {};
const ById = {};

for (const type of allTypes) {
  ByName[type.type] = type;
  ById[type.typeId] = type;
}

module.exports = {
  All: allTypes,
  ByName,
  ById,
};
