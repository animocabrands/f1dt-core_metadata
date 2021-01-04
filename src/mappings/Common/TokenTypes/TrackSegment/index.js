const Seasons = require("../../Attributes/Season/Seasons");
const TrackSegments = require("./TrackSegments");

const { createCollectionId } = require('../../../../utils/ids');
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
    let trackSegment = {};
    switch (trackId.toString())
    {
        case Track.CircuitdeMonaco.trackId:
            trackSegment = TrackSegments.MonacoTrackSegments;
            break;
        case Track.CircuitdeBelgian.trackId:
            trackSegment = TrackSegments.BelgiumTrackSegments;
            break;
    }

    if (trackSegment(segment) !== undefined) {
        return trackSegment(segment).name;
    }
    else if (trackSegment(rarity) !== undefined){
        return trackSegment(rarity).name;
    }

    return '';
}

const getDescription = (trackId, rarity, segment) => {
    let trackSegment = {};
    switch (trackId.toString())
    {
        case Track.CircuitdeMonaco.trackId:
            trackSegment = TrackSegments.MonacoTrackSegments;
            break;
        case Track.CircuitdeBelgian.trackId:
            trackSegment = TrackSegments.BelgiumTrackSegments;
            break;
    }

    //First Segment Id then fallback to rarity
    if (trackSegment(segment) !== undefined) {
        return trackSegment(segment).description;
    }
    else if (trackSegment(rarity) !== undefined) {
        return trackSegment(rarity).description;
    }

    return '';
}

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
