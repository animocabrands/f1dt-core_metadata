const { inventoryIds } = require('@animoca/blockchain-inventory_metadata');
const BigInteger = require('big-integer');
const { decode } = require('bits.js');
const { getExternalUrl, getImageUrl, getMetadataUrl } = require('./urls');

const constants = require('../constants');
const commonMappings = require('../mappings/CommonAttributes');

const RepairList = require('../mappings/RepairList');

function getCoreMetadata(id) {
    id = RepairList[id] || id;

    const encoded = BigInteger(id);
    let decoded = decode(constants.TokenBitsLayout, encoded);
    for (const key in decoded) {
        decoded[key] = Number(decoded[key].toString(10));
    }

    const type = commonMappings.Type.ById[decoded.typeId].type;
    const label = commonMappings.Label.ById[decoded.labelId].label;
    const season = commonMappings.Season.ById[decoded.seasonId].season;
    const rarityTier = commonMappings.Rarity.ByRarity[decoded.rarity].rarityTier;
    let racingAttributes;
    switch (type) {
        case 'Car':
        case 'Part':
        case 'Tyres':
            racingAttributes = commonMappings.RacingAttributes['Car']
            break;
        case 'Driver':
        case 'Gear':
            racingAttributes = commonMappings.RacingAttributes['Driver']
            break;
        default:
            racingAttributes = ['Stat 1', 'Stat 2', 'Stat 3'];
    }

    const racing = {
        stat1: decoded['racing.stat1'],
        stat2: decoded['racing.stat2'],
        stat3: decoded['racing.stat3'],
        luck: decoded['racing.luck'],
        special1: decoded['racing.special1'],
        special2: decoded['racing.special2'],
        effect: decoded['racing.effect'],
    }

    racing[racingAttributes[0]] = decoded['racing.stat1']
    racing[racingAttributes[1]] = decoded['racing.stat2']
    racing[racingAttributes[2]] = decoded['racing.stat3']

    const seasonMappings = require(`../mappings/Season${season}`);
    const fullTypeId = `${decoded.typeId},${decoded.subTypeId}`;
    const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId].subType;
    const track = seasonMappings.Attributes.Track.ById[decoded.trackId].track;
    const team = seasonMappings.Attributes.Team.ById[decoded.teamId].team;
    const model = seasonMappings.Attributes.Model.ById[decoded.modelId].model;

    const driver = seasonMappings.TokenTypes.Driver.ById[decoded.driverId].driver;

    const coreMetadata = {
        seasonId: decoded.seasonId,
        season,
        typeId: decoded.typeId,
        type,
        subTypeId: decoded.subTypeId,
        subType,
        rarity: decoded.rarity,
        rarityTier,
        trackId: decoded.trackId,
        track,
        teamId: decoded.teamId,
        team,
        modelId: decoded.modelId,
        model,
        driverId: decoded.driverId,
        driver,
        labelId: decoded.labelId,
        label,
        counter: decoded.counter,
        racing,
    };

    return coreMetadata;
}

function getOpenseaMetadata(coreMetadata) {
    let racingAttributes = [];
    switch (coreMetadata.type) {
        case 'Car':
        case 'Part':
        case 'Tyres':
            racingAttributes = commonMappings.RacingAttributes['Car'].map((attribute) =>
                attribute.toLowerCase().replace(' ', '_')
            );
            break;
        case 'Driver':
        case 'Gear':
            racingAttributes = commonMappings.RacingAttributes['Driver'].map((attribute) =>
                attribute.toLowerCase().replace(' ', '_')
            );
            break;
        default:
            racingAttributes = ['stat_1', 'stat_2', 'stat_3'];
    }

    racingAttributes = [
        {
            display_type: 'boost_number',
            trait_type: racingAttributes[0],
            value: coreMetadata.racing.stat1,
        },
        {
            display_type: 'boost_number',
            trait_type: racingAttributes[1],
            value: coreMetadata.racing.stat2,
        },
        {
            display_type: 'boost_number',
            trait_type: racingAttributes[2],
            value: coreMetadata.racing.stat3,
        },
    ];

    if (coreMetadata.racing.luck) {
        racingAttributes.push({
            display_type: 'boost_number',
            trait_type: 'luck',
            value: coreMetadata.racing.luck,
            max_value: 1001,
        });
    }

    // if (coreMetadata.racing.effect) {
    //     racingAttributes.push({
    //         trait_type: 'effect',
    //         value: coreMetadata.racing.effect,
    //     });
    // }

    // if (coreMetadata.racing.special1) {
    //     racingAttributes.push({
    //         trait_type: 'special_1',
    //         value: coreMetadata.racing.special1,
    //     });
    // }
    // if (coreMetadata.racing.special2) {
    //     racingAttributes.push({
    //         trait_type: 'special_2',
    //         value: coreMetadata.racing.special2,
    //     });
    // }

    let attributes = [
        {
            trait_type: 'type',
            value: coreMetadata.type,
        },
        {
            trait_type: 'tier',
            value: coreMetadata.rarityTier,
        },
        {
            display_type: 'number',
            trait_type: 'rarity',
            value: coreMetadata.rarity,
        },
        {
            trait_type: 'season',
            value: coreMetadata.season,
        },
    ];

    if (coreMetadata.trackId) {
        attributes.push({
            trait_type: 'track',
            value: coreMetadata.track,
        });
    }

    if (coreMetadata.teamId) {
        attributes.push({
            trait_type: 'team',
            value: coreMetadata.team,
        });
    }

    if (coreMetadata.labelId) {
        attributes.push({
            trait_type: 'label',
            value: coreMetadata.label,
        });
    }

    if (coreMetadata.driverId) {
        attributes.push({
            display_type: 'number',
            trait_type: 'driver_number',
            value: coreMetadata.driverId,
        });
    }

    if (coreMetadata.subTypeId) {
        switch (coreMetadata.type) {
            case 'Gear':
                attributes.push({
                    trait_type: 'gear_type',
                    value: coreMetadata.subType,
                });
                break;
            case 'Part':
                attributes.push({
                    trait_type: 'part_type',
                    value: coreMetadata.subType,
                });
                break;
            case 'Tyres':
                attributes.push({
                    trait_type: 'tyres_type',
                    value: coreMetadata.subType,
                });
                break;
        }
    }

    attributes = attributes.concat(racingAttributes);

    return attributes;
}

