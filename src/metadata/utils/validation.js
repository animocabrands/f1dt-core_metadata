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
        } else if (required) {
            throw Error(`Missing data for ${nameKey}`);
        }
    }
}

function validateCommonMetadata(metadata) {
    const commonMappings = require('../../mappings/Common');

    const errors = [];

    try {
        validateCoreAttribute(commonMappings.Season, metadata, 'season', 'seasonId', true);
    } catch (error) {
        errors.push(error);
    }
    try {
        validateCoreAttribute(commonMappings.Type, metadata, 'type', 'typeId', true);
    } catch (error) {
        errors.push(error);
    }
    try {
        validateCoreAttribute(commonMappings.Label, metadata, 'label', 'labelId', false);
    } catch (error) {
        errors.push(error);
    }

    if (metadata.rarityTier !== undefined) {
        if (metadata.rarity !== undefined) {
            const expected = commonMappings.Rarity.ByRarity[metadata.rarity];
            if (expected === undefined) {
                errors.push(Error(`Could not retrieve expected rarity tier for rarity '${metadata.rarity}'`));
            } else if (metadata.rarityTier != expected.rarityTier) {
                errors.push(
                    Error(
                        `Wrong type, expected '${expected.rarityTier}' for rarity ${metadata.rarity} but got '${metadata.rarityTier}'`
                    )
                );
            }
        } else {
            // many-to-one relationship between rarity and rarity tier
            errors.push(Error(`Could not retrieve rarity for rarity tier '${metadata.rarityTier}'`))
        }
    } else {
        if (metadata.rarity !== undefined) {
            const rarity = commonMappings.Rarity.ByRarity[metadata.rarity];
            if (rarity === undefined) {
                errors.push(Error(`Could not retrieve rarity tier for rarity '${metadata.rarity}'`));
            } else {
                metadata.rarityTier = rarity.rarityTier;
            }
        } else {
            errors.push(Error(`Missing data for rarity`));
        }
    }

    if (errors.length > 0) {
        throw errors;
    }
}

function validateSeasonMetadata(metadata) {
    const seasonMappings = require(`../../mappings/Season${metadata.season}`);

    const errors = [];

    switch (metadata.type) {
        case 'Part':
        case 'Gear':
        case 'Tyres':
            if (metadata.subType !== undefined) {
                if (metadata.subTypeId !== undefined) {
                    const fullTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const expected = seasonMappings.SubType.ByFullTypeId[fullTypeId];
                    if (expected === undefined) {
                        errors.push(Error(`Could not retrieve expected subType for full subTypeId '${fullTypeId}'`));
                    }
                    if (metadata.subType != expected.extendedMeta.name) {
                        errors.push(Error(
                            `Wrong subType, expected '${expected.extendedMeta.name}' for full subTypeId ${fullTypeId} but got '${metadata.subType}'`
                        ));
                    }
                } else {
                    const subType = seasonMappings.SubType.ByName[metadata.subType];
                    if (subType !== undefined) {
                        metadata.subTypeId = subType.subTypeId;
                    } else {
                        errors.push(Error(`Could not retrieve subTypeId for subType '${metadata.subType}'`));
                    }
                }
            } else {
                if (metadata.subTypeId !== undefined) {
                    const fullTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId];
                    if (subType === undefined) {
                        errors.push(Error(`Could not retrieve subType for full subTypeId '${fullTypeId}'`));
                    } else {
                        const name = subType.gear || subType.part || subType.tyres;
                        metadata.subType = name;
                    }
                } else {
                    errors.push(Error(`Missing data for subType`));
                }
            }
            break;
        default:
            if (
                (metadata.subType !== undefined && metadata.subType != 'None') ||
                (metadata.subTypeId !== undefined && Number(metadata.subTypeId) != 0)
            ) {
                errors.push(Error(`Unexpected subType data for type ${metadata.type}`));
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
                errors.push(Error(`Unexpected team data for type ${metadata.type}`));
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
                errors.push(Error(`Unexpected model data for type ${metadata.type}`));
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
                errors.push(Error(`Conflicting team and model data for type ${metadata.type}`));
            }
            if (metadata.teamId === undefined && metadata.modelId === undefined) {
                errors.push(Error(`Missing team or model data for type ${metadata.type}`));
            }
            break;
    }

    if (metadata.type == 'Driver' && metadata.driverNumber !== undefined && Number(metadata.driverNumber) != 0) {
        if (metadata.teamId === undefined || Number(metadata.teamId) == 0) {
            errors.push(Error(`Missing team data for driver`));
        }
        const driver = seasonMappings.Driver.ByNumber[metadata.driverNumber];
        if (driver === undefined) {
            errors.push(Error(`Could not retrieve driver for driverNumber '${metadata.driverNumber}'`));
        }
        const team = seasonMappings.Team.ByDriver[driver];
        if (metadata.teamId != team.teamId) {
            errors.push(Error(
                `Wrong teamId, expected '${team.teamId}' for driverNumber ${metadata.driverNumber} but got '${metadata.teamId}'`
            ));
        }
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = {
    validateCommonMetadata,
    validateSeasonMetadata,
};
