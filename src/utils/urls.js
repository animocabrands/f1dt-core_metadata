const config = require('../config');
const Types = require('../mappings/Common/Attributes/Type/Types');
const Rarities = require('../mappings/Common/Attributes/Rarity/Rarities');

function getImageKey(name, coreMetadata) {
    const tier = coreMetadata.rarityTier.toLowerCase();

    switch (coreMetadata.type) {
        case Types.Track.type:
            return `${name.replace(/\s+/g, '')}.png`;
        case Types.Car.type:
            if (coreMetadata.rarity.toString() === Rarities.Apex.rarity) {
                return `${name.replace(/\s+/g, '')}.png`;
            }
            else {
                return `${coreMetadata.season}_${name.replace(/\s+/g, '')}_${tier}.png`;
            }
        case Types.Driver.type:
            return `${coreMetadata.season}_${name.replace(/\s+/g, '')}_${tier}.png`;
        case Types.Tyres.type:
            return `${coreMetadata.season}_${name.toLowerCase().replace(/\s+/g, '')}_${tier}.png`;
        default:
            return `${coreMetadata.season}_${coreMetadata.subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
    }
}

function getImageUrl(name, coreMetadata, network = 'mainnet') {
    return `${config[network].image_url}/image/nft/${getImageKey(name, coreMetadata)}`;
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
