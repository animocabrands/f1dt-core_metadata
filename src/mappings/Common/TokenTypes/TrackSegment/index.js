const Seasons = require('../../Attributes/Season/Seasons');
const TrackSegments = require('./TrackSegments');

const {createCollectionId} = require('../../../../utils/ids');
const Type = require('../../Attributes/Type/Types');
const Track = require('../../Attributes/Track/Tracks');

const type = Type.Track.type;
const typeId = Type.Track.typeId;
const subType = 'None';
const subTypeId = '0';
const fullTypeId = '6,0';
const collection = `${type} ${Seasons.NoSeason.seasonId}`;
const collectionId = createCollectionId(Seasons.NoSeason.seasonId, typeId, subTypeId);

const getName = (trackId, rarity, segment) => {
  const trackSegment = getTrackSegment(trackId, rarity, segment);
  if (trackSegment) {
    return trackSegment.name;
  }

  return '';
};

const getDescription = (trackId, rarity, segment) => {
  const trackSegment = getTrackSegment(trackId, rarity, segment);
  if (trackSegment) {
    return trackSegment.description;
  }

  return '';
};

const getTrackSegment = (trackId, rarity, segment) => {
  let trackSegment = {};
  switch (trackId.toString()) {
    case Track.CircuitdeMonaco.trackId:
      trackSegment = TrackSegments.MonacoTrackSegments;
      break;
    case Track.CircuitdeBelgian.trackId:
      trackSegment = TrackSegments.BelgiumTrackSegments;
      break;
    case Track.CircuitSilverstone.trackId:
      trackSegment = TrackSegments.SilverstoneTrackSegments;
      break;
    case Track.CircuitMonza.trackId:
      trackSegment = TrackSegments.MonzaTrackSegments;
      break;
    case Track.CircuitShanghai.trackId:
      trackSegment = TrackSegments.ShanghaiTrackSegments;
      break;
    case Track.CircuitBahrain.trackId:
      trackSegment = TrackSegments.BahrainTrackSegments;
      break;
    case Track.CircuitAustralia.trackId:
      trackSegment = TrackSegments.AustraliaTrackSegments;
      break;
  }

  //First Segment Id then fallback to rarity
  if (trackSegment(segment) !== undefined) {
    return trackSegment(segment);
  } else if (trackSegment(rarity) !== undefined) {
    return trackSegment(rarity);
  }
};

module.exports = {
  getName,
  getDescription,
  collection: collection,
  collectionId: collectionId,
  type: type,
  typeId: typeId,
  subType: subType,
  subTypeId: subTypeId,
  fullTypeId: fullTypeId,
};
