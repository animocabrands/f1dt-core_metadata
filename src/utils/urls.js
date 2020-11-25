const config = require('../../config');

function getImageKey(name, coreMetadata) {
    const tier = coreMetadata.rarityTier.toLowerCase();

    let imageKey = '';
    switch (coreMetadata.type) {
        case 'Track':
        case 'Car':
        case 'Driver':
            imageKey = `${coreMetadata.season}_${name.replace(/\s+/g, '')}_${tier}.png`;
            break;
        case 'Tyres':
            imageKey = `${coreMetadata.season}_${name.toLowerCase().replace(/\s+/g, '')}_${tier}.png`;
            break;
        default:
            imageKey = `${coreMetadata.season}_${coreMetadata.subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
            break;
    }

    return imageKey;
}

function getImageUrl(name, coreMetadata, network = 'mainnet') {
    return `${config[network].assets_url}/image/${getImageKey(name, coreMetadata)}`;
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