function getFullMetadata(id, network = 'mainnet') {
    const coreMetadata = getCoreMetadata(id);
    let openseaMetadata = getOpenseaMetadata(coreMetadata);

    let extendedMetadata = {};
    const seasonMappings = require(`../mappings/Season${coreMetadata.season}`);

    const fullTypeId = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
    switch (coreMetadata.type) {
        case 'Car':
            if (coreMetadata.team != 'None' && coreMetadata.team != 'F1® Delta Time') {
                extendedMetadata = { ...seasonMappings.TokenTypes.Car.ByTeam[coreMetadata.team].extendedMeta };
            } else if (coreMetadata.model != 'None') {
                extendedMetadata = { ...seasonMappings.TokenTypes.Car.ByModel[coreMetadata.model].extendedMeta };
            }
            break;
        case 'Driver':
            if (coreMetadata.driver != 'None') {
                extendedMetadata = { ...seasonMappings.TokenTypes.Driver.ByName[coreMetadata.driver].extendedMeta };
            } else if (coreMetadata.model) {
                extendedMetadata = { ...seasonMappings.TokenTypes.Driver.ByModel[coreMetadata.model].extendedMeta };
            }
            break;
        case 'Part':
        case 'Gear':
        case 'Tyres':
            extendedMetadata = {
                ...seasonMappings.TokenTypes[coreMetadata.type].ByFullTypeId[fullTypeId].extendedMeta,
            };
            break;
    }

    const uniqueTokenOverride = seasonMappings.TokenTypes[coreMetadata.type].ByTokenId[id];
    if (uniqueTokenOverride !== undefined) {
        extendedMetadata = Object.assign(extendedMetadata, uniqueTokenOverride.extendedMeta);
    }

    if (extendedMetadata.collection_id === undefined) {
        extendedMetadata.collection_id = inventoryIds.NonFungible.getCollectionId(
            BigInteger(id),
            constants.CollectionMaskLength
        );
    }
    extendedMetadata.collection_url = getMetadataUrl(extendedMetadata.collection_id, network);
    if (extendedMetadata.image === undefined) {
        extendedMetadata.image = getImageUrl(extendedMetadata.name, coreMetadata, network);
    }
    extendedMetadata.external_url = getExternalUrl(id, network);

    const isBGC2019 = require('../mappings/Season2019/BGC2019Tokens').indexOf(id) != -1;

    if (isBGC2019) {
        extendedMetadata.name = `${extendedMetadata.name} (BGC 2019)`;
    }

    if (
        isBGC2019 ||
        coreMetadata.label == 'Meow' ||
        coreMetadata.label == 'Infinity' ||
        id == '57901359017265019780203575760548458000656522658244413105892691622458053129621' // lost Infinity token
    ) {
        const oldRaritiesCoreMetadata = { ...coreMetadata };
        switch (coreMetadata.rarity) {
            case 2:
            case 3:
                oldRaritiesCoreMetadata.rarityTier = 'Legendary';
                break;
            case 4:
            case 5:
            case 6:
                oldRaritiesCoreMetadata.rarityTier = 'Epic';
                break;
        }
        openseaMetadata = getOpenseaMetadata(oldRaritiesCoreMetadata);
        extendedMetadata.image = getImageUrl(extendedMetadata.name, oldRaritiesCoreMetadata, network);
    }

    const fullMetadata = {
        id,
        ...extendedMetadata,
        attributes: openseaMetadata,
        core_attributes: coreMetadata,
    };

    return fullMetadata;
}

module.exports = {
    getCoreMetadata,
    getFullMetadata,
};
