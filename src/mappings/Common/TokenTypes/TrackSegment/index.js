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
    }

    //First Segment Id then fallback to rarity
    if (segment in trackSegment) {
        return trackSegment[segment].name;
    }
    else if(rarity in trackSegment) {
        return trackSegment[rarity].name;
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
    }

    //First Segment Id then fallback to rarity
    if (segment in trackSegment) {
        return trackSegment[segment].description;
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
