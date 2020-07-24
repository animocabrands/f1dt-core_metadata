const ValidationErrors = {
    UnsupportedAttributeValue: { type: 'UnsupportedAttributeValue', errorMessage: (id, idValue) => `Unsupported ${id}: ${idValue}`},
    MissingAttribute: {type:'MissingAttribute',errorMessage: (id, name) => `Missing attribute ${id}/${name}`},
    AttributeNameNotFound: {type:'AttributeNameNotFound',errorMessage: (name, id, idValue) => `'${name}' not found for '${id}'='${idValue}'`},
    AttributeIdNotFound: {type:'AttributeIdNotFound',errorMessage: (id, name, nameValue) => `'${id}' not found for '${name}'='${nameValue}'`},
    WrongIdMapping: {type:'WrongIdMapping',errorMessage: (name, nameValue, id, idFoundValue, idExpectedValue) => {
    return `Retrieved value for {'${name}'='${nameValue}'}: '${id}'='${idFoundValue}' instead of expected '${idExpectedValue}'`;
    }
},
    WrongNameMapping: {type:'WrongNameMapping',errorMessage: (name, nameValue, id, idFoundValue, idExpectedValue) => {
        return `Retrieved value for {'${name}'='${nameValue}'}: '${id}'='${idFoundValue}' instead of expected '${idExpectedValue}'`;
    }
    },
    WrongLinkedAttribute: {type:'WrongLinkedAttribute',errorMessage: (id, name, idValue, nameValue, linkedId, linkedName, linkedIdFoundValue, linkedNameFoundValue, linkedIdExpectedValue, linkedNameExpectedValue) => {
        return `Retrieved linked value for {'${id}|${name}'='${idValue}|${nameValue}'}: '${linkedId}|${linkedName}'='${linkedIdFoundValue}|${linkedNameFoundValue}' instead of expected '${linkedIdExpectedValue}|${linkedNameExpectedValue}'`;
    }},
};

class ValidationError extends Error {
    errorType;
    constructor(message, errorType) {
        super(message)
        this.errorType = errorType;
    }
};

class UnsupportedAttributeValue extends ValidationError {
    constructor(attributeId, attributeIdValue) {
        const message = ValidationErrors.UnsupportedAttributeValue.errorMessage(attributeId, attributeIdValue);
        super(message, ValidationErrors.UnsupportedAttributeValue.type);
    }
};

class MissingAttribute extends ValidationError {
    constructor(attributeId, attributeName) {
        const message = ValidationErrors.MissingAttribute.errorMessage(attributeId, attributeName);
        super(message, ValidationErrors.MissingAttribute.type);
    }
};

class AttributeNameNotFound extends ValidationError {
    constructor(attributeName, attributeId, attributeIdValue) {
        const message = ValidationErrors.AttributeNameNotFound.errorMessage(attributeName, attributeId, attributeIdValue);
        super(message, ValidationErrors.AttributeNameNotFound.type);
    }
};

class AttributeIdNotFound extends ValidationError {
    constructor(attributeId, attributeName, attributeNameValue) {
        const message = ValidationErrors.AttributeIdNotFound.errorMessage(attributeId, attributeName, attributeNameValue);
        super(message, ValidationErrors.AttributeIdNotFound.type);
    }
};

class WrongIdMapping extends ValidationError {
    constructor(attributeName, attributeNameValue, attributeId, attributeIdFoundValue, attributeIdExpectedValue) {
        const message = ValidationErrors.WrongIdMapping.errorMessage(attributeName, attributeNameValue, attributeId, attributeIdFoundValue, attributeIdExpectedValue);
        super(message, ValidationErrors.WrongIdMapping.type);
    }
};

class WrongNameMapping extends ValidationError {
    constructor(attributeId, attributeIdValue, attributeName, attributeNameFoundValue, attributeNameExpectedValue) {
        const message = ValidationErrors.WrongNameMapping.errorMessage(attributeId, attributeIdValue, attributeName, attributeNameFoundValue, attributeNameExpectedValue);
        super(message, ValidationErrors.WrongNameMapping.type);
    }
};

class WrongLinkedAttribute extends ValidationError {
    constructor(
        attributeId, attributeName, // source
        attributeIdValue, attributeNameValue, // source values
        linkedAttributeId, linkedAttributeName, // linked
        linkedAttributeIdFoundValue, linkedAttributeNameFoundValue, // linked found values
        linkedAttributeIdExpectedValue, linkedAttributeNameExpectedValue // linked expected values
    ) {
        const message = ValidationErrors.WrongLinkedAttribute.errorMessage(
            attributeId, attributeName, // source
            attributeIdValue, attributeNameValue, // source values
            linkedAttributeId, linkedAttributeName, // linked
            linkedAttributeIdFoundValue, linkedAttributeNameFoundValue, // linked found values
            linkedAttributeIdExpectedValue, linkedAttributeNameExpectedValue// linked expected values
        );
        super(message, ValidationErrors.WrongLinkedAttribute.type);
    }
};

function validateAndMapCoreAttribute(mapping, metadata, attributeName, required) {
    const attributeId = attributeName + 'Id';
    if (metadata[attributeName] !== undefined) {
        if (metadata[attributeId] !== undefined) {
            const coreAttribute = mapping.ById[metadata[attributeId]];
            if (coreAttribute === undefined) {
                throw new AttributeNameNotFound(attributeName, attributeId, metadata[attributeId]);
            } else if (metadata[attributeName] != coreAttribute[attributeName]) {
                throw new WrongIdMapping(attributeName, coreAttribute[attributeName], attributeId, metadata[attributeId], coreAttribute[attributeId]);
            }
        } else {
            const coreAttribute = mapping.ByName[metadata[attributeName]];
            if (coreAttribute !== undefined) {
                metadata[attributeId] = coreAttribute[attributeId];
            } else {
                throw new AttributeIdNotFound(attributeId, attributeName, metadata[attributeName]);
            }
        }
    } else {
        if (metadata[attributeId] !== undefined) {
            const coreAttribute = mapping.ById[metadata[attributeId]];
            if (coreAttribute === undefined) {
                throw new AttributeNameNotFound(attributeName, attributeId, metadata[attributeId]);
            } else {
                metadata[attributeName] = coreAttribute[attributeName];
            }
        } else if (required) {
            throw new MissingAttribute(attributeId, attributeName);
        }
    }
}

