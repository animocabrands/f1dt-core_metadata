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

function getTokenImageKey(season, type, subType, name, tier) {
    tier = tier.toLowerCase();

    let out = "";
    switch (type) {
        case "Car":
        case "Driver":
            out = `${season}_${name.replace(/\s+/, '')}_${tier}.png`;
            break;
        case "Tyres":
            out = `${season}_${name.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
            break;
        default:
            out = `${season}_${subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
            break;
    }

    return out;
}

module.exports = {
    getTokenImage,
};
