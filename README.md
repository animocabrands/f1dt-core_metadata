# F1 Delta Time, Core Metadata library

## Core metadata

### Core attributes

An F1 Delta Time NFT comes with a number of core attributes embedded within the value of the token identifier. These attributes comprise what we call the token's _Core Metadata_. There are two main benefits for using this structure:
1. the core attributes are set at creation and forever immutable,
2. the tokens can be interpreted on-chain. For example, a contract could provide a service in exchange for a token but only if this token is a _Car_ with a rarity between 7 and 9.

Here is the current list of the core attributes:

| Attribute Name | Binary Position | Data Type | Required | Season Specific | Collection Identifier | Description |
| :---           | :---            | :---      | :---:    | :---:           | :---                  | :---        |
| nonFungibleFlag  | 255  | bit    | no  | no  | yes | Used to distinguish fungible and non-fungible tokens. A value of _1_ represents a non-fungible token. |
| padding1         | 248  | uint7  | no  | N/A | yes | Reserved for later use. |
| typeId           | 240  | uint8  | yes | no  | yes | Numerical representation of the type of the token, for example _Car_, _Driver_ or _Gears_. |
| subTypeId        | 232  | uint8  | no  | yes | yes | Numerical representation of the subType of the token, when applicable. For example _Gears_ have different possible subTypes such as _Helmet_ or _Gloves_. |
| seasonId         | 224  | uint8  | yes | no  | yes | Numerical representation of the season of the token, for example _2019_. |
| padding2         | 192  | uint32 | no  | N/A | no  | Reserved for later use. |
| teamId           | 184  | uint8  | no  | yes | no  | Numerical representation of the team of the token, for example _Alfa Romeo Racing_. |
| rarity           | 176  | uint8  | yes | no  | no  | The rarity level of the token. |
| trackId          | 168  | uint8  | no  | yes | no  | Numerical representation of the track of the token, for example _Monaco_. |
| labelId          | 152  | uint16 | no  | no  | no  | Numerical representation of label of the token. Label are used for specific tokens and is intended to be used for collection and gamfication. |
| driverId     | 136  | uint16 | no  | no  | no  | The driver number for a _Driver_. |
| stat1            | 120  | uint16 | no  | yes | no  | The _Top Speed_ of a _Car_/_Part_/_Tyre_ **or** the _Stamina_ of a _Driver_/_Gear_. |
| stat2            | 104  | uint16 | no  | yes | no  | The _Acceleration_ of a _Car_/_Part_/_Tyre_ **or** the _Aggression_ of a _Driver_/_Gear_. |
| stat3            | 88   | uint16 | no  | yes | no  | The _Grip_ of a _Car_/_Part_/_Tyre_ **or** the _Concentration_ of a _Driver_/_Gear_. |
| luck             | 72   | uint16 | no  | yes | no  | The luck of the token. |
| effect           | 64   | uint8  | no  | yes | no  | The effect of the token. |
| special1         | 56   | uint8  | no  | yes | no  | The first special of the token. |
| special2         | 48   | uint8  | no  | yes | no  | The second special of the token. |
| counter          | 0    | uint48 | no  | yes | no  | Field used to ensure unicity of the tokens in case 2 tokens would have exactly the same other attributes. |

`Required` indicates whether the attribute must have a value different from zero.

`Season Specific` indicates whether the attribute's interpretation can vary between seasons.

`Collection Identifier` indicates whether the attribute is part of the collection identifier. Collection identifiers are primarily composed of the _typeId_, _subTypeId_ and _seasonId_. For example _Car 2019_ or _Intermediate Tyres 2020_.

Some attributes may or may not be needed, depending on the type, subType and season of the token (refer to the season-specific mapping files for more details).

### Mapped core attributes

Core attributes are encoded as numerical values. Those which name ends with `Id` are _unmapped_ and can be mapped to their text value using the mappings contained in this library. For example, typeId 1 can be mapped to the text value _Car_.

## Library usage

### `module.metadata` object

A set of functions which help with the manipulation of token identifiers and metadata objects.

#### `coreMetadataFromId(id)` and `fullMetadataFromId(id, [network])` functions

Build metadata objects from token identifiers.

```javascript
const { coreMetadataFromId, fullMetadataFromId } = require('@animoca/f1dt-core_metadata').utils;

const tokenId = '57897811519642769433138067471762254623735906850517137802921006713614358282351'; // the 1-1-1
const coreMetadata = coreMetadataFromId(tokenId);
console.log(coreMetadata);
const fullMetadata = fullMetadataFromId(tokenId);
console.log(fullMetadata);
```

#### `idFromCoreMetadata(coreMetadata)` function

Build token identifiers from core attributes (mapped and/or unmapped).

```javascript
const { idFromCoreMetadata } = require('@animoca/f1dt-core_metadata').utils;
const tokenId1 = idFromCoreMetadata({
    typeId: '1', // Car
    subTypeId: '0',
    seasonId: '2', // 2019
});
const tokenId2 = idFromCoreMetadata({
    typeId: '1', // Car
    subTypeId: '0',
    season: '2019',
});
const tokenId3 = idFromCoreMetadata({
    type: 'Car',
    subTypeId: 'None',
    seasonId: '2019',
});
console.log(tokenId1, tokenId2, tokenId3);
// tokenId1 == tokenId2 == tokenId3
```

### `module.constants` object

Some project constants such as the bits layout object and the fixed number of bits in the collection identifiers.

### `module.mappings` object

All the mappings necessary to manipulate metadata divided in common mappings and season-specific mappings.

Retrieve the name of a team from its id for season 2019:
```javascript
const seasonMappings = require('@animoca/f1dt-core_metadata').mappings['2019'];

```

Retrieve the Tier for a rarity:
```javascript

```

### `module.collections` object

The lists of existing collections.

### Scripts

#### Generate metadata from a token identifier
```bash
node scripts/metadataFromId.js -i <id> -n <network> [--full]
```
