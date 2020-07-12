const { inventoryIds } = require('@animoca/blockchain-inventory_metadata');
const BigInteger = require('big-integer');
const { encode, decode } = require('bits.js');
const constants = require('../constants');
const Common = require('../mappings/Common');
const config = require('../../config');
const { validateCommonMetadata, validateSeasonMetadata, getTokenImage } = require('./utils');

function createTokenId(metadata) {
    validateCommonMetadata(metadata);
    validateSeasonMetadata(metadata);

    const fieldsToEncode = {
        nfFlag: BigInteger(1),
        padding1: BigInteger(),
        typeId: metadata.typeId ? BigInteger(metadata.typeId) : BigInteger(),
        subTypeId: metadata.subTypeId ? BigInteger(metadata.subTypeId) : BigInteger(),
        seasonId: metadata.seasonId ? BigInteger(metadata.seasonId) : BigInteger(),
        padding2: BigInteger(),
        modelId: metadata.modelId ? BigInteger(metadata.modelId) : BigInteger(),
        teamId: metadata.teamId ? BigInteger(metadata.teamId) : BigInteger(),
        rarity: metadata.rarity ? BigInteger(metadata.rarity) : BigInteger(),
        trackId: metadata.trackId ? BigInteger(metadata.trackId) : BigInteger(),
        labelId: metadata.labelId ? BigInteger(metadata.labelId) : BigInteger(),
        driverNumber: metadata.driverNumber ? BigInteger(metadata.driverNumber) : BigInteger(),
        stat1: metadata.stat1 ? BigInteger(metadata.stat1) : BigInteger(),
        stat2: metadata.stat2 ? BigInteger(metadata.stat2) : BigInteger(),
        stat3: metadata.stat3 ? BigInteger(metadata.stat3) : BigInteger(),
        luck: metadata.luck ? BigInteger(metadata.luck) : BigInteger(),
        effect: metadata.effect ? BigInteger(metadata.effect) : BigInteger(),
        special1: metadata.special1 ? BigInteger(metadata.special1) : BigInteger(),
        special2: metadata.special2 ? BigInteger(metadata.special2) : BigInteger(),
        counter: metadata.counter ? BigInteger(metadata.counter) : BigInteger(),
    };

    return encode(constants.BitsLayout, fieldsToEncode).toString(10);
}

function getCoreMetadata(id) {
    const encoded = BigInteger(id);
    let decoded = decode(constants.BitsLayout, encoded);
    for (const key in decoded) {
        decoded[key] = Number(decoded[key].toString(10));
    }

    const type = Common.Type.ById[decoded.typeId].type;
    const label = Common.Label.ById[decoded.labelId].label;
    const season = Common.Season.ById[decoded.seasonId].season;
    const rarityTier = Common.Rarity.ByRarity[decoded.rarity].rarityTier;

    if (season == '2019') {
        const seasonMappings = require(`../mappings/Season2019`);
        const fullTypeId = `${decoded.typeId},${decoded.subTypeId}`;
        const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId].subType;
        const track = seasonMappings.GrandPrix.ById[decoded.trackId].track;
        const team = seasonMappings.Team.ById[decoded.teamId].team;
        const model = seasonMappings.Model.ById[decoded.modelId].model;
        const driver = seasonMappings.Driver.ByNumber[decoded.driverNumber].driver;

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
            driverNumber: decoded.driverNumber,
            driver,
            labelId: decoded.labelId,
            label,
            counter: decoded.counter,
            racing: {
                stat1: decoded.stat1,
                stat2: decoded.stat2,
                stat3: decoded.stat3,
                luck: decoded.luck,
                special1: decoded.special1,
                special2: decoded.special2,
                effect: decoded.effect,
            },
        };

        // TODO see if it's useful
        // let racingAttributes;
        // switch (type) {
        //     case 'Car':
        //     case 'Part':
        //     case 'Tyres':
        //         racingAttributes = require('../mappings')[coreMetadata.season].Cars.RacingAttributes.core;
        //         break;
        //     case 'Driver':
        //     case 'Gear':
        //         racingAttributes = require('../mappings')[coreMetadata.season].Drivers.RacingAttributes.core;
        //         // racingAttributes = require(`../mappings/Season${coreMetadata.season}/Drivers`).RacingAttributes;
        //         break;
        // }
        // if (racingAttributes) {
        //     coreMetadata.racing[racingAttributes[0]] = decoded.stat1;
        //     coreMetadata.racing[racingAttributes[1]] = decoded.stat2;
        //     coreMetadata.racing[racingAttributes[2]] = decoded.stat3;
        // }

        return coreMetadata;
    }
}

