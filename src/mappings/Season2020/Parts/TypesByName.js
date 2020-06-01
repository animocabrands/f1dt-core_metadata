const ByTypes = require('./ByTypes');

const TypesByName = {};
for (const [types, subtype] of Object.entries(ByTypes)) {
    TypesByName[subtype.name] = types;
    TypesByName[subtype.category_name] = types;
}

module.exports = TypesByName;