const { inventoryIds } = require('@animoca/blockchain-inventory_metadata');
const BigInteger = require("big-integer");
const { encode, decode } = require("bits.js");
const constants = require("../constants");
const Common = require('../mappings/Common');
const config = require('../../config');
const { getTokenImage } = require('./image');

function validateMetadataByNameAndId(mapping, metadata, nameKey, idKey, required) {
    if (metadata[nameKey] !== undefined) {
        if (metadata[idKey] !== undefined) {
            const expected = mapping.NameById[metadata[idKey]];
            if (expected === undefined) {
                throw Error(`Could not retrieve expected ${nameKey} for ${idKey} '${metadata[idKey]}'`);
            } else if (metadata[nameKey] != expected) {
                throw Error(`Wrong ${nameKey}, expected '${expected}' for ${idKey} ${metadata[idKey]} but got '${metadata[nameKey]}'`);
            }
        } else {
            const id = mapping.IdByName[metadata[nameKey]];
            if (id !== undefined) {
                metadata[idKey] = id;
            } else {
                throw Error(`Could not retrieve ${idKey} for ${nameKey} '${metadata[nameKey]}'`);
            }
        }
    } else {
        if (metadata[idKey] !== undefined) {
            metadata[nameKey] = mapping.NameById[metadata[idKey]];
            if (metadata[nameKey] === undefined) {
                throw Error(`Could not retrieve ${nameKey} for ${idKey} '${metadata[idKey]}'`);
            }
        } else if (required) {
            throw Error(`Missing data for ${nameKey}`);
        }
    }
}

function validateCommonMetadata(metadata) {
    const commonMappings = require('../mappings/Common');

    validateMetadataByNameAndId(
        commonMappings.Seasons,
        metadata,
        'season',
        'seasonId',
        true);

    validateMetadataByNameAndId(
        commonMappings.Types,
        metadata,
        'type',
        'typeId',
        true);

    if (metadata.rarityTier !== undefined) {
        if (metadata.rarity !== undefined) {
            const expected = commonMappings.Rarities.TierByRarity[metadata.rarity];
            if (expected === undefined) {
                throw Error(`Could not retrieve expected rarity tier for rarity '${metadata.rarity}'`);
            } else if (metadata.rarityTier != expected) {
                throw Error(`Wrong type, expected '${expected}' for rarity ${metadata.rarity} but got '${metadata.rarityTier}'`);
            }
        } else {
            // many-to-one relationship between rarity and rarity tier
            throw Error(`Could not retrieve rarity for rarity tier '${metadata.rarityTier}'`);
        }
    } else {
        if (metadata.rarity !== undefined) {
            metadata.rarityTier = commonMappings.Rarities.TierByRarity[metadata.rarity];
            if (metadata.rarityTier === undefined) {
                throw Error(`Could not retrieve rarity tier for rarity '${metadata.rarity}'`);
            }
        } else {
            throw Error(`Missing data for rarity`);
        }
    }

    validateMetadataByNameAndId(
        commonMappings.Labels,
        metadata,
        'label',
        'labelId',
        true);
}