function getOpenseaMetadata(coreMetadata) {
    let racingAttributes = [];
    if (
        coreMetadata.type == 'Car' ||
        coreMetadata.type == 'Driver' ||
        coreMetadata.type == 'Part' ||
        coreMetadata.type == 'Gear' ||
        coreMetadata.type == 'Tyres'
    ) {
        let racingAttributes = [];
        switch (coreMetadata.type) {
            case 'Car':
            case 'Part':
            case 'Tyres':
                racingAttributes = require(`../mappings/Season${coreMetadata.season}/Car`).RacingAttributes;
                break;
            case 'Driver':
            case 'Gear':
                racingAttributes = require(`../mappings/Season${coreMetadata.season}/Driver`).RacingAttributes;
                break;
        }

        racingAttributes = [
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[0],
                value: coreMetadata.racing.stat1,
            },
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[1],
                value: coreMetadata.racing.stat2,
            },
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[2],
                value: coreMetadata.racing.stat3,
            },
        ];

        if (coreMetadata.racing.luck) {
            racingAttributes.push({
                display_type: 'boost_number',
                trait_type: 'luck',
                value: coreMetadata.racing.luck,
            });
        }

        if (coreMetadata.racing.effect) {
            racingAttributes.push({
                trait_type: 'effect',
                value: coreMetadata.racing.effect,
            });
        }

        if (coreMetadata.racing.special1) {
            racingAttributes.push({
                trait_type: 'special_1',
                value: coreMetadata.racing.special1,
            });
        }
        if (coreMetadata.racing.special2) {
            racingAttributes.push({
                trait_type: 'special_2',
                value: coreMetadata.racing.special2,
            });
        }
    }

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

    if (coreMetadata.driverNumber) {
        attributes.push({
            display_type: 'number',
            trait_type: 'driver_number',
            value: coreMetadata.driverNumber,
        });
    }

    if (coreMetadata.subTypeId) {
        switch (coreMetadata.type) {
            case 'Gear':
                attributes.push({
                    trait_type: 'gear_type',
                    value: coreMetadata.subType.category_name,
                });
                break;
            case 'Part':
                attributes.push({
                    trait_type: 'part_type',
                    value: coreMetadata.subType.category_name,
                });
                break;
            case 'Tyres':
                attributes.push({
                    trait_type: 'tyres_type',
                    value: coreMetadata.subType.category_name,
                });
                break;
        }
    }

    attributes = attributes.concat(racingAttributes);

    return attributes;
}

function getFullMetadata(id, network = 'mainnet') {
    const coreMetadata = getCoreMetadata(id);
    const openseaMetadata = getOpenseaMetadata(coreMetadata);

    let extendedMetadata = {};
    const Season = require(`../mappings/Season${coreMetadata.season}`);

    const fullTypeId = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
    switch (coreMetadata.type) {
        case 'Car':
            if (coreMetadata.rarityTier == 'Apex') {
                extendedMetadata = Season.Car.ByCounter[coreMetadata.counter].extendedMeta;
            } else if (coreMetadata.team && coreMetadata.team != 'None') {
                extendedMetadata = Season.Car.ByTeam[coreMetadata.team].extendedMeta;
            } else if (coreMetadata.model) {
                extendedMetadata = Season.Car.ByModel[coreMetadata.model].extendedMeta;
            }
            break;
        case 'Driver':
            if (coreMetadata.driverNumber != 0) {
                extendedMetadata = Season.Driver.ByNumber[coreMetadata.driverNumber].extendedMeta;
            } else if (coreMetadata.model) {
                extendedMetadata = Season.Driver.ByModel[coreMetadata.model].extendedMeta;
            }
            break;
        case 'Part':
        case 'Gear':
        case 'Tyres':
            extendedMetadata = Season[coreMetadata.type].ByFullTypeId[fullTypeId].extendedMeta;
            break;
    }

    const collectionId = inventoryIds.NonFungible.getCollectionId(BigInteger(id), constants.NFCollectionMaskLength);

    const fullMetadata = {
        id,
        collection_id: collectionId,
        collection_url: `${config[network].metadata_url}/json/${collectionId}`,
        name: extendedMetadata.name,
        description: extendedMetadata.description,
        image_url: extendedMetadata.image_url
            ? extendedMetadata.image_url
            : getTokenImage({ ...coreMetadata, ...extendedMetadata }),
        external_url: config[network].external_url.replace('{id}', id),
        attributes: openseaMetadata,
        core_attributes: coreMetadata,
    };

    return fullMetadata;
}

module.exports = {
    getCoreMetadata,
    getFullMetadata,
    createTokenId,
};
