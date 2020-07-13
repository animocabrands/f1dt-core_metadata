function getTokenImageKey(season, type, subType, name, tier) {
    type = type.toLowerCase();
    tier = tier.toLowerCase();
    return type == 'car' || type == 'driver'
        ? `${season}_${name.replace(/\s+/, '')}_${tier}.png`
        : `${season}_${subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
}

function getTokenImage(meta, network = 'mainnet') {
    const config = require('../../../config');
    return `${config[network].metadata_url}/image/${getTokenImageKey(
        meta.season,
        meta.type,
        meta.subType,
        meta.name,
        meta.rarityTier
    )}`;
}

module.exports = {
    getTokenImage,
};
