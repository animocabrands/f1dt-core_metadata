const config = require('../../config');
const Type = require('../mappings/Common/Attributes/Type/Types');

function getImageKey(name, coreMetadata) {
    const tier = coreMetadata.rarityTier.toLowerCase();

    switch (coreMetadata.type) {
        case Type.Track.type:
            return `${name.replace(/\s+/g, '')}.png`;
        case Type.Car.type:
        case Type.Driver.type:
            return `${coreMetadata.season}_${name.replace(/\s+/g, '')}_${tier}.png`;
        case Type.Tyres.type:
            return `${coreMetadata.season}_${name.toLowerCase().replace(/\s+/g, '')}_${tier}.png`;
        default:
            return `${coreMetadata.season}_${coreMetadata.subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
    }
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
