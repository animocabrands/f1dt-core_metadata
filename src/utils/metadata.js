const {inventoryIds} = require('@animoca/blockchain-inventory_metadata');
const BigInteger = require('big-integer');
const {decode} = require('bits.js');
const {getExternalUrl, getImageUrl, getMetadataUrl} = require('./urls');

const constants = require('../constants');
const commonMappings = require('../mappings/Common');
const Types = require('../mappings/Common/Attributes/Type/Types');

function getCoreMetadata(id) {
  const RepairList = require('../RepairList');
  id = RepairList[id] || id;
  id = RepairList[id] || id; //For doubly wrong tokens

  const encoded = BigInteger(id);
  let decoded = decode(constants.TokenBitsLayout, encoded);
  for (const key in decoded) {
    decoded[key] = Number(decoded[key].toString(10));
  }

  //Common Metadata
  const type = commonMappings.Attributes.Type.ById[decoded.typeId].type;
  const label = commonMappings.Attributes.Label.ById[decoded.labelId].label;
  const season = commonMappings.Attributes.Season.ById[decoded.seasonId].season;
  const rarityTier = commonMappings.Attributes.Rarity.ByRarity[decoded.rarity].rarityTier;
  const country = commonMappings.Attributes.Country.ById[decoded.countryId].country;

  const fullTypeId = `${decoded.typeId},${decoded.subTypeId}`;

  let subType;
  let team;
  let model;
  let driver;

  //Non Track
  if (type === Types.Track.type) {
    subType = commonMappings.SubType.ByFullTypeId[fullTypeId].subType;
    team = commonMappings.Attributes.Team.ById[decoded.teamId].team;
    model = commonMappings.Attributes.Model.ById[decoded.modelId].model;
    driver = commonMappings.TokenTypes.Driver.ById[decoded.driverId].name;
  } else {
    let seasonMappings = require(`../mappings/Season${season}`);
    subType = seasonMappings.SubType.ByFullTypeId[fullTypeId].subType;
    team = seasonMappings.Attributes.Team.ById[decoded.teamId].team;
    model = seasonMappings.Attributes.Model.ById[decoded.modelId].model;
    driver = seasonMappings.TokenTypes.Driver.ById[decoded.driverId].name;
  }

  let coreMetadata = {
    seasonId: decoded.seasonId,
    season,
    typeId: decoded.typeId,
    type,
    subTypeId: decoded.subTypeId,
    subType,
    rarity: decoded.rarity,
    rarityTier,
    countryId: decoded.countryId,
    country,
    teamId: decoded.teamId,
    team,
    modelId: decoded.modelId,
    model,
    driverId: decoded.driverId,
    driver,
    labelId: decoded.labelId,
    label,
    counter: decoded.counter,
  };

  //For Track Metadata
  if (type === Types.Track.type) {
    //Do another decode
    decoded = decode(constants.TrackSegmentTokenBitsLayout, encoded);
    for (const key in decoded) {
      decoded[key] = Number(decoded[key].toString(10));
    }

    const track = commonMappings.Attributes.Track.ById[decoded.trackId];

    const trackSegment = {
      segmentId: decoded['trackSegment.segmentId'],
      zoneId: decoded['trackSegment.zoneId'],
      earnings: decoded['trackSegment.earnings'],
    };

    coreMetadata = {
      ...coreMetadata,
      ...{track: track.track},
      ...{trackId: decoded.trackId},
      ...{trackSegment: trackSegment},
    };
  } else {
    //For non track metadata

    //Setting up racing attributes
    let racingAttributes;
    switch (type) {
      case Types.Car.type:
      case Types.Part.type:
      case Types.Tyres.type:
        racingAttributes = commonMappings.Attributes.RacingAttributes[Types.Car.type];
        break;
      case Types.Driver.type:
      case Types.Gear.type:
        racingAttributes = commonMappings.Attributes.RacingAttributes[Types.Driver.type];
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
    };

    racing[racingAttributes[0]] = decoded['racing.stat1'];
    racing[racingAttributes[1]] = decoded['racing.stat2'];
    racing[racingAttributes[2]] = decoded['racing.stat3'];

    coreMetadata = {...coreMetadata, ...{racing: racing}};
  }

  return coreMetadata;
}

