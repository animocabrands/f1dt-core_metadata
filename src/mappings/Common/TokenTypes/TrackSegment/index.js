const { createCollectionId } = require('../../../../utils/ids');
const Season = require('../../Attributes/Season');
const TrackSegments = require('./TrackSegments');

const Type = 'Track';
const TypeId = '6';
const SubType = 'None';
const SubTypeId = '0';
const FullTypeId = '6,0';
const Collection = `${Type} 0`;
const CollectionId = createCollectionId(0, TypeId, SubTypeId);

const ByTrackId = {};

for (const segment of TrackSegments) 
{
    ByTrackId[segment.trackId] = segment;
}

module.exports = {
    All: [...TrackSegments],
    TrackSegments,
    ByTrackId,
    collection: Collection,
    collectionId: CollectionId,
    type: Type,
    typeId: TypeId,
    subType: SubType,
    subTypeId: SubTypeId,
    fullTypeId: FullTypeId,
};
