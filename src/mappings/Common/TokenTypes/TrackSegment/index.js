import { NoSeason } from "../../Attributes/Season/Seasons";
import { MonacoTrackSegments } from "./TrackSegments";

const { createCollectionId } = require('../../../../utils/ids');
const TrackSegments = require('./TrackSegments');

const Type = require('../../Attributes/Type/Types');
const Track = require('../../Attributes/Track/Tracks');

const type = Type.Track.type;
const typeId = Type.Track.typeId;
const subType = 'None';
const subTypeId = '0';
const fullTypeId = '6,0';
const collection = `${type} ${NoSeason.seasonId}`;
const collectionId = createCollectionId(NoSeason.seasonId, typeId, subTypeId);

const getName = (trackId, rarity, trackSegmentId) => {
    let trackSegment = {};
    switch (trackId.toString())
    {
        case Track.CircuitdeMonaco.trackId:
            trackSegment = MonacoTrackSegments;
            break;          
    }

    //First Segment Id then fallback to rarity
    if (trackSegmentId in trackSegment) {
        return trackSegment[trackSegmentId].name;
    }
    else if(rarity in trackSegment) {
        return trackSegment[rarity].name;
    }

    return '';
}

const getDescription = (trackId, rarity, trackSegmentId) => {
    let trackSegment = {};
    switch (trackId.toString())
    {
        case Track.CircuitdeMonaco.trackId:
            trackSegment = MonacoTrackSegments;
            break;
    }

    //First Segment Id then fallback to rarity
    if (trackSegmentId in trackSegment) {
        return trackSegment[trackSegmentId].description;
    }
    else if (rarity in trackSegment) {
        return trackSegment[rarity].description;
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
