const Models = require('./Models');

const ById = {};
const ByName = {};

for (const model of Models) {
    ById[model.modelId] = model;
    ByName[model.model] = model;
}

module.exports = {
    All: Models,
    ById,
    ByName,
};