function validateSeasonMetadata(metadata) {
    const seasonMappings = require(`../mappings/Season${metadata.season}`);

    switch (metadata.type) {
        case 'Part':
        case 'Gear':
        case 'Tyres':
            if (metadata.subType !== undefined) {
                if (metadata.subTypeId !== undefined) {
                    const fullSubTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const expected = seasonMappings.SubTypes.NameById[fullSubTypeId];
                    if (expected === undefined) {
                        throw Error(`Could not retrieve expected subType for full subTypeId '${fullSubTypeId}'`);
                    } if (metadata.subType != expected.name) {
                        throw Error(`Wrong subType, expected '${expected.name}' for full subTypeId ${fullSubTypeId} but got '${metadata.subType}'`);
                    }
                } else {
                    const fullSubTypeId = seasonMappings.SubTypes.IdByName[metadata.subType];
                    if (fullSubTypeId !== undefined) {
                        const subTypeId = fullSubTypeId.split(',')[1];
                        if (subTypeId !== undefined) {
                            metadata.subTypeId = subTypeId;
                        } else {
                            throw Error(`Could not retrieve subTypeId for subType '${metadata.subType}'`);
                        }
                    } else {
                        throw Error(`Could not retrieve full subTypeId for subType '${metadata.subType}'`);
                    }
                }
            } else {
                if (metadata.subTypeId !== undefined) {
                    const fullSubTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    metadata.subType = seasonMappings.SubTypes.NameById[fullSubTypeId];
                    if (metadata.subType === undefined) {
                        throw Error(`Could not retrieve subType for full subTypeId '${fullSubTypeId}'`);
                    }
                } else {
                    throw Error(`Missing data for sub-type`);
                }
            }
            break;
        default:
            if (((metadata.subType !== undefined) && (metadata.subType != 'None')) ||
                ((metadata.subTypeId !== undefined) && (Number(metadata.subTypeId) != 0))) {
                throw Error(`Unexpected sub-type data for type ${metadata.type}`);
            }
    }

    validateMetadataByNameAndId(
        seasonMappings.Tracks,
        metadata,
        'track',
        'trackId',
        false);

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            validateMetadataByNameAndId(
                seasonMappings.Teams,
                metadata,
                'team',
                'teamId',
                false);
            break;
        default:
            if (((metadata.team !== undefined) && (metadata.team != 'None')) ||
                ((metadata.teamId !== undefined) && (Number(metadata.teamId) != 0))) {
                throw Error(`Unexpected team data for type ${metadata.type}`);
            }
    }

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            validateMetadataByNameAndId(
                seasonMappings.Models,
                metadata,
                'model',
                'modelId',
                false);
            break;
        default:
            if (((metadata.model !== undefined) && (metadata.model != 'None')) ||
                ((metadata.modelId !== undefined) && (Number(metadata.modelId) != 0))) {
                throw Error(`Unexpected model data for type ${metadata.type}`);
            }
    }

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            if ((metadata.teamId !== undefined) &&
                (Number(metadata.teamId) != 0) &&
                (metadata.modelId !== undefined) &&
                (Number(metadata.modelId) != 0)) {
                throw Error(`Conflicting team and model data for type ${metadata.type}`);
            }
            if ((metadata.teamId === undefined) &&
                (metadata.modelId === undefined)) {
                throw Error(`Missing team or model data for type ${metadata.type}`);
            }
            break;
    }

    if ((metadata.type == 'Driver') &&
        (metadata.driverNumber !== undefined) &&
        (Number(metadata.driverNumber) != 0)) {
        if ((metadata.teamId === undefined) || (Number(metadata.teamId) == 0)) {
            throw Error(`Missing team data for driver`);
        }
        const expected = seasonMappings.Teams.IdByDriver[metadata.driverNumber];
        if (expected === undefined) {
            throw Error(`Could not retrieve expected teamId for driverNumber '${metadata.driverNumber}'`);
        } if (metadata.teamId != expected) {
            throw Error(`Wrong teamId, expected '${expected}' for driverNumber ${metadata.driverNumber} but got '${metadata.teamId}'`);
        }
    }
}

function idFromCoreMetadata(metadata) {
    validateCommonMetadata(metadata);
    validateSeasonMetadata(metadata);

    const fieldsToEncode = {
        counter: metadata.counter? BigInteger(metadata.counter): BigInteger(),
        special2: metadata.special2? BigInteger(metadata.special2): BigInteger(),
        special1: metadata.special1? BigInteger(metadata.special1): BigInteger(),
        effect: metadata.effect? BigInteger(metadata.effect): BigInteger(),
        luck: metadata.luck? BigInteger(metadata.luck): BigInteger(),
        stat3: metadata.stat3? BigInteger(metadata.stat3): BigInteger(),
        stat2: metadata.stat2? BigInteger(metadata.stat2): BigInteger(),
        stat1: metadata.stat1? BigInteger(metadata.stat1): BigInteger(),
        driverNumber: metadata.driverNumber? BigInteger(metadata.driverNumber): BigInteger(),
        label: metadata.labelId? BigInteger(metadata.labelId): BigInteger(),
        track: metadata.trackId? BigInteger(metadata.trackId): BigInteger(),
        rarity: metadata.rarity? BigInteger(metadata.rarity): BigInteger(),
        team: metadata.teamId? BigInteger(metadata.teamId): BigInteger(),
        model: metadata.modelId? BigInteger(metadata.modelId): BigInteger(),
        padding2: metadata.padding2? BigInteger(metadata.padding2): BigInteger(),
        season: metadata.seasonId? BigInteger(metadata.seasonId): BigInteger(),
        subType: metadata.subTypeId? BigInteger(metadata.subTypeId): BigInteger(),
        type: metadata.typeId? BigInteger(metadata.typeId): BigInteger(),
        padding1: metadata.padding1? BigInteger(metadata.padding1): BigInteger(),
        nfFlag: BigInteger(1),
    }

    return encode(constants.BitsLayout, fieldsToEncode);
}

