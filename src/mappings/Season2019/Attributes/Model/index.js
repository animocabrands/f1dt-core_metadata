const Models = require('./Models');
const allModels = Object.values(Models);

const ById = {};
const ByName = {};

for (const model of allModels) {
  ById[model.modelId] = model;
  ByName[model.model] = model;
}

module.exports = {
  All: allModels,
  ById,
  ByName,
};
