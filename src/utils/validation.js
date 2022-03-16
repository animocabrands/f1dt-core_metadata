function AttributeOutOfRange(attribute, attributeValue, attributeMaxValue) {
  this.name = this.errorType = 'AttributeOutOfRange';
  this.message = `${attribute} out of range: ${attributeValue} (max ${attributeMaxValue})`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
AttributeOutOfRange.prototype = new Error();

function UnsupportedAttributeValue(id, idValue) {
  this.name = this.errorType = 'UnsupportedAttributeValue';
  this.message = `Unsupported ${id}: ${idValue}`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
UnsupportedAttributeValue.prototype = new Error();

function MissingAttribute(id, name) {
  this.name = this.errorType = 'MissingAttribute';
  this.message = `Missing attribute ${id}/${name}`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
MissingAttribute.prototype = new Error();

function AttributeNameNotFound(name, id, idValue) {
  this.name = this.errorType = 'AttributeNameNotFound';
  this.message = `'${name}' not found for '${id}'='${idValue}'`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
AttributeNameNotFound.prototype = new Error();

function AttributeIdNotFound(id, name, nameValue) {
  this.name = this.errorType = 'AttributeIdNotFound';
  this.message = `'${id}' not found for '${name}'='${nameValue}'`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
AttributeIdNotFound.prototype = new Error();

function WrongIdMapping(name, nameValue, id, idFoundValue, idExpectedValue) {
  this.name = this.errorType = 'WrongIdMapping';
  this.message = `Retrieved value for {'${name}'='${nameValue}'}: '${id}'='${idFoundValue}' instead of expected '${idExpectedValue}'`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
WrongIdMapping.prototype = new Error();

function WrongNameMapping(id, idValue, name, nameFoundValue, nameExpectedValue) {
  this.name = this.errorType = 'WrongNameMapping';
  this.message = `Retrieved id for {'${id}'='${idValue}'}: '${name}'='${nameFoundValue}' instead of expected '${nameExpectedValue}'`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
WrongNameMapping.prototype = new Error();

function WrongLinkedAttribute(
  id,
  name,
  idValue,
  nameValue,
  linkedName,
  linkedIdFoundValue,
  linkedNameFoundValue,
  linkedIdExpectedValue,
  linkedNameExpectedValue
) {
  this.name = this.errorType = 'WrongLinkedAttribute';
  this.message = `Retrieved linked value for {'${id}|${name}'='${idValue}|${nameValue}'}: '${linkedId}|${linkedName}'='${linkedIdFoundValue}|${linkedNameFoundValue}' instead of expected '${linkedIdExpectedValue}|${linkedNameExpectedValue}'`;
  this.stack = new Error(`${this.name} ${this.message}`).stack;
}
WrongLinkedAttribute.prototype = new Error();

function validateAndMapCoreAttribute(mapping, coreMetadata, attributeName, required) {
  const attributeId = attributeName + 'Id';
  if (coreMetadata[attributeName] !== undefined) {
    if (coreMetadata[attributeId] !== undefined) {
      const coreAttribute = mapping.ById[coreMetadata[attributeId]];
      if (coreAttribute === undefined) {
        throw new AttributeNameNotFound(attributeName, attributeId, coreMetadata[attributeId]);
      } else if (coreMetadata[attributeName] != coreAttribute[attributeName]) {
        throw new WrongIdMapping(attributeName, coreAttribute[attributeName], attributeId, coreMetadata[attributeId], coreAttribute[attributeId]);
      }
    } else {
      const coreAttribute = mapping.ByName[coreMetadata[attributeName]];
      if (coreAttribute !== undefined) {
        coreMetadata[attributeId] = coreAttribute[attributeId];
      } else {
        throw new AttributeIdNotFound(attributeId, attributeName, coreMetadata[attributeName]);
      }
    }
  } else {
    if (coreMetadata[attributeId] !== undefined) {
      const coreAttribute = mapping.ById[coreMetadata[attributeId]];
      if (coreAttribute === undefined) {
        throw new AttributeNameNotFound(attributeName, attributeId, coreMetadata[attributeId]);
      } else {
        coreMetadata[attributeName] = coreAttribute[attributeName];
      }
    } else if (required) {
      throw new MissingAttribute(attributeId, attributeName);
    }
  }
}

function validateCommonMetadata(coreMetadata) {
  const commonMappings = require('../mappings/Common/Attributes');

  const errors = [];

  try {
    validateAndMapCoreAttribute(commonMappings.Season, coreMetadata, 'season', true);
  } catch (error) {
    errors.push(error);
  }
  try {
    validateAndMapCoreAttribute(commonMappings.Type, coreMetadata, 'type', true);
  } catch (error) {
    errors.push(error);
  }
  try {
    validateAndMapCoreAttribute(commonMappings.Label, coreMetadata, 'label', false);
  } catch (error) {
    errors.push(error);
  }
  try {
    validateAndMapCoreAttribute(commonMappings.Country, coreMetadata, 'country', false);
  } catch (e) {
    errors.push(e);
  }
  try {
    validateAndMapCoreAttribute(commonMappings.Track, coreMetadata, 'track', false);
  } catch (e) {
    errors.push(e);
  }

  if (coreMetadata.rarity !== undefined) {
    const rarityTier = commonMappings.Rarity.ByRarity[coreMetadata.rarity].rarityTier;
    if (rarityTier !== undefined) {
      if (coreMetadata.rarityTier !== undefined && coreMetadata.rarityTier != rarityTier) {
        errors.push(new WrongNameMapping('rarity', coreMetadata.rarity, 'rarityTier', coreMetadata.rarityTier, rarityTier));
      } else {
        coreMetadata.rarityTier = commonMappings.Rarity.ByRarity[coreMetadata.rarity].rarityTier;
      }
    } else {
      errors.push(new AttributeNameNotFound('rarityTier', 'rarity', coreMetadata.rarity));
    }
  } else {
    errors.push(new MissingAttribute('rarity', ''));
  }

  if (errors.length > 0) {
    throw errors;
  }
}

function validateRacingAttribute(coreMetadata, attribute, maxValue) {
  if (coreMetadata.racing && coreMetadata.racing[attribute] > maxValue) {
    throw new AttributeOutOfRange(attribute, coreMetadata.racing[attribute], maxValue);
  }
}
function validateRacingAttributes(coreMetadata) {
  const errors = [];

  try {
    validateRacingAttribute(coreMetadata, 'stat1', 1001);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'stat2', 1001);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'stat3', 1001);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'luck', 1001);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'effect', 255);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'special1', 255);
  } catch (e) {
    errors.push(e);
  }

  try {
    validateRacingAttribute(coreMetadata, 'special2', 255);
  } catch (e) {
    errors.push(e);
  }

  if (errors.length > 0) {
    throw errors;
  }
}

function validateSeasonMetadata(coreMetadata) {
  const Seasons = require('../mappings/Common/Attributes/Season/Seasons');
  if (coreMetadata.season === Seasons.NoSeason.season) return;

  const seasonMappings = require(`../mappings/Season${coreMetadata.season}`);
  const errors = [];

  switch (coreMetadata.type) {
    case 'Part':
    case 'Gear':
    case 'Tyres':
      if (coreMetadata.subType !== undefined) {
        if (coreMetadata.subTypeId !== undefined) {
          const fullTypeId = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
          const expected = seasonMappings.SubType.ByFullTypeId[fullTypeId];
          if (expected === undefined) {
            errors.push(new AttributeNameNotFound('fullType', 'fullTypeId', fullTypeId));
          }
          if (coreMetadata.subType != expected.subType) {
            errors.push(new WrongNameMapping('fullTypeId', fullTypeId, 'fullType', coreMetadata.subType, expected.subType));
          }
        } else {
          const subType = seasonMappings.SubType.ByName[coreMetadata.subType];
          if (subType !== undefined) {
            coreMetadata.subTypeId = subType.subTypeId;
          } else {
            errors.push(new AttributeIdNotFound('subTypeId', 'subType', coreMetadata.subType));
          }
        }
      } else {
        if (coreMetadata.subTypeId !== undefined) {
          const fullTypeId = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
          const subType = seasonMappings.SubType.ByFullTypeId[fullTypeId];
          if (subType === undefined) {
            errors.push(new AttributeNameNotFound('fullType', 'fullTypeId', fullTypeId));
          } else {
            const name = subType.gear || subType.part || subType.tyres;
            coreMetadata.subType = name;
          }
        } else {
          errors.push(new MissingAttribute('subTypeId', 'subType'));
        }
      }
      break;
    default:
      if (
        (coreMetadata.subType !== undefined && coreMetadata.subType != 'None') ||
        (coreMetadata.subTypeId !== undefined && Number(coreMetadata.subTypeId) != 0)
      ) {
        errors.push(new UnsupportedAttributeValue('typeId', coreMetadata.typeId));
      }
  }

  switch (coreMetadata.type) {
    case 'Car':
    case 'Driver':
      try {
        validateAndMapCoreAttribute(seasonMappings.Attributes.Team, coreMetadata, 'team', false);
      } catch (e) {
        errors.push(e);
      }
      break;
    default:
      if (
        (coreMetadata.team !== undefined && coreMetadata.team != 'None') ||
        (coreMetadata.teamId !== undefined && Number(coreMetadata.teamId) != 0)
      ) {
        errors.push(
          new WrongLinkedAttribute(
            'typeId',
            'type', // source
            coreMetadata.typeId,
            coreMetadata.type, // source values
            'teamId',
            'team', // linked
            coreMetadata.teamId,
            coreMetadata.team, // linked retrieved
            '0',
            'None' // linked expected
          )
        );
      }
  }

  switch (coreMetadata.type) {
    case 'Car':
    case 'Driver':
      try {
        validateAndMapCoreAttribute(seasonMappings.Attributes.Model, coreMetadata, 'model', false);
      } catch (e) {
        errors.push(e);
      }
      break;
    default:
      if (
        (coreMetadata.model !== undefined && coreMetadata.model != 'None') ||
        (coreMetadata.modelId !== undefined && Number(coreMetadata.modelId) != 0)
      ) {
        errors.push(
          new WrongLinkedAttribute(
            'typeId',
            'type', // source
            coreMetadata.typeId,
            coreMetadata.type, // source values
            'modelId',
            'model', // linked
            coreMetadata.modelId,
            coreMetadata.model, // linked retrieved
            '0',
            'None' // linked expected
          )
        );
      }
  }

  switch (coreMetadata.type) {
    case 'Car':
    case 'Driver':
      if (
        coreMetadata.teamId !== undefined &&
        Number(coreMetadata.teamId) != 0 &&
        coreMetadata.modelId !== undefined &&
        Number(coreMetadata.modelId) != 0
      ) {
        errors.push(
          new WrongLinkedAttribute(
            'teamId',
            'team', // source
            coreMetadata.teamId,
            coreMetadata.team, // source values
            'modelId',
            'model', // linked
            coreMetadata.modelId,
            coreMetadata.model, // linked retrieved
            '0',
            'None' // linked expected
          )
        );
      }
      if (coreMetadata.teamId === undefined && coreMetadata.modelId === undefined) {
        errors.push(new MissingAttribute('teamId or modelId', 'team or model'));
      }
      break;
  }

  if (coreMetadata.type == 'Driver' && coreMetadata.driverId !== undefined && Number(coreMetadata.driverId) != 0) {
    if (coreMetadata.teamId === undefined || Number(coreMetadata.teamId) == 0) {
      errors.push(new MissingAttribute('teamId', 'team'));
    }
    const driver = seasonMappings.TokenTypes.Driver.ById[coreMetadata.driverId];
    if (driver === undefined) {
      errors.push(new AttributeNameNotFound('driver', 'driverId', coreMetadata.driverId));
    }
    // console.log(driver);
    const team = seasonMappings.Attributes.Team.ByName[driver.team];
    if (coreMetadata.teamId != team.teamId) {
      errors.push(
        new WrongLinkedAttribute(
          'driverId',
          'driver', // source
          coreMetadata.driverId,
          coreMetadata.driver, // source values
          'teamId',
          'team', // linked
          coreMetadata.teamId,
          coreMetadata.team, // linked retrieved
          team.teamId,
          team.team // linked expected
        )
      );
    }
  }

  if (errors.length > 0) {
    throw errors;
  }
}

function validateCoreMetadata(coreMetadata) {
  const errors = [];

  try {
    validateRacingAttributes(coreMetadata);
  } catch (errs) {
    errors.push(errs);
  }

  try {
    validateCommonMetadata(coreMetadata);
    // season metadata will be validated only if season is available
    validateSeasonMetadata(coreMetadata);
  } catch (errs) {
    errors.push(errs);
  }

  if (errors.length > 0) {
    throw errors;
  }
}

module.exports = {
  validateCoreMetadata,
  UnsupportedAttributeValue,
  MissingAttribute,
  AttributeNameNotFound,
  AttributeIdNotFound,
  WrongNameMapping,
  WrongLinkedAttribute,
};
