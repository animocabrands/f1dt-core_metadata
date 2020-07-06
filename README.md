Core Metadata for F1 Delta Time

### Core Metadata Properties ###
An F1 Delta Time NFT consists of a number of properties embedded within the value of the token identifier. These properties comprise the NFT's core metadata.

#### Common Properties ####
These are metadata properties that are common to all minted NFTs. They will always specify a defined value.

- __seasonId__/__season__ - The F1 racing season (year) in which the NFT metadata properties are referenced from.
- __typeId__/__type__ - The type of NFT.
- __rarity__/__rarityTier__ - The rarity of the NFT.
- __labelId__/__label__ - A label which describes the release (mint) of the NFT.

#### Season-based Properties ####
These are metadata properties that are based off of the racing season, whose values will vary from season to season, depending on the actual state of the Formulat 1 season. Some of these properties will be dependent on the value or existence of other properties, as noted.

- __subTypeId__/__subType__ - The applicable sub-type of the NFT. Valid only for __Part__, __Gear__, and __Tyres__ types.
- __trackId__/__track__ - The applicable F1 or team track of the NFT.
- __teamId__/__team__ - The applicable team of the NFT. Valid only for __Car__ and __Driver__ types, and mutually exclusive with the metadata model property.
- __modelId__/__model__ - The applicable model (generic team) of the NFT. Valid only for __Car__ and __Driver__ types, and mutually exclusive with the metadata team property.
- __driverNumber__ - The applicable driver number of the NFT. Valid only for the __Driver__ type, and must also have the metadata team property defined for the NFT (i.e. a driver with a number belongs to a specific team).
- __counter__ - Free data field. Currently used as a unique identifier for specific NFTs (e.g. Apex cars).
- __stat{1,3}__ - Racing attributes of the NFT that defines performance contributions towards F1 Delta Time games.
- __luck__ - TBD
- __special{1,2}__ - TBD
- __effect__ - TBD
