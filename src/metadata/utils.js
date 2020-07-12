const { encode } = require('bits.js');
const BigInteger = require('big-integer');
// const mappings = require('../mappings');
const { CollectionEncodingBitsLayout } = require('../constants');

function validateCoreAttribute(mapping, metadata, nameKey, idKey, required) {
    if (metadata[nameKey] !== undefined) {
        if (metadata[idKey] !== undefined) {
            const coreAttribute = mapping.ById[metadata[idKey]];
            if (coreAttribute === undefined) {
                throw Error(`Could not retrieve expected ${nameKey} for ${idKey} '${metadata[idKey]}'`);
            } else if (metadata[nameKey] != coreAttribute[nameKey]) {
                throw Error(
                    `Wrong ${nameKey}, expected '${coreAttribute[nameKey]}' for ${idKey} ${metadata[idKey]} but got '${metadata[nameKey]}'`
                );
            }
        } else {
            const coreAttribute = mapping.ByName[metadata[nameKey]];
            if (coreAttribute !== undefined) {
                metadata[idKey] = coreAttribute[idKey];
            } else {
                throw Error(`Could not retrieve ${idKey} for ${nameKey} '${metadata[nameKey]}'`);
            }
        }
    } else {
        if (metadata[idKey] !== undefined) {
            const coreAttribute = mapping.ById[metadata[idKey]];
            if (coreAttribute === undefined) {
                throw Error(`Could not retrieve ${nameKey} for ${idKey} '${metadata[idKey]}'`);
            } else {
                metadata[nameKey] = coreAttribute[nameKey];
            }
        } else {
            if (required) {
                throw Error(`Missing data for ${nameKey}`);
            }
            // else {
            //     metadata[idKey] = 'None';
            // }
        }
    }
}

function validateCommonMetadata(metadata) {
    const commonMappings = require('../mappings/Common');
    validateCoreAttribute(commonMappings.Season, metadata, 'season', 'seasonId', true);
    validateCoreAttribute(commonMappings.Type, metadata, 'type', 'typeId', true);
    validateCoreAttribute(commonMappings.Label, metadata, 'label', 'labelId', false);

    if (metadata.rarityTier !== undefined) {
        if (metadata.rarity !== undefined) {
            const expected = commonMappings.Rarity.ByRarity[metadata.rarity];
            if (expected === undefined) {
                throw Error(`Could not retrieve expected rarity tier for rarity '${metadata.rarity}'`);
            } else if (metadata.rarityTier != expected.rarityTier) {
                throw Error(
                    `Wrong type, expected '${expected.rarityTier}' for rarity ${metadata.rarity} but got '${metadata.rarityTier}'`
                );
            }
        } else {
            // many-to-one relationship between rarity and rarity tier
            throw Error(`Could not retrieve rarity for rarity tier '${metadata.rarityTier}'`);
        }
    } else {
        if (metadata.rarity !== undefined) {
            const rarity = commonMappings.Rarity.ByRarity[metadata.rarity];
            if (rarity === undefined) {
                throw Error(`Could not retrieve rarity tier for rarity '${metadata.rarity}'`);
            } else {
                metadata.rarityTier = rarity.rarityTier;
            }
        } else {
            throw Error(`Missing data for rarity`);
        }
    }
}

