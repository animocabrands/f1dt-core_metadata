const Rarities = require('./Rarities');

const ByRarity = {};
const ByTier = {};
const allRarities = Object.values(Rarities);

for (const rarity of allRarities) {
    ByRarity[rarity.rarity] = rarity;
    if (!ByTier[rarity.rarityTier]) {
        ByTier[rarity.rarityTier] = [];
    }
    ByTier[rarity.rarityTier].push(rarity);
}

module.exports = {
    All: allRarities,
    ByRarity,
    ByTier,
};
