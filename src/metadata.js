const { inventoryIds } = require('@animoca/blockchain-metadata_base');
const BigInteger = require("big-integer");
const { encode, decode } = require("bits.js");
const constants = require("./constants");
const Common = require('./mappings/Common');
const config = require('../config');

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
        const Season = require(`./mappings/2019`);
        const subTypeKey = `${decoded.type},${decoded.subType}`;
        const subType = Season.SubTypes[subTypeKey].category_name;
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
                racingAttributes = require(`./mappings/${coreMetadata.season}/Cars`).RacingAttributes;
                break;
            case 'Driver':
            case 'Gear':
                racingAttributes = require(`./mappings/${coreMetadata.season}/Drivers`).RacingAttributes;
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

    if (coreMetadata.season == '2019') {
        const Season = require(`./mappings/2019`);
        const subTypeKey = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
        switch (coreMetadata.type) {
            case 'Car':
                if (coreMetadata.rarityTier == 'Apex') {
                    meta = Season.Cars.ByCounter[coreMetadata.counter];
                } else if (coreMetadata.team) {
                    meta = Season.Cars.ByTeam[coreMetadata.team];
                } else if (coreMetadata.model) {
                    meta = Season.Cars.ByModel[coreMetadata.model];
                }
                break;
            case 'Driver':
                if (coreMetadata.driverNumber) {
                    meta = Season.Drivers.ByNumber[coreMetadata.driverNumber];
                } else if (model) {
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
    }

    // const image = tokenImage(meta.season, meta.track, meta.type, meta.subType, meta.name, meta.rarityTier);

    return {
        id,
        ...meta,
        external_url: config[network].external_url.replace("{id}", id),
        collection_id: collectionId,
        collection_url: `${config[network].metadata_url}/json/${collectionId}`,
        license: "",
        ...attributes
    }
}

module.exports = {
    coreMetadataFromId,
    fullMetadataFromId,
    // tokenImage
}