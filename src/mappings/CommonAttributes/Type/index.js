const Types = require('./Types');

const ByName = {};
const ById = {};

for (const type of Types) {
    ByName[type.type] = type;
    ById[type.typeId] = type;
}

module.exports = {
    All: Types,
    ByName,
    ById,
};
