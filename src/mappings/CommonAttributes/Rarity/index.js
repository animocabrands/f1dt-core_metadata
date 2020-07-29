const Rarities = require('./Rarities');

const ByRarity = {};
const ByTier = {};

for (const rarity of Rarities) {
    ByRarity[rarity.rarity] = rarity;
    if (!ByTier[rarity.rarityTier]) {
        ByTier[rarity.rarityTier] = [];
    }
    ByTier[rarity.rarityTier].push(rarity);
}

module.exports = {
    All: Rarities,
    ByRarity,
    ByTier,
};