function coreMetadataFromId(id) {
    const encoded = BigInteger(id);
    let decoded = decode(constants.BitsLayout, encoded);
    for (const key in decoded) {
        decoded[key] = Number(decoded[key].toString(10)).toString(10);
    }

    const type = Common.Types.NameById[decoded.type];
    const label = Common.Labels.NameById[decoded.label];
    const season = Common.Seasons.NameById[decoded.season];
    const rarityTier = Common.Rarities.TierByRarity[decoded.rarity];

    if (season == '2019') {
        const Season = require(`../mappings`)['2019'];
        const subTypeKey = `${decoded.type},${decoded.subType}`;
        const subType = Season.SubTypes.NameById[subTypeKey].category_name;
        const team = Season.Teams.NameById[decoded.team];
        const model = Season.Models.NameById[decoded.model];
        const track = Season.Tracks.NameById[decoded.track];

        return {
            seasonId: decoded.season,
            season,
            typeId: decoded.type,
            type,
            subTypeId: decoded.subType,
            subType,
            rarity: decoded.rarity,
            rarityTier,
            trackId: decoded.track,
            track,
            teamId: decoded.team,
            team,
            modelId: decoded.model,
            model,
            driverNumber: decoded.driverNumber,
            labelId: decoded.label,
            label,
            counter: decoded.counter,
            racing: {
                stat1: decoded.stat1,
                stat2: decoded.stat2,
                stat3: decoded.stat3,
                luck: decoded.luck,
                special1: decoded.special1,
                special2: decoded.special2,
                effect: decoded.effect
            }
        };
    }
}


function attributesFromCoreMetadata(coreMetadata) {
    let nTypeId = Number(coreMetadata.typeId);
    let nTeamId = Number(coreMetadata.teamId);
    let nSeasonId = Number(coreMetadata.seasonId);
    let nTrackId = Number(coreMetadata.trackId);
    let nRarity = Number(coreMetadata.rarity);
    let nLabelId = Number(coreMetadata.labelId);
    let nDriverNumber = Number(coreMetadata.driverNumber);
    let nModelId = Number(coreMetadata.modelId);
    let nSubTypeId = Number(coreMetadata.subTypeId);
    let nCounter = Number(coreMetadata.counter);
    let nAttr1 = Number(coreMetadata.racing.stat1);
    let nAttr2 = Number(coreMetadata.racing.stat2);
    let nAttr3 = Number(coreMetadata.racing.stat3);
    let nLuck = Number(coreMetadata.racing.luck);
    // let nEffect = Number(coreMetadata.racing.effect);
    // let nSpecial1 = Number(coreMetadata.racing.special1);
    // let nSpecial2 = Number(coreMetadata.racing.special2);

    let internalRacingAttrs = {}
    let openseaRacingAttrs = []

    let racingAttributes = [];
    if (coreMetadata.type == 'Car' ||
        coreMetadata.type == 'Driver' ||
        coreMetadata.type == 'Part' ||
        coreMetadata.type == 'Gear' ||
        coreMetadata.type == 'Tyres'
    ) {

        switch (coreMetadata.type) {
            case 'Car':
            case 'Part':
            case 'Tyres':
                racingAttributes = require(`../mappings/Season${coreMetadata.season}/Cars`).RacingAttributes;
                break;
            case 'Driver':
            case 'Gear':
                racingAttributes = require(`../mappings/Season${coreMetadata.season}/Drivers`).RacingAttributes;
                break;
        }
        internalRacingAttrs[racingAttributes.core[0]] = nAttr1;
        internalRacingAttrs[racingAttributes.core[1]] = nAttr2;
        internalRacingAttrs[racingAttributes.core[2]] = nAttr3;

        openseaRacingAttrs = [
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[0],
                value: nAttr1
            },
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[1],
                value: nAttr2
            },
            {
                display_type: 'boost_number',
                trait_type: racingAttributes.openSea[2],
                value: nAttr3
            }
        ];

        if (nLuck) {
            internalRacingAttrs.Luck = nLuck;
            openseaRacingAttrs.push({
                display_type: 'boost_number',
                trait_type: 'luck',
                value: nLuck
            });
        }

        if (coreMetadata.racing.effect) {
            internalRacingAttrs.Effect = coreMetadata.racing.effect;
            openseaRacingAttrs.push({
                trait_type: 'effect',
                value: coreMetadata.racing.effect
            });
        }

        if (coreMetadata.racing.special1) {
            internalRacingAttrs.Special1 = coreMetadata.racing.special1;
            openseaRacingAttrs.push({
                trait_type: 'special_1',
                value: coreMetadata.racing.special1
            });
        }
        if (coreMetadata.racing.special2) {
            internalRacingAttrs.Special2 = coreMetadata.racing.special2
            openseaRacingAttrs.push({
                trait_type: 'special_2',
                value: coreMetadata.racing.special2
            });
        }
    }

    let attributes = [
        {
            trait_type: 'type',
            value: coreMetadata.type
        },
        {
            trait_type: 'tier',
            value: coreMetadata.rarityTier
        },
        {
            display_type: 'number',
            trait_type: 'rarity',
            value: nRarity
        },
        {
            trait_type: 'season',
            value: coreMetadata.season
        }
    ];

    if (nTrackId) {
        attributes.push({
            trait_type: 'track',
            value: coreMetadata.track
        });
    }

    if (nTeamId) {
        attributes.push({
            trait_type: 'team',
            value: coreMetadata.team
        });
    }

    if (nLabelId) {
        attributes.push({
            trait_type: 'label',
            value: coreMetadata.label
        });
    }

    if (nDriverNumber) {
        attributes.push({
            display_type: 'number',
            trait_type: 'driver_number',
            value: nDriverNumber
        });
    }

    if (coreMetadata.subTypeId) {
        switch (coreMetadata.type) {
            case "Gear":
                attributes.push({
                    trait_type: 'gear_type',
                    value: coreMetadata.subType.category_name
                });
                break;
            case "Part":
                attributes.push({
                    trait_type: 'part_type',
                    value: coreMetadata.subType.category_name
                });
                break;
            case "Tyres":
                attributes.push({
                    trait_type: 'tyres_type',
                    value: coreMetadata.subType.category_name
                });
                break;
        }
    }

    attributes = attributes.concat(openseaRacingAttrs);

    return {
        attributes,
        internal_attributes: {
            SeasonId: nSeasonId,
            Season: coreMetadata.season,
            TypeId: nTypeId,
            Type: coreMetadata.type,
            SubTypeId: nSubTypeId,
            SubType: coreMetadata.subType,
            Rarity: nRarity,
            Tier: coreMetadata.rarityTier,
            TrackId: nTrackId,
            Track: coreMetadata.track,
            TeamId: nTeamId,
            Team: coreMetadata.team,
            DriverNumber: nDriverNumber,
            ModelId: nModelId,
            Model: coreMetadata.model,
            LabelId: nLabelId,
            Label: coreMetadata.label,
            Counter: nCounter,
            Racing: internalRacingAttrs,
        },
    }
}

