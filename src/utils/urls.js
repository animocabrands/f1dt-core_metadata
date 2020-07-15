const config = require('../../config');

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

function getImageUrl(meta, network = 'mainnet') {
    return `${config[network].assets_url}/image/${getTokenImageKey(
        meta.season,
        meta.type,
        meta.subType,
        meta.name,
        meta.rarityTier
    )}`;
}

function getExternalUrl(id, network = 'mainnet') {
    return config[network].external_url.replace('{id}', id);
}

function getMetadataUrl(id, network = 'mainnet') {
    return `${config[network].assets_url}/json/${id}`;
}

module.exports = {
    getImageUrl,
    getExternalUrl,
    getMetadataUrl,
};