function getOpenseaMetadata(coreMetadata) {
  const typeValue = coreMetadata.type === 'Track' ? 'Event Segment' : coreMetadata.type;

  //Define common attributes
  let attributes = [
    {
      trait_type: 'type',
      value: typeValue,
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
  ];

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

  //Put the season flag if it is non track metadata
  if (coreMetadata.type !== Types.Track.type) {
    attributes.push({
      trait_type: 'season',
      value: coreMetadata.season,
    });
  }

  if (coreMetadata.countryId) {
    attributes.push({
      trait_type: 'country',
      value: coreMetadata.country,
    });
  }

  if (coreMetadata.type === Types.Track.type) {
    const track = commonMappings.Attributes.Track.ById[coreMetadata.trackId];
    attributes.push({
      trait_type: 'track',
      value: track.track,
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
      case Types.Gear.type:
        attributes.push({
          trait_type: 'gear_type',
          value: coreMetadata.subType,
        });
        break;
      case Types.Part.type:
        attributes.push({
          trait_type: 'part_type',
          value: coreMetadata.subType,
        });
        break;
      case Types.Tyres.type:
        attributes.push({
          trait_type: 'tyres_type',
          value: coreMetadata.subType,
        });
        break;
    }
  }

  if (coreMetadata.type === Types.Track.type) {
    attributes.push({
      trait_type: 'segment',
      value: coreMetadata.trackSegment.zoneId + '' + String.fromCharCode(coreMetadata.trackSegment.segmentId),
    });

    // attributes.push({
    //     trait_type: 'earning_share',
    //     value: coreMetadata.trackSegment.earnings/10**7 + '%'
    // })
  }

  //Racing attributes
  if (coreMetadata.racing) {
    let racingAttributes = [];
    switch (coreMetadata.type) {
      case Types.Car.type:
      case Types.Part.type:
      case Types.Tyres.type:
        racingAttributes = commonMappings.Attributes.RacingAttributes[Types.Car.type].map((attribute) => attribute.toLowerCase().replace(' ', '_'));
        break;
      case Types.Driver.type:
      case Types.Gear.type:
        racingAttributes = commonMappings.Attributes.RacingAttributes[Types.Driver.type].map((attribute) =>
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

    attributes = [...attributes, ...racingAttributes];
  }

  return attributes;
}

function getTokenExtendedMetadata(token, metadata = {}) {
  if (token !== undefined) {
    if (token.name !== undefined) {
      metadata.name = token.name;
    }

    if (token.description !== undefined) {
      metadata.description = token.description;
    }

    if (token.imageName !== undefined) {
      metadata.image = token.imageName;
    }

    if (token.youtube_url !== undefined) {
      metadata.youtube_url = token.youtube_url;
    }
  }

  return metadata;
}
function getFullMetadata(id, network = 'mainnet') {
  const coreMetadata = getCoreMetadata(id);
  let openseaMetadata = getOpenseaMetadata(coreMetadata);

  let extendedMetadata = {};

  const Seasons = require('../mappings/Common/Attributes/Season/Seasons');
  if (coreMetadata.season !== Seasons.NoSeason.season) {
    //For season's token
    const fullTypeId = `${coreMetadata.typeId},${coreMetadata.subTypeId}`;
    const seasonMappings = require(`../mappings/Season${coreMetadata.season}`);
    const Teams = require(`../mappings/Season${coreMetadata.season}/Attributes/Team/Teams`);
    const Models = require(`../mappings/Season${coreMetadata.season}/Attributes/Model/Models`);

    switch (coreMetadata.type) {
      case Types.Car.type:
        if (coreMetadata.team != Teams.NoTeam.team) {
          const teamCar = seasonMappings.TokenTypes.Car.ByTeam[coreMetadata.team];
          const specialCar = seasonMappings.TokenTypes.Car.ByTokenId[id];

          if (teamCar !== undefined) {
            extendedMetadata = getTokenExtendedMetadata(teamCar, extendedMetadata);
          }

          if (specialCar !== undefined) {
            extendedMetadata = getTokenExtendedMetadata(specialCar, extendedMetadata);
          }
        } else if (coreMetadata.model != Models.NoModel.model) {
          const modelCar = seasonMappings.TokenTypes.Car.ByModel[coreMetadata.model];
          extendedMetadata = getTokenExtendedMetadata(modelCar, extendedMetadata);
        }
        break;
      case Types.Driver.type:
        if (coreMetadata.driver != 'None') {
          extendedMetadata = {
            name: seasonMappings.TokenTypes.Driver.ByName[coreMetadata.driver].name,
            description: seasonMappings.TokenTypes.Driver.ByName[coreMetadata.driver].description,
          };

          //image override
          if (seasonMappings.TokenTypes.Driver.ByName[coreMetadata.driver].imageName !== undefined) {
            extendedMetadata = {
              ...extendedMetadata,
              image: seasonMappings.TokenTypes.Driver.ByName[coreMetadata.driver].imageName,
            };
          }
        } else if (coreMetadata.model) {
          extendedMetadata = {
            name: seasonMappings.TokenTypes.Driver.ByModel[coreMetadata.model].name,
            description: seasonMappings.TokenTypes.Driver.ByModel[coreMetadata.model].description,
          };
        }
        break;
      case Types.Part.type:
      case Types.Gear.type:
      case Types.Tyres.type:
        extendedMetadata = {
          name: seasonMappings.TokenTypes[coreMetadata.type].ByFullTypeId[fullTypeId].name,
          description: seasonMappings.TokenTypes[coreMetadata.type].ByFullTypeId[fullTypeId].description,
        };
        break;
    }

    extendedMetadata.collection = seasonMappings.SubType.ByFullTypeId[fullTypeId].collection;
  } else {
    //No Seasons Token
    switch (coreMetadata.type) {
      case Types.Track.type:
        //segment e.g. 1A
        const segment = coreMetadata.trackSegment.zoneId + '' + String.fromCharCode(coreMetadata.trackSegment.segmentId);
        let eMeta = {
          name: commonMappings.TokenTypes.TrackSegment.getName(coreMetadata.trackId, coreMetadata.rarity, segment),
          description: commonMappings.TokenTypes.TrackSegment.getDescription(coreMetadata.trackId, coreMetadata.rarity, segment),
        };
        eMeta.name = eMeta.name + ' ' + segment;
        extendedMetadata = {...eMeta};
        break;
    }
  }

  //Collection Id
  if (extendedMetadata.collection_id === undefined) {
    extendedMetadata.collection_id = inventoryIds.NonFungible.getCollectionId(BigInteger(id), constants.CollectionMaskLength);
  }

  //Collection Url
  extendedMetadata.collection_url = getMetadataUrl(extendedMetadata.collection_id, network);

  //Image
  if (extendedMetadata.image === undefined) {
    extendedMetadata.image = getImageUrl(extendedMetadata.name, coreMetadata, network);
  } else {
    //To use the override image file name in extended metadata
    extendedMetadata.image = getImageUrl(extendedMetadata.image, coreMetadata, network);
  }

  //External Url
  extendedMetadata.external_url = getExternalUrl(id, network);

  //Special Handling on a particular token type
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
    const Rarities = require('../mappings/Common/Attributes/Rarity/Rarities');
    switch (coreMetadata.rarity) {
      case 2:
      case 3:
        coreMetadata.rarityTier = Rarities.Legendary.rarityTier; //Legendary
        break;
      case 4:
      case 5:
      case 6:
        coreMetadata.rarityTier = Rarities.Epic1.rarityTier; //Rare
        break;
    }
    openseaMetadata = getOpenseaMetadata(coreMetadata);
    extendedMetadata.image = getImageUrl(extendedMetadata.name, coreMetadata, network);
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
