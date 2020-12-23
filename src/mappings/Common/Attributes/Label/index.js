const Labels = require('./Labels');
const allLabels = Object.values(Labels);

const ById = {};
const ByName = {};

for (const label of allLabels) {
    ByName[label.label] = label;
    ById[label.labelId] = label;
}

module.exports = {
    All: allLabels,
    ByName,
    ById,
};
