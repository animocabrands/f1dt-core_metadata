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

const getTrackSegment = (trackId, eventSeason) => {
  let trackSegment = {};
  switch (trackId.toString()) {
    case Track.CircuitdeMonaco.trackId:
      trackSegment = TrackSegments.MonacoTrackSegment;
      break;
    case Track.CircuitdeBelgian.trackId:
      trackSegment = TrackSegments.BelgiumTrackSegment;
      break;
    case Track.CircuitSilverstone.trackId:
      trackSegment = TrackSegments.GreatBritainTrackSegment;
      break;
    case Track.CircuitMonza.trackId:
      trackSegment = TrackSegments.ItaliaTrackSegment;
      break;
    case Track.CircuitShanghai.trackId:
      trackSegment = TrackSegments.ChinaTrackSegment;
      break;
    case Track.CircuitBahrain.trackId:
      trackSegment = TrackSegments.BahrainTrackSegment;
      break;
    case Track.CircuitAustralia.trackId:
      trackSegment = TrackSegments.AustraliaTrackSegment;
      break;
  }

  return trackSegment(eventSeason.toString());
};

module.exports = {
  getTrackSegment,
  collection: collection,
  collectionId: collectionId,
  type: type,
  typeId: typeId,
  subType: subType,
  subTypeId: subTypeId,
  fullTypeId: fullTypeId,
};
