const Labels = require('./Labels');

const ById = {};
const ByName = {};

for (const label of Labels) {
    ByName[label.label] = label;
    ById[label.labelId] = label;
}

module.exports = {
    All: Labels,
    ByName,
    ById,
};