function fullMetadataFromId(id, network = 'mainnet') {
    const coreMetadata = coreMetadataFromId(id);
    const attributes = attributesFromCoreMetadata(coreMetadata);
    const collectionId = inventoryIds.NonFungible.getCollectionId(BigInteger(id), constants.NFCollectionMaskLength);

    let meta;
    const Season = require(`../mappings/Season${coreMetadata.season}`);

    const subTypeKey = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
    switch (coreMetadata.type) {
        case 'Car':
            if (coreMetadata.rarityTier == 'Apex') {
                meta = Season.Cars.ByCounter[coreMetadata.counter];
            } else if (coreMetadata.team && coreMetadata.team != "None") {
                meta = Season.Cars.ByTeam[coreMetadata.team];
            } else if (coreMetadata.model) {
                meta = Season.Cars.ByModel[coreMetadata.model];
            }
            break;
        case 'Driver':
            if (coreMetadata.driverNumber != "0") {
                meta = Season.Drivers.ByNumber[coreMetadata.driverNumber];
            } else if (coreMetadata.model) {
                meta = Season.Drivers.ByModel[coreMetadata.model];
            }
            break;
        case 'Part':
            meta = Season.Parts.ByTypes[subTypeKey];
            break;
        case 'Gear':
            meta = Season.Gears.ByTypes[subTypeKey];
            break;
        case 'Tyres':
            meta = Season.Tyres.ByTypes[subTypeKey];
            break;
    }

    const fullMetadata = {
        id,
        ...meta,
        external_url: config[network].external_url.replace("{id}", id),
        collection_id: collectionId,
        collection_url: `${config[network].metadata_url}/json/${collectionId}`,
        license: "",
        ...attributes
    }

    if (!fullMetadata.hasOwnProperty("image_url"))
        fullMetadata.image_url = getTokenImage({ ...coreMetadata, ...meta });

    return fullMetadata;
}


module.exports = {
    coreMetadataFromId,
    fullMetadataFromId,
    idFromCoreMetadata
}
