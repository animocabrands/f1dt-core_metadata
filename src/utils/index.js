const {createCollectionId, createTokenId} = require('./ids');
const {getCoreMetadata, getFullMetadata} = require('./metadata');
const {validateCoreMetadata} = require('./validation');
const {getImageUrl, getExternalUrl, getMetadataUrl} = require('./urls');

module.exports = {
  createCollectionId,
  createTokenId,
  getCoreMetadata,
  getFullMetadata,
  validateCoreMetadata,
  getImageUrl,
  getExternalUrl,
  getMetadataUrl,
};