function validateCommonMetadata(metadata) {
    const commonMappings = require('../mappings/CommonAttributes');

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
        const rarityTier = commonMappings.Rarity.ByRarity[metadata.rarity].rarityTier;
        if (rarityTier !== undefined) {
            if (metadata.rarityTier !== undefined && metadata.rarityTier != rarityTier) {
                errors.push(new WrongNameMapping('rarity', metadata.rarity, 'rarityTier', metadata.rarityTier, rarityTier));
            } else {
                metadata.rarityTier = commonMappings.Rarity.ByRarity[metadata.rarity].rarityTier;
            }
        } else {
            errors.push(new AttributeNameNotFound('rarityTier', 'rarity', metadata.rarity));
        }
    } else {
        errors.push(new MissingAttribute('rarity', ''));
    }

    if (errors.length > 0) {
        throw errors;
    }
}

function validateSeasonMetadata(metadata) {
    const seasonMappings = require(`../mappings/Season${metadata.season}`);

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
                        errors.push(new AttributeNameNotFound('fullType', 'fullTypeId', fullTypeId));
                    }
                    if (metadata.subType != expected.extendedMeta.name) {
                        errors.push(new WrongNameMapping('fullTypeId', fullTypeId, 'fullType', metadata.subType, expected.part || expected.gear || expected.tyres));
                    }
                } else {
                    const subType = seasonMappings.SubType.ByName[metadata.subType];
                    if (subType !== undefined) {
                        metadata.subTypeId = subType.subTypeId;
                    } else {
                        errors.push(new AttributeIdNotFound('subTypeId', 'subType', metadata.subType));
                    }
                }
            } else {
                if (metadata.subTypeId !== undefined) {
                    const fullTypeId = `${metadata.typeId},${metadata.subTypeId}`;
                    const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId];
                    if (subType === undefined) {
                        errors.push(new AttributeNameNotFound('fullType', 'fullTypeId', fullTypeId));
                    } else {
                        const name = subType.gear || subType.part || subType.tyres;
                        metadata.subType = name;
                    }
                } else {
                    errors.push(new MissingAttribute('subTypeId', 'subType'));
                }
            }
            break;
        default:
            if (
                (metadata.subType !== undefined && metadata.subType != 'None') ||
                (metadata.subTypeId !== undefined && Number(metadata.subTypeId) != 0)
            ) {
                errors.push(new UnsupportedAttributeValue('typeId', metadata.typeId));
            }
        if (errors.length > 0) {
            throw errors;
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
                errors.push(new WrongLinkedAttribute(
                    'typeId', 'type', // source
                    metadata.typeId, metadata.type, // source values
                    'teamId', 'team', // linked
                    metadata.teamId, metadata.team, // linked retrieved
                    '0', 'None'  // linked expected
                ));
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
                errors.push(new WrongLinkedAttribute(
                    'typeId', 'type', // source
                    metadata.typeId, metadata.type, // source values
                    'modelId', 'model', // linked
                    metadata.modelId, metadata.model, // linked retrieved
                    '0', 'None'  // linked expected
                ));
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
                errors.push(new WrongLinkedAttribute(
                    'teamId', 'team', // source
                    metadata.teamId, metadata.team, // source values
                    'modelId', 'model', // linked
                    metadata.modelId, metadata.model, // linked retrieved
                    '0', 'None'  // linked expected
                ));
            }
            if (metadata.teamId === undefined && metadata.modelId === undefined) {
            errors.push(new MissingAttribute('teamId or modelId', 'team or model'));
            }
            break;
    }

    if (metadata.type == 'Driver' && metadata.driverId !== undefined && Number(metadata.driverId) != 0) {
        if (metadata.teamId === undefined || Number(metadata.teamId) == 0) {
            errors.push(new MissingAttribute('teamId', 'team'));
        }
        const driver = seasonMappings.TokenTypes.Driver.ById[metadata.driverId];
        if (driver === undefined) {
            errors.push(new AttributeNameNotFound('driver', 'driverId', metadata.driverId));
        }
        // console.log(seasonMappings.Attributes.Team.ByDriver);
        // console.log(driver);
        const team = seasonMappings.Attributes.Team.ByDriver[driver.driver];
        if (metadata.teamId != team.teamId) {
            errors.push(new WrongLinkedAttribute(
                'driverId', 'driver', // source
                metadata.driverId, metadata.driver, // source values
                'teamId', 'team', // linked
                metadata.teamId, metadata.team, // linked retrieved
                team.teamId, team.team  // linked expected
            ));
        }
    }

    if (errors.length > 0) {
        throw errors;
    }
}

function validateCoreMetadata(metadata) {
    const errors = [];
    try {
        validateCommonMetadata(metadata);
    } catch(errs) {
        errors.push(...errs);
    }

    try {
        validateSeasonMetadata(metadata);
    } catch(errs) {
        errors.push(...errs);
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = {
    validateCoreMetadata,
    ValidationError,
    UnsupportedAttributeValue,
    MissingAttribute,
    AttributeNameNotFound,
    AttributeIdNotFound,
    WrongNameMapping,
    WrongLinkedAttribute,
};
