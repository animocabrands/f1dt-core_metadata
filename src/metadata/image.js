const config = require('../../config');

function getTokenImage(meta, network = 'mainnet'){ 
    return `${config[network].metadata_url}/image/${getTokenImageKey(
        meta.season,
        meta.type,
        meta.subType,
        meta.name,
        meta.rarityTier
    )}`;
}

function getTokenImageKey(season, type, subType, name, tier) {
    type = type.toLowerCase();
    tier = tier.toLowerCase();

    let out = "";
    switch (type) {
        case "car":
        case "driver":
            out = `${season}_${name.replace(/\s+/, '')}_${tier}.png`;
            break;
        case "tyres":
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
    getTokenImageKey
}