const {
    getCoreMetadata,
    getFullMetadata,
    createTokenId,
    coreMetadataFromId,
    fullMetadataFromId,
    idFromCoreMetadata,
} = require('./metadata');

module.exports = {
    getCoreMetadata,
    getFullMetadata,
    createTokenId,
    // Old API
    coreMetadataFromId,
    fullMetadataFromId,
    idFromCoreMetadata,
};
