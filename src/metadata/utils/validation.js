function validateAndMapCoreAttribute(mapping, metadata, attributeName, required) {
    const attributeId = attributeName + 'Id';
    if (metadata[attributeName] !== undefined) {
        if (metadata[attributeId] !== undefined) {
            const coreAttribute = mapping.ById[metadata[attributeId]];
            if (coreAttribute === undefined) {
                throw Error(
                    `Could not retrieve expected ${attributeName} for ${attributeId} '${metadata[attributeId]}'`
                );
            } else if (metadata[attributeName] != coreAttribute[attributeName]) {
                throw Error(
                    `Wrong ${attributeName}, expected '${coreAttribute[attributeName]}' for ${attributeId} ${metadata[attributeId]} but got '${metadata[attributeName]}'`
                );
            }
        } else {
            const coreAttribute = mapping.ByName[metadata[attributeName]];
            if (coreAttribute !== undefined) {
                metadata[attributeId] = coreAttribute[attributeId];
            } else {
                throw Error(`Could not retrieve ${attributeId} for ${attributeName} '${metadata[attributeName]}'`);
            }
        }
    } else {
        if (metadata[attributeId] !== undefined) {
            const coreAttribute = mapping.ById[metadata[attributeId]];
            if (coreAttribute === undefined) {
                throw Error(`Could not retrieve ${attributeName} for ${attributeId} '${metadata[attributeId]}'`);
            } else {
                metadata[attributeName] = coreAttribute[attributeName];
            }
        } else if (required) {
            throw Error(`Missing data for ${attributeName}`);
        }
    }
}

function validateCommonMetadata(metadata) {
    const commonMappings = require('../../mappings/CommonAttributes');

    const errors = [];

    try {
        validateAndMapCoreAttribute(commonMappings.Season, metadata, 'season', true);
    } catch (error) {
        errors.push(error);
    }
    try {
        validateAndMapCoreAttribute(commonMappings.Type, metadata, 'type', true);
    } catch (error) {
        errors.push(error);
    }
    try {
        validateAndMapCoreAttribute(commonMappings.Label, metadata, 'label', false);
    } catch (error) {
        errors.push(error);
    }

    if (metadata.rarity !== undefined) {
        const rarityTier = commonMappings.Rarity.ByRarity[metadata.rarity];
        if (rarityTier !== undefined) {
            if (metadata.rarityTier !== undefined && metadata.rarityTier != rarityTier) {
                errors.push(Error(`Wrong rarityTier, expected '${rarityTier}' but got '${metadata.rarityTier}'`));
            } else {
                metadata.rarityTier = commonMappings.Rarity.ByRarity[metadata.rarity].rarityTier;
            }
        } else {
            errors.push(Error(`Could not retrieve rarityTier for rarity '${metadata.rarity}'`));
        }
    } else {
        errors.push(Error(`Missing rarity`));
    }

    // if (metadata.rarityTier !== undefined) {
    //     if (metadata.rarity !== undefined) {
    //         const expected = commonMappings.Rarity.ByRarity[metadata.rarity];
    //         if (expected === undefined) {
    //             errors.push(Error(`Could not retrieve expected rarity tier for rarity '${metadata.rarity}'`));
    //         } else if (metadata.rarityTier != expected.rarityTier) {
    //             errors.push(
    //                 Error(
    //                     `Wrong type, expected '${expected.rarityTier}' for rarity ${metadata.rarity} but got '${metadata.rarityTier}'`
    //                 )
    //             );
    //         }
    //     } else {
    //         // many-to-one relationship between rarity and rarity tier
    //         errors.push(Error(`Could not retrieve rarity for rarity tier '${metadata.rarityTier}'`))
    //     }
    // } else {
    //     if (metadata.rarity !== undefined) {
    //         const rarity = commonMappings.Rarity.ByRarity[metadata.rarity];
    //         if (rarity === undefined) {
    //             errors.push(Error(`Could not retrieve rarity tier for rarity '${metadata.rarity}'`));
    //         } else {
    //             metadata.rarityTier = rarity.rarityTier;
    //         }
    //     } else {
    //         errors.push(Error(`Missing data for rarity`));
    //     }
    // }

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
                        errors.push(
                            Error(
                                `Wrong subType, expected '${expected.extendedMeta.name}' for full subTypeId ${fullTypeId} but got '${metadata.subType}'`
                            )
                        );
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

    validateAndMapCoreAttribute(seasonMappings.Attributes.Track, metadata, 'track', false);

    switch (metadata.type) {
        case 'Car':
        case 'Driver':
            validateAndMapCoreAttribute(seasonMappings.Attributes.Team, metadata, 'team', false);
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
            validateAndMapCoreAttribute(seasonMappings.Attributes.Model, metadata, 'model', false);
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

    if (metadata.type == 'Driver' && metadata.driverId !== undefined && Number(metadata.driverId) != 0) {
        if (metadata.teamId === undefined || Number(metadata.teamId) == 0) {
            errors.push(Error(`Missing team data for driver`));
        }
        const driver = seasonMappings.TokenTypes.Driver.ByNumber[metadata.driverId];
        if (driver === undefined) {
            errors.push(Error(`Could not retrieve driver for driverId '${metadata.driverId}'`));
        }
        const team = seasonMappings.TokenTypes.Team.ByDriver[driver];
        if (metadata.teamId != team.teamId) {
            errors.push(
                Error(
                    `Wrong teamId, expected '${team.teamId}' for driverId '${metadata.driverId}' but got '${metadata.teamId}'`
                )
            );
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