function validateSeasonMetadata(metadata) {
    // const seasonMappings = require(`../mappings/Season${metadata.season}`);
    const seasonMappings = require(`../mappings/Season2019`);

    switch (metadata.type) {
        case 'Part':
        case 'Gear':
        case 'Tyres':
            if (metadata.subType !== undefined) {
                if (metadata.subTypeId !== undefined) {
                    const fullTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const expected = seasonMappings.SubType.ByFullTypeId[fullTypeId];
                    if (expected === undefined) {
                        throw Error(`Could not retrieve expected subType for full subTypeId '${fullTypeId}'`);
                    }
                    if (metadata.subType != expected.extendedMeta.name) {
                        throw Error(
                            `Wrong subType, expected '${expected.extendedMeta.name}' for full subTypeId ${fullTypeId} but got '${metadata.subType}'`
                        );
                    }
                } else {
                    const subType = seasonMappings.SubType.ByName[metadata.subType];
                    if (subType !== undefined) {
                        metadata.subTypeId = subType.subTypeId;
                        // const subTypeId = subType.split(',')[1];
                        // if (subTypeId !== undefined) {
                        // } else {
                        // }
                    } else {
                        throw Error(`Could not retrieve subTypeId for subType '${metadata.subType}'`);
                        // throw Error(`Could not retrieve full subTypeId for subType '${metadata.subType}'`);
                    }
                }
            } else {
                if (metadata.subTypeId !== undefined) {
                    const fullTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId];
                    if (subType === undefined) {
                        throw Error(`Could not retrieve subType for full subTypeId '${fullTypeId}'`);
                    } else {
                        const name = subType.gear || subType.part || subType.tyres;
                        metadata.subType = name;
                    }
                } else {
                    throw Error(`Missing data for sub-type`);
                }
            }
            break;
        default:
            if (
                (metadata.subType !== undefined && metadata.subType != 'None') ||
                (metadata.subTypeId !== undefined && Number(metadata.subTypeId) != 0)
            ) {
                throw Error(`Unexpected sub-type data for type ${metadata.type}`);
            }
    }

    validateCoreAttribute(seasonMappings.GrandPrix, metadata, 'track', 'trackId', false);

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            validateCoreAttribute(seasonMappings.Team, metadata, 'team', 'teamId', false);
            break;
        default:
            if (
                (metadata.team !== undefined && metadata.team != 'None') ||
                (metadata.teamId !== undefined && Number(metadata.teamId) != 0)
            ) {
                throw Error(`Unexpected team data for type ${metadata.type}`);
            }
    }

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            validateCoreAttribute(seasonMappings.Model, metadata, 'model', 'modelId', false);
            break;
        default:
            if (
                (metadata.model !== undefined && metadata.model != 'None') ||
                (metadata.modelId !== undefined && Number(metadata.modelId) != 0)
            ) {
                throw Error(`Unexpected model data for type ${metadata.type}`);
            }
    }

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            if (
                metadata.teamId !== undefined &&
                Number(metadata.teamId) != 0 &&
                metadata.modelId !== undefined &&
                Number(metadata.modelId) != 0
            ) {
                throw Error(`Conflicting team and model data for type ${metadata.type}`);
            }
            if (metadata.teamId === undefined && metadata.modelId === undefined) {
                throw Error(`Missing team or model data for type ${metadata.type}`);
            }
            break;
    }

    if (metadata.type == 'Driver' && metadata.driverNumber !== undefined && Number(metadata.driverNumber) != 0) {
        if (metadata.teamId === undefined || Number(metadata.teamId) == 0) {
            throw Error(`Missing team data for driver`);
        }
        const driver = seasonMappings.Driver.ByNumber[metadata.driverNumber];
        // const expected = seasonMappings.Team.ByDriver[];
        if (driver === undefined) {
            throw Error(`Could not retrieve driver driverNumber '${metadata.driverNumber}'`);
        }
        const team = seasonMappings.Team.ByDriver[driver];
        if (metadata.teamId != team.teamId) {
            throw Error(
                `Wrong teamId, expected '${team.teamId}' for driverNumber ${metadata.driverNumber} but got '${metadata.teamId}'`
            );
        }
    }
}

function getTokenImageKey(season, type, subType, name, tier) {
    type = type.toLowerCase();
    tier = tier.toLowerCase();
    return type == 'car' || type == 'driver'
        ? `${season}_${name.replace(/\s+/, '')}_${tier}.png`
        : `${season}_${subType.toLowerCase().replace(/\s+/, '')}_${tier}.png`;
}

function getTokenImage(meta, network = 'mainnet') {
    // console.log(meta.name, meta.subType, meta.type);
    const config = require('../../config');
    return `${config[network].metadata_url}/image/${getTokenImageKey(
        meta.season,
        meta.type,
        meta.subType,
        meta.name,
        meta.rarityTier
    )}`;
}

function createCollectionId(seasonId, typeId, subTypeId) {
    return encode(CollectionEncodingBitsLayout, {
        nfFlag: BigInteger(1),
        padding1: BigInteger(0),
        typeId: BigInteger(typeId),
        subTypeId: BigInteger(subTypeId),
        seasonId: BigInteger(seasonId),
        _: BigInteger(0),
    }).toString(10);
}

module.exports = {
    createCollectionId,
    getTokenImage,
    validateCommonMetadata,
    validateSeasonMetadata,
};
