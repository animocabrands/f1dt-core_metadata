const BigInteger = require('big-integer');
const {encode} = require('bits.js');
const {validateCoreMetadata} = require('./validation');

const constants = require('../constants');

function createCollectionId(seasonId, typeId, subTypeId) {
  return encode(constants.CollectionEncodingBitsLayout, {
    nfFlag: BigInteger(1),
    padding1: BigInteger(0),
    typeId: BigInteger(typeId),
    subTypeId: BigInteger(subTypeId),
    seasonId: BigInteger(seasonId),
    _: BigInteger(0),
  }).toString(10);
}

function createTrackTokenId(coreMetadata) {
  const fieldsToEncode = {
    nfFlag: BigInteger(1),
    padding1: BigInteger(),
    typeId: coreMetadata.typeId ? BigInteger(coreMetadata.typeId) : BigInteger(),
    subTypeId: coreMetadata.subTypeId ? BigInteger(coreMetadata.subTypeId) : BigInteger(),
    seasonId: coreMetadata.seasonId ? BigInteger(coreMetadata.seasonId) : BigInteger(),
    padding2: BigInteger(),
    trackId: coreMetadata.trackId ? BigInteger(coreMetadata.trackId) : BigInteger(),
    modelId: coreMetadata.modelId ? BigInteger(coreMetadata.modelId) : BigInteger(),
    teamId: coreMetadata.teamId ? BigInteger(coreMetadata.teamId) : BigInteger(),
    rarity: coreMetadata.rarity ? BigInteger(coreMetadata.rarity) : BigInteger(),
    countryId: coreMetadata.countryId ? BigInteger(coreMetadata.countryId) : BigInteger(),
    labelId: coreMetadata.labelId ? BigInteger(coreMetadata.labelId) : BigInteger(),
    driverId: coreMetadata.driverId ? BigInteger(coreMetadata.driverId) : BigInteger(),
    'trackSegment.zoneId':
      coreMetadata.trackSegment && coreMetadata.trackSegment.zoneId ? BigInteger(coreMetadata.trackSegment.zoneId) : BigInteger(),
    'trackSegment.segmentId':
      coreMetadata.trackSegment && coreMetadata.trackSegment.segmentId ? BigInteger(coreMetadata.trackSegment.segmentId) : BigInteger(),
    'trackSegment.earnings':
      coreMetadata.trackSegment && coreMetadata.trackSegment.earnings ? BigInteger(coreMetadata.trackSegment.earnings) : BigInteger(),
    padding3: BigInteger(),
    counter: coreMetadata.counter ? BigInteger(coreMetadata.counter) : BigInteger(),
  };

  return encode(constants.TrackSegmentTokenBitsLayout, fieldsToEncode).toString(10);
}

function createNonTrackTokenId(coreMetadata) {
  const fieldsToEncode = {
    nfFlag: BigInteger(1),
    padding1: BigInteger(),
    typeId: coreMetadata.typeId ? BigInteger(coreMetadata.typeId) : BigInteger(),
    subTypeId: coreMetadata.subTypeId ? BigInteger(coreMetadata.subTypeId) : BigInteger(),
    seasonId: coreMetadata.seasonId ? BigInteger(coreMetadata.seasonId) : BigInteger(),
    padding2: BigInteger(),
    modelId: coreMetadata.modelId ? BigInteger(coreMetadata.modelId) : BigInteger(),
    teamId: coreMetadata.teamId ? BigInteger(coreMetadata.teamId) : BigInteger(),
    rarity: coreMetadata.rarity ? BigInteger(coreMetadata.rarity) : BigInteger(),
    countryId: coreMetadata.countryId ? BigInteger(coreMetadata.countryId) : BigInteger(),
    labelId: coreMetadata.labelId ? BigInteger(coreMetadata.labelId) : BigInteger(),
    driverId: coreMetadata.driverId ? BigInteger(coreMetadata.driverId) : BigInteger(),
    'racing.stat1': coreMetadata.racing && coreMetadata.racing.stat1 ? BigInteger(coreMetadata.racing.stat1) : BigInteger(),
    'racing.stat2': coreMetadata.racing && coreMetadata.racing.stat2 ? BigInteger(coreMetadata.racing.stat2) : BigInteger(),
    'racing.stat3': coreMetadata.racing && coreMetadata.racing.stat3 ? BigInteger(coreMetadata.racing.stat3) : BigInteger(),
    'racing.luck': coreMetadata.racing && coreMetadata.racing.luck ? BigInteger(coreMetadata.racing.luck) : BigInteger(),
    'racing.effect': coreMetadata.racing && coreMetadata.racing.effect ? BigInteger(coreMetadata.racing.effect) : BigInteger(),
    'racing.special1': coreMetadata.racing && coreMetadata.racing.special1 ? BigInteger(coreMetadata.racing.special1) : BigInteger(),
    'racing.special2': coreMetadata.racing && coreMetadata.racing.special2 ? BigInteger(coreMetadata.racing.special2) : BigInteger(),
    counter: coreMetadata.counter ? BigInteger(coreMetadata.counter) : BigInteger(),
  };

  return encode(constants.TokenBitsLayout, fieldsToEncode).toString(10);
}

function createTokenId(coreMetadata, validate = true) {
  if (validate) {
    validateCoreMetadata(coreMetadata);
  }

  const Types = require('../mappings/Common/Attributes/Type/Types');
  switch (coreMetadata.typeId) {
    //Check type is track
    case Types.Track.typeId:
      return createTrackTokenId(coreMetadata);
    default:
      return createNonTrackTokenId(coreMetadata);
  }
}

module.exports = {
  createCollectionId,
  createTokenId,
};
